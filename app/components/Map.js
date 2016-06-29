import React, { Component } from 'react';
import { MapView, StyleSheet } from 'react-native';

class ViewContainer extends Component {
    render() {
        return (
            <MapView
             style={styles.map}
             region={this.props.moveLocation}
             annotations={this.props.annotations}
             showsPointsOfInterest={false}
             onRegionChange={this._onRegionChange}
            />
        )
    }
    componentWillReceiveProps() {
    }
    _onRegionChange(e) {
        // console.log(e)
    }
}

const styles = StyleSheet.create({
    map: {
        height: 300,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.1)",
        // borderColor: '#000000',
    },
});

module.exports = ViewContainer;
