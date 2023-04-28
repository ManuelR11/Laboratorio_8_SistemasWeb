
import React, { Component } from 'react';
import './carta.css';

class Carta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: props.backgroundImage,
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { isClicked } = this.state;
    const newImage = isClicked ? this.props.backgroundImage : this.props.newImage;
    this.setState({ backgroundImage: newImage, isClicked: !isClicked });
    
    if (!isClicked) {
      setTimeout(() => {
        this.setState({ backgroundImage: this.props.backgroundImage, isClicked: false });
      }, 3000);
    }

    this.props.onClickCarta(event);
  }

  render() {
    const { backgroundImage } = this.state;

    return (
      <div
        className="image-transition"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        onClick={this.handleClick}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Carta;




/*
import React, { Component } from 'react';
import './carta.css';

class Carta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: props.backgroundImage,
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isClicked } = this.state;
    const newImage = isClicked ? this.props.backgroundImage : this.props.newImage;
    this.setState({ backgroundImage: newImage, isClicked: !isClicked });
    
    if (!isClicked) {
      setTimeout(() => {
        this.setState({ backgroundImage: this.props.backgroundImage, isClicked: false });
      }, 5000);
    }
  }

  render() {
    const { backgroundImage } = this.state;

    return (
      <div
        className="image-transition"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        onClick={this.handleClick}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Carta;
*/