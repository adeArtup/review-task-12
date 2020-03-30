import React, { Component, Fragment } from "react";
import "./css/ContentHeader.css";

class ContentHeader extends React.Component {
  render() {
    return (
      <div className="card-profil">
        <div className="contain">
          <div className="card-photo first"></div>
          <div className="card-photo secound text-left">
             <h1>WELLCOME TO THE LIST MOVIE 2020</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentHeader;
