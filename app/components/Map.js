import React, { Component } from 'react';
import { MapView, StyleSheet } from 'react-native';

class ViewContainer extends Component {
    render() {
        console.log(this.props.moveLocation);
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
        console.log("MAP componentWillReceiveProps");
    }
    _onRegionChange(e) {
        // console.log(e)
    }
}

const styles = StyleSheet.create({
    map: {
        height: 200,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: '#000000',
    },
});

module.exports = ViewContainer;
