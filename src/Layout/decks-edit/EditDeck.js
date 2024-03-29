import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api/index";

import EditDeckBreadcrumbNavBar from "./EditDeckBreadcrumbNavBar";
import EditCancelButton from "./EditCancelButton";

function EditDeck() {
  const [deckName, setDeckName] = useState("");
  const [deckDescription, setDeckDescription] = useState("");

  const history = useHistory();
  const deckId = useParams().deckId;

  // loading the specified deck from the API
  useEffect(() => {
    async function loadDeck() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      setDeckName(deckFromAPI.name);
      setDeckDescription(deckFromAPI.description);
    }
    loadDeck();
  }, [deckId]);


  const handleDeckNameChange = (event) => setDeckName(event.target.value);
  const handleDeckDescriptionChange = (event) =>
    setDeckDescription(event.target.value);


  const handleEditDeckSubmit = (event) => {
    event.preventDefault();
    updateDeck({
      id: deckId,
      name: deckName,
      description: deckDescription,
    }).then((updatedDeck) => history.push(`/decks/${updatedDeck.id}`));
  };

  return (
    <div>
      <EditDeckBreadcrumbNavBar deckName={deckName} deckId={deckId} />
      <h2>Edit Deck</h2>
      <form onSubmit={handleEditDeckSubmit}>
        <div className="form-group">
          <label htmlFor="deckName">Name</label>
          <input
            id="deckName"
            type="text"
            name="deckName"
            className="form-control"
            onChange={handleDeckNameChange}
            value={deckName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="deckDescription">Description</label>
          <textarea
            id="deckDescription"
            name="deckDescription"
            className="form-control"
            rows="5"
            onChange={handleDeckDescriptionChange}
            value={deckDescription}
          />
        </div>
        <EditCancelButton deckId={deckId} />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditDeck;
