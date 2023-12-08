import React from "react";
import { deleteDeck } from "../../utils/api";

function DeleteDeckButton({ deck }) {
  const handleDelete = () => {
    if (
      window.confirm("Delete this deck? You will not be able to recover it")
    ) {
      deleteDeck(deck.id)
    }
  };
  return (
    <button
      type="button"
      onClick={handleDelete}
    >
      Delete
    </button>
  )
}

export default DeleteDeckButton;
