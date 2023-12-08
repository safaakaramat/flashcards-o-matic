import React from "react";
import { useHistory } from "react-router-dom";

function StudyDeckButton({ deck }) {
  const history = useHistory();
  return (
    <button
      type="button"
      onClick={() => history.push(`/decks/${deck.id}/study`)}
    >
      Study
    </button>
  )
}

export default StudyDeckButton;
