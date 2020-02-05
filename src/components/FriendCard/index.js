import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="btn btn-default" onClick={props.clickFriend}>
      <img src={props.image} width="150"  id={props.id} data-name={props.name} alt={props.name}/>
    </div>
  );
}

export default FriendCard;
