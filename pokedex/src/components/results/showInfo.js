import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index.js";
import SearchInput from "./search.js";
import LoadingPage from "./loading.js";
import ProfilePage from "../profile/index";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

class ShowInfo extends Component {
  componentDidMount() {
    this.props.fetchPokemonData();
  }

  render() {
    const data = this.props.pokemonInfo;
    return (
      <Fragment>
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Search">
            {data.fetched !== false ? <SearchInput /> : <LoadingPage />}
          </Tab>
          <Tab eventKey="profile" title="Trainer list">
            <ProfilePage />
          </Tab>
        </Tabs>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemonInfo: state.pokemonDataReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemonData: () => {
      dispatch(actions.fetchPokemonData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowInfo);
