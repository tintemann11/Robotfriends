import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
return (<div>{robots.map((user, i) => (
    <Card
      key={i}
      id={user.id} // Beachte auch, dass ich robots[i] durch user ersetzt habe
      name={user.name}
      email={user.email}
    />
  ))}</div>);
}

export default CardList;
