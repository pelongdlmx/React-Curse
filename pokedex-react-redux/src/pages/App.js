import React, { Fragment, Component } from 'react';
import '../styles/App.css';
import Header from '../components/header';
import ShowInfo from '../components/info';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <ShowInfo/>
      </Fragment>
    );
  }
}
 
export default App;