import React from "react";
import Header from "../../header";
import CoHead from "../../content/Contents/ContentHeader";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  fetchSwapiAction,
  updateUrlDetailAction,
  clearSwapiAction,
  fetchProfileData
} from "../../../redux/action";

import {Link} from "react-router-dom";

class Explorer extends React.Component {

  componentDidMount() {
    this.props.fetchSwapiAction();
  }

  render() {
    const { loadingProfile, selectedProfile } = this.props
    return (
      <React.Fragment>
        <Header />
        <CoHead />
        <div
          style={{
            width: "100%",
            marginTop: "10vh",
            borderTop: "1px solid #222"
          }}
        >
          <p>
            {
              this.props.swapiD.map(data => {
              return (
                <div className="card-content-fth ">
                  <div className="card pmee sec">
                    <div className="card-body">
                      <h5 className="card-title">{data['Title']}</h5>
                      <hr />
                      {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                      <p className="card-text">
                        
                        <img src={data['Poster']} style={{width:'200px', height:'200px'}}/>
                      </p>
                      <label>0 views</label>
                      <br />
                      <Link to="/Explore" className="btn btn-info btn-sm card-photo-btn">
                        View Detail
                      </Link>
                    </div>
                  </div>
                </div>
              )
             })
            }
          </p>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  swapiD: state.swapiD.data,
  // selectedProfile: state.selectedProfile.data,
  // loadingProfile: state.selectedProfile.loading,
  // urlDetail: state.selectedProfile.urlDetail
});
const mapDispatchToProps = dispatch => ({
  fetchSwapiAction: () => dispatch(fetchSwapiAction()),
  // updateUrlDetailAction: () => dispatch(updateUrlDetailAction()),
  // clearSwapiAction: () => dispatch(clearSwapiAction()),
  // fetchProfileData: () => dispatch(fetchProfileData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
