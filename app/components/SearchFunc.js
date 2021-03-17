import React, { Component } from "react";
import { SearchBar } from "react-native-elements";
import GLOBALS from "../utils/global";

class SearchFunc extends Component {
  state = { search: GLOBALS.DEFAULT_SEARCH };

  updateSearch = search => {
    this.setState({ search });
  };

  onSearchSubmit = () => {
    this.props.onTermSubmit(this.state.search);
  };
  render() {
    const { search } = this.state;

    return (
      <SearchBar
        containerStyle={{ backgroundColor: GLOBALS.BG_COLOR.BRAND, borderBottomColor: 'transparent',
        borderTopColor: 'transparent' }}
        inputStyle={{ backgroundColor: GLOBALS.BG_COLOR.BRAND }}
        inputContainerStyle={{ backgroundColor: GLOBALS.BG_COLOR.BRAND}}
        inputStyle={{fontSize: 14}}
        placeholder="Search everything..."
        onChangeText={this.updateSearch}
        value={search}
        onSubmitEditing={this.onSearchSubmit}
      />
    );
  }
}

export default SearchFunc;
