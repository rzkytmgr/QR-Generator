import React, { Component } from "react";
import "./Generator.scss";

export default class Content extends Component {
  state = {
    imgSrc: "https://www.qrtag.net/api/qr_4.svg?url=null",
    imgSize: 4,
    imgText: null
  };

  handleTextChange(e) {
    if (e.target.name === "url") {
      this.setState(
        {
          imgText: e.target.value
        },
        () => {
          this.setState({
            imgSrc: `https://www.qrtag.net/api/qr_${this.state.imgSize}.svg?url=${this.state.imgText}`
          });
        }
      );
    }

    if (e.target.name === "size") {
      this.setState(
        {
          imgSize: e.target.value
        },
        () => {
          this.setState({
            imgSrc: `https://www.qrtag.net/api/qr_${this.state.imgSize}.svg?url=${this.state.imgText}`
          });
        }
      );
    }
  }

  render() {
    return (
      <div className="Content">
        <div className="Image-Box">
          <img src={this.state.imgSrc} alt="" />
        </div>
        <div className="Form-Box">
          <div>
            <input
              type="text"
              name="url"
              placeholder="https://"
              onChange={(e) => this.handleTextChange(e)}
            />
          </div>
          <div>
            <input
              type="range"
              name="size"
              max="7"
              min="4"
              value={this.state.imgSize}
              onChange={(e) => this.handleTextChange(e)}
            />
            <span>{this.state.imgSize}</span>
          </div>
        </div>
      </div>
    );
  }
}
