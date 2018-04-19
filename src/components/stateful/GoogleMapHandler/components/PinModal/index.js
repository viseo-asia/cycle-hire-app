import React, { Component } from 'react';
import {CircularProgress, Dialog} from "material-ui";
import PropTypes from 'prop-types';
import DockingGraph from "../DockingGraph";

class PinModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            window: {
                height: window.innerHeight,
                width: window.innerWidth
            }
        }
    }

    render() {
        const {isOpen, toggleHandler, data} = this.props;

        return (
            <Dialog
                modal={false}
                open={isOpen}
                onRequestClose={toggleHandler}
            >
                <div>
                    <div className="row">
                        <div className="col-10">
                            <h1 style={{ color: "#13378f", fontSize: 18 }}>{ data ? data.commonName : "No Title" }</h1>
                            <span style={{ color: "#48b5de", fontSize: 14 }}>{ data ? data.bikes : 0 } bikes * { data ? data.spaces : 20 } spaces</span>
                        </div>
                        <div className="col-2">
                            <CircularProgress
                                mode="determinate"
                                value={80}
                                size={55}
                                thickness={5}
                                style={{ marginRight: 10 }}
                            />
                        </div>
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <DockingGraph chartHeight={(this.state.window.height / 2) - 100} paperStyle={{ height: this.state.window.height / 2}} />
                    </div>
                </div>
                {/*<div style={{ marginTop: 10 }}>*/}
                {/*The actions in this window were passed in as an array of React objects.*/}
                {/*</div>*/}
            </Dialog>
        )
    }
};

PinModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleHandler: PropTypes.func.isRequired,
    data: PropTypes.shape({
        commonName: PropTypes.string,
        bikes: PropTypes.number,
        spaces: PropTypes.number
    })
};

PinModal.defaultProps = {
    data: {
        commonName: "No Title",
        bikes: 0,
        spaces: 15
    }
};

export default PinModal;