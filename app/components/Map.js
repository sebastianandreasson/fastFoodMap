import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ViewContainer from "./ViewContainer";
import MapView from "react-native-maps";

class Map extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            region: props.moveLocation,
        }
    }
    render() {
        return (
            <View style={styles.root}>
                <MapView
                 style={styles.map}
                 region={this.state.region}
                 showsUserLocation={true}
                 showsPointsOfInterest={false}
                 onRegionChange={this._onRegionChange.bind(this)}
                >
                {this.props.annotations.map((o, i) => {
                    o.key = i;
                    return (
                        <MapView.Marker {...o} />
                    )
                })}
                </MapView>
            </View>
        )
    }
    componentWillReceiveProps(props) {
        this.setState({ region: props.moveLocation });
    }
    _onRegionChange(region) {
        this.setState({ region });
        // console.log(e)
    }
}

const styles = StyleSheet.create({
    root: {
        height: 300,
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // position: "absolute",
        // height: 300,
        // borderBottomWidth: 1,
        // borderTopWidth: 1,
        // borderColor: "rgba(0, 0, 0, 0.1)",
        // borderColor: '#000000',
    },
});

module.exports = Map;
