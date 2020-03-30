import React from "react";
import Header from "../../header";
import CoHead from "../../content/Contents/ContentHeader";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  fetchSwapiAction
} from "../../../redux/action";

import { Link } from "react-router-dom";

class Explorer extends React.Component {
  componentDidMount() {
    this.props.fetchSwapiAction();
  }

  render() {
    const { loadingProfile, selectedProfile } = this.props;
    return (
      <React.Fragment>
        <Header />
        <CoHead />

        <div className="row">
        {this.props.swapiD.map(data => {
          return (
            
              <div className="col-sm-4">
                <div className="card-content-fth ">
                  <div className="card pmee sec">
                    <div className="card-body">
                      <h5 className="card-title">{data["Title"]}</h5>
                      <hr />
                      {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                      <p className="card-text">
                        <img
                          src={data["Poster"]}
                          style={{ width: "200px", height: "200px" }}
                        />
                      </p>
                      <label>0 views</label>
                      <br />
                      <Link
                        to="/Detail"
                        className="btn btn-info btn-sm card-photo-btn"
                        onClick=""
                      >
                        View Detail
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            
          );
        })}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  swapiD: state.swapiD.data
});
const mapDispatchToProps = dispatch => ({
  fetchSwapiAction: () => dispatch(fetchSwapiAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
