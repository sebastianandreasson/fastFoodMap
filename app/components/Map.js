import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import ViewContainer from "./ViewContainer";
// import MapView from "react-native-maps";
import Mapbox from "react-native-mapbox-gl";

class Map extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            region: props.moveLocation,
        }
    }
    render() {
        // iOS vs Android Map
        // return (
        //     <View style={styles.root}>
        //         <MapView
        //          style={styles.map}
        //          region={this.state.region}
        //          showsUserLocation={true}
        //          showsPointsOfInterest={false}
        //          onRegionChange={this._onRegionChange.bind(this)}
        //         >
        //         {this.props.annotations.map((o, i) => {
        //             o.key = i;
        //             return (
        //                 <MapView.Marker {...o} />
        //             )
        //         })}
        //         </MapView>
        //     </View>
        // )
        return (
            <Mapbox
             style={{ flex: 1 }}
             accessToken={"pk.eyJ1Ijoic2ViYXN0aWFuYW5kcmVhcyIsImEiOiJjaXE4ZXhkdWIwMDNjaHNrcXluaXRsNW1nIn0.r_jwvoIB4WKf6NO0031--w"}
             centerCoordinate={this.state.region}
             zoomLevel={14}
             showsUserLocation={true}
             logoIsHidden={true}
             annotations={this.props.annotations.map((o) => this._mapAnnotations(o))}>

            </Mapbox>
        )
    }
    componentWillReceiveProps(props) {
        this.setState({ region: props.moveLocation });
    }
    _onRegionChange(region) {
        this.setState({ region });
    }
    _mapAnnotations(o) {
        const subtitle = o.distance + " m away.";
        return {
            type: "point",
            coordinates: [o.coordinate.latitude, o.coordinate.longitude],
            title: o.title,
            subtitle,
            annotationImage: {
                url: o.androidImage,
                width: 30,
            }
        }
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
