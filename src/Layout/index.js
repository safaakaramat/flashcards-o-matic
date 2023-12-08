import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./home/Home";
import Study from "./decks-study/Study";
import CreateDeck from "./decks-new/CreateDeck";
import Deck from "./decks/Deck";
import EditDeck from "./decks-edit/EditDeck";
import AddCard from "./decks-cards/new/AddCard";
import EditCard from "./decks-cards/edit/EditCard";
import NotFound from "./NotFound";

function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/decks/new">
            <CreateDeck />
          </Route>

          <Route exact path="/decks/:deckId">
            <Deck />
          </Route>

          <Route exact path="/decks/:deckId/study">
            <Study />
          </Route>


          <Route exact path="/decks/:deckId/edit">
            <EditDeck />
          </Route>


          <Route exact path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route exact path="/decks/:deckId/cards/:cardId/edit" >
            <EditCard />
          </Route>

          <Route>
            <NotFound />
          </Route>

        </Switch>

      </div>
    </div>
  );
}

export default Layout;
