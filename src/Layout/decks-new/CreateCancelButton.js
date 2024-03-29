import React from "react";
import { useHistory } from "react-router-dom";

function CreateCancelButton() {
  const history = useHistory();

  return (
    <button
      type="button"
      className="btn btn-dark mr-2"
      onClick={() => history.push("/")}
    >
      Cancel
    </button>
  );
}

export default CreateCancelButton;
