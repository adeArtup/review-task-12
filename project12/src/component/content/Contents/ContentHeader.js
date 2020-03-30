import React, { Component, Fragment } from "react";
import "./css/ContentHeader.css";

class ContentHeader extends React.Component {
  render() {
    return (
      <div className="card-profil">
        <div className="contain">
          <div className="card-photo first"></div>
          <div className="card-photo secound text-left">
            <label className="card-photo-title">Hacktiv8 Meetup</label>
            <div className="card-photo-detail">
              <div className="card-photo-loc">Location </div>
              <div className="card-photo-mem">Member </div>
              <div className="card-photo-org">Organizers </div>
              <div className="card-photo-loc">Jakarta, Indonesia</div>
              <div className="card-photo-mem">1,078</div>
              <div className="card-photo-org">Adhy Winata</div>
            </div>
            <a href="#" className="btn btn-success btn-lg card-photo-btn">
              Join Us
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentHeader;
