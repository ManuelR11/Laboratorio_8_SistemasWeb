
import React, { Component } from "react";
import Carta from "../Carta/carta.js";
import { images } from "../Imagenes/imagenes.js";
import backgroundImage from "../../Imagenes/background1.png";
import "./total_cartas.css";
import Indice from "../Indice/indice.js";

class total_cartas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  handleCartaClick = () => {
    this.setState((prevState) => ({ contador: prevState.contador + 1 }));
  };

  render() {
    let cards = [];
    let usedIndexes = [];
    let i = 0;
    while (i < 18) {
      let newImageIndex = Math.floor(Math.random() * (images.length - 1)) + 1;
      while (usedIndexes.includes(newImageIndex)) {
        newImageIndex = Math.floor(Math.random() * (images.length - 1)) + 1;
      }
      usedIndexes.push(newImageIndex);
      cards.push(
        <Carta
          key={i}
          backgroundImage={images[0].src}
          newImage={images[newImageIndex].src}
          id={images[newImageIndex].id}
          onClickCarta={this.handleCartaClick}
        ></Carta>
      );
      i++;
    }
    const style = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      margin: 0,
      padding: 0
    };
    return (
      <div style={style}>
        <Indice count={this.state.contador} />
        <div id="tabla">{cards}</div>
        </div>
    );
  }
}

export default total_cartas;

/*
import React, { Component } from "react";
import Carta from "../Carta/carta.js";
import { images } from "../Imagenes/imagenes.js";
import backgroundImage from "../../Imagenes/background1.png";
import "./total_cartas.css";
import Indice from "../Indice/indice.js";

class total_cartas extends Component {
  render() {
    let cards = [];
    let usedIndexes = [];
    let i = 0;
    while (i < 18) {
      let newImageIndex = Math.floor(Math.random() * (images.length - 1)) + 1;
      while (usedIndexes.includes(newImageIndex)) {
        newImageIndex = Math.floor(Math.random() * (images.length - 1)) + 1;
      }
      usedIndexes.push(newImageIndex);
      cards.push(
        <Carta
          key={i}
          backgroundImage={images[0].src}
          newImage={images[newImageIndex].src}
          id={images[newImageIndex].id}
        ></Carta>
      );
      i++;
    }
    const style = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      margin: 0,
      padding: 0
    };
    return (
      <div style={style}>
        <Indice />
        <div id="tabla">{cards}</div>
      </div>
    );
  }
}

export default total_cartas;
*/