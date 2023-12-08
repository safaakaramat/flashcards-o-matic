import React from "react";
import { useHistory } from "react-router-dom";

function ViewDeckButton( { deck }) {
  const history = useHistory();

  return (
    <button
      type="button"
      onClick={() => history.push(`/decks/${deck.id}`)}
    >
      View
    </button>
  )
}

export default ViewDeckButton;
