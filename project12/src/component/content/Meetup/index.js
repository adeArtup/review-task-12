import React, { Fragment, Component } from "react";
import { Link } from 'react-router-dom';
import Header from '../../../component/header';

class Meetup extends React.Component {
    render(){
        return(
        <Fragment>
            <Header />    
            <h1>Meetup</h1>
        </Fragment>
        );
    }
}


export default Meetup;