import React from "react";
import "./styles.css";
import {connect} from 'react-redux';
import {CLICK} from './store/action'

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";

const App = ( {Click, }) => {
  return (
    <div className="App">
    <button onClick = {()=>Click()}>click</button>
      
      <GameBoy />
      <PokeList />
    </div>
  );
};


const mapDispactchToProps = dispatch => {
  return {
    Click : () => dispatch ({type : CLICK})
  }
}

export default connect(null, mapDispactchToProps )(App);
