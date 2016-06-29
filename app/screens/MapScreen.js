import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import ViewContainer from "../components/ViewContainer";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import TableView from  "../components/TableView";
import places from "../data/places";
import geolib from "geolib";
import Map from "../components/Map";

const gaKey = "AIzaSyANHmJt78yKqJMrkvj71tMaASDhPmwQ-aY";
const keyword = "mc donalds";

class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialPosition: null,
            moveLocation: null,
            places,
            // annotations: [
            //     {
            //         latitude: 37.78552685649934,
            //         longitude: -122.4055764581556,
            //         title: "MICKY DEE",
            //         animateDrop: true,
            //     }
            // ],
            annotations: places.map((place) => {
                return {
                    longitude: place.geometry.location.lng,
                    latitude: place.geometry.location.lat,
                    title: place.name,
                    animateDrop: true,
                    image: require('../images/mcdonaldsIcon.png'),
                };
            }),
        }
    }
    componentWillMount() {
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const initialPosition = JSON.stringify(position);
                const string = `?location=${position.coords.latitude},${position.coords.longitude}&rankby=distance&type=restaurant&keyword=${keyword}&key=${gaKey}`;
                this.setState({ initialPosition, places: places.map((place) => {
                    place.distance = geolib.getDistance(position.coords,
                    {
                        longitude: place.geometry.location.lng,
                        latitude: place.geometry.location.lat,
                    });
                    return place;
                }),
                });
            },
            (error) => alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    }
    render() {
        console.log(this.state.moveLocation);
        const navigator = this.props.navigator;
        return (
            <ViewContainer>
                <Navbar title={"Fast food map"} />
                <Map annotations={this.state.annotations} moveLocation={this.state.moveLocation} />
                <TableView places={this.state.places} onCellPress={this._onCellPress.bind(this)}/>
            </ViewContainer>
        )
    }
    _onCellPress(place) {
        const moveLocation = {
            longitude: place.geometry.location.lng,
            latitude: place.geometry.location.lat,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        };
        this.setState({ moveLocation });
    }
    // _renderRow(song) {
    //     return (
    //         <TouchableOpacity style={styles.listItem}>
    //             <Text style={styles.listItemText}>{song.title}</Text>
    //         </TouchableOpacity>
    //     )
    // }
}

const styles = StyleSheet.create({
    mapScreen: {},
});

module.exports = MapScreen;
