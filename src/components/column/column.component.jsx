import React from "react";

import "./column.styles.scss";

function Column(props) {
  const cardDrop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id);
    card.style.display = "block";

    e.target.appendChild(card);
    e.dataTransfer.clearData();
  };

  const dragOver = e => {
    e.preventDefault();
  };

  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={cardDrop}
      onDragOver={dragOver}
    >
      <div className="title">{props.title.toUpperCase()}</div>
      <button className="btn" onClick={() => props.onClick(props.type)}>
        + Add an item{" "}
      </button>
      {props.children}
    </div>
  );
}

export default Column;
