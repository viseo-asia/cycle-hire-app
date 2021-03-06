import React, { Component } from "react";
import {Avatar, Drawer, MenuItem} from "material-ui";
import PropTypes from "prop-types";
import theme from "./theme/index";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import actionsNavigator from "../../../../../actions";
import Auth from "../../../../../containers/Auth";

class HeaderDrawer extends Component {

    auth = new Auth();

    constructor() {
        super();
        this.state = {
            isAuthenticated: null
        }
    }

    componentWillMount() {
        this._isAuthenticatedHandler();
        const { profile: { email, picture, name } } = this.props;
        this.setState({
            email, picture, name
        })
    }

    _logOurHandler = () => {
        if(this.auth.isAuthenticated()) {
            this.auth.logout();
            this.props._navigationSelectedHandler("/")
        }
    };

    _isAuthenticatedHandler = () => this.setState({ isAuthenticated: this.auth.isAuthenticated() });

    render() {
        if(!this.state.isAuthenticated) return <Redirect to="/" />;

        const { isOpen, toggleDrawer, navReducers } = this.props;

        return (
            <Drawer
                open={isOpen}
                docked={false}
                onRequestChange={() => toggleDrawer(isOpen)}
            >
                <MenuItem
                    onClick={() => toggleDrawer(isOpen)}
                    style={theme.menuItem}
                >
                    <Avatar
                        src={this.state.picture}
                        size={30}
                        style={{ marginRight: 10 }}
                    />
                    { this.state.email }
                </MenuItem>
                {
                    navReducers.items.map((r, index) => (
                        <Link
                            key={index}
                            to={r.url}
                        >
                            <MenuItem
                                onClick={r.url === "/" ? this._logOurHandler.bind(this) : this.props._navigationSelectedHandler.bind(this, r.url)}
                            >
                                {r.name}
                            </MenuItem>
                        </Link>
                    ))
                }
            </Drawer>
        )
    }
}

HeaderDrawer.defaultProps = {
    isOpen: PropTypes.bool.isRequired,
    toggleDrawer: PropTypes.func.isRequired
};

HeaderDrawer.propTypes = {
    profile: PropTypes.shape({
        email: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        name: PropTypes.string
    })
};

const mapStateToProps = state => ({
    navReducers: state.reducerAdminNavigation
});

const mapDispatchTopProps = dispatch => ({
   _navigationSelectedHandler: (url) => dispatch(actionsNavigator(url))
});

export default connect(mapStateToProps, mapDispatchTopProps)(HeaderDrawer)