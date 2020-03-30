import React from "react";
import Header from "../../../component/header";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {
  incrementAction,
  decrementAction,
  fetchSwapiAction,
  updateUrlDetailAction,
  clearSwapiAction,
  fetchProfileData
} from "../../../redux/action";

import Button from "react-bootstrap/Button";

class Explorer extends React.Component {
  increment = () => {
    this.props.increment();
  };
  decrement = () => {
    this.props.decrement();
  };

  componentDidUpdate(prevProps){
    if(prevProps.urlDetail !== this.props.urlDetail){
      this.props.fetchProfileData(this.props.urlDetail)   
    }
  }
  componentDidMount() {
    this.props.fetchSwapiAction();
    this.props.fetchProfileData(this.props.urlDetail)  
  }

  componentWillUnmount() {
    this.props.clearSwapiAction();
  }

  selectProfile = urlDetail => {
    this.props.updateUrlDetailAction(urlDetail);
  };

  render() {
    const { loadingProfile, selectedProfile } = this.props
    return (
      <React.Fragment>
        <Header />
        <h2>{this.props.user.name}</h2>
        <h2>{this.props.num}</h2>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <br />
        <div style={{ width: '100%', height: '100px', marginTop: "10vh", backgroundColor: 'cyan'}} >
                        <p>selected Profile: {loadingProfile ? '...Loading': selectedProfile.name} </p>
                        
                        <Link to="/about">go to about</Link>
                </div>
        <br />
        <div
          style={{
            width: "100%",
            marginTop: "10vh",
            borderTop: "1px solid #222"
          }}
        >
          <p>
            {this.props.swapiD.map(data => {
              return (
            
                <ul>
                  <li>
                    <p>Name: {data.name}</p>
                    <p>Height: {data.height}</p>
                    <button onClick={() => this.selectProfile(data.url)}>
                      {" "}
                      Select Profile{" "}
                    </button>
                  </li>
                </ul>
              )
            })}
          </p>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  num: state.count,
  user: state.user,
  swapiD: state.swapiD.data,
  selectedProfile: state.selectedProfile.data,
  loadingProfile: state.selectedProfile.loading,
  urlDetail: state.selectedProfile.urlDetail
});
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementAction()),
  decrement: () => dispatch(decrementAction()),
  fetchSwapiAction: () => dispatch(fetchSwapiAction()),
  updateUrlDetailAction: () => dispatch(updateUrlDetailAction()),
  clearSwapiAction: () => dispatch(clearSwapiAction()),
  fetchProfileData: () => dispatch(fetchProfileData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
