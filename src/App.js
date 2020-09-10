import React from "react";
import "./styles.css";
import {connect} from 'react-redux';


import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";

const App = ( {click}) => {
  return (
    <div className="App">
      {click}
      <GameBoy />
      <PokeList />
    </div>
  );
};

const mapStateToProps = ({click}) =>{
  return{
    click
  }
}

export default connect(mapStateToProps)(App);
