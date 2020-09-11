import React from "react";
import "./styles.css";
import {connect} from 'react-redux';
import {CLICK} from './store/action'

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";

const App = ( {click, handleClick}) => {
  return (
    <div className="App">
    <button onClick = {()=>handleClick()}>click</button>
      
      <GameBoy />
      <PokeList />
    </div>
  );
};

const mapStateToProps = ({ click }) =>{
  return{
    click
  };
};

const mapDispactchToProps = dispatch => {
  return {
    handleClick : () => dispatch ({type : CLICK})
  }
}

export default connect(mapStateToProps, mapDispactchToProps )(App);
