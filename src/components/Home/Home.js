import React from "react";
import { Card, CardTitle, CardText } from "material-ui/Card";

const HomePage = () => {
  const style = { maxWidth: 600, marginBottom: "2rem" };
  return (
    <React.Fragment>
      <Card style={style}>
        <CardTitle title="Card title One" subtitle="Card One subtitle" />
        <CardText>
          Lorem ipsum dolor sit amet alejo, consectetur adipiscing elit. Donec
          mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
          vulputate interdum sollicitudin. Nunc lacinia auctor quam sed
          pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque
          lobortis odio.
        </CardText>
      </Card>
      <Card style={style}>
        <CardTitle title="Card title Two" subtitle="Card Two subtitle" />
        <CardText>
          Lorem ipsum two dolor sit amet developer, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed
          pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque
          lobortis odio.
        </CardText>
      </Card>
      <Card style={style}>
        <CardTitle title="Card title Three" subtitle="Card Three subtitle" />
        <CardText>
          Lorem ipsum three dolor sit amet, consectetur adipiscing elit. Donec
          mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
          vulputate interdum sollicitudin. Nunc lacinia auctor quam sed
          pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque
          lobortis odio.
        </CardText>
      </Card>
    </React.Fragment>
  );
};

export default HomePage;
