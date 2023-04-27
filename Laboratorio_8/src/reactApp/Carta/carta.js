import React, { Component } from 'react';
import './carta.css';

class Carta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: props.backgroundImage,
      isClicked: false,
      lastClickedId: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isClicked, lastClickedId } = this.state;
    const { id, newImage, backgroundImage } = this.props;

    if (id === lastClickedId) {
      // If the current card's ID matches the ID of the last clicked card, keep showing the new image
      this.setState({ backgroundImage: newImage, isClicked: true });
    } else {
      // If the current card's ID doesn't match the ID of the last clicked card, show the new image for 5 seconds
      this.setState({ backgroundImage: newImage, isClicked: true, lastClickedId: id });
      setTimeout(() => {
        this.setState({ backgroundImage: backgroundImage, isClicked: false, lastClickedId: null });
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