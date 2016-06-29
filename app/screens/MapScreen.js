import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { imageForName } from "../static/methods";

import ViewContainer from "../components/ViewContainer";
import ScrollViewContainer from "../components/ScrollViewContainer";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import TableView from  "../components/TableView";
// import places from "../data/places";
import geolib from "geolib";
import Map from "../components/Map";

const gaKey = "AIzaSyANHmJt78yKqJMrkvj71tMaASDhPmwQ-aY";
const keyword = "fastfood";

class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialPosition: {
                latitude: 37.78552685649934,
                longitude: -122.4055764581556,
            },
            moveLocation: {
                latitude: 37.78552685649934,
                longitude: -122.4055764581556,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            },
            places: [],
            // annotations: [
            //     {
            //         latitude: 37.78552685649934,
            //         longitude: -122.4055764581556,
            //         title: "MICKY DEE",
            //         animateDrop: true,
            //     }
            // ],
            annotations: [],
        }
    }
    componentWillMount() {
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this._fetchPlaces(position);
            },
            (error) => {
                this._fetchPlaces({
                    coords: {
                        latitude: 37.78552685649934,
                        longitude: -122.4055764581556,
                    },
                });
                alert(error.message);
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    }
    render() {
        console.log(this.state.moveLocation);
        const navigator = this.props.navigator;
        return (
            <ViewContainer>
                <Navbar title={"FASTFOODMAP"} />
                <ScrollViewContainer>
                    <Map annotations={this.state.annotations} moveLocation={this.state.moveLocation} />
                    <TableView places={this.state.places} onCellPress={this._onCellPress.bind(this)}/>
                </ScrollViewContainer>
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
    _fetchPlaces(position) {
        console.log("fetchPlaces");
        const baseURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
        fetch(`${baseURL}?location=${position.coords.latitude},${position.coords.longitude}&rankby=distance&type=restaurant&keyword=${keyword}&key=${gaKey}`)
        .then((response) => response.json())
        .then((response) => {
            console.log("got response, update");
            console.log(response);
            this._updatePlaces(position, response.results);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    _updatePlaces(position, places) {
        console.log("updatePlaces!");
        this.setState({
            initialPosition: position,
            places: places.map((place) => {
                place.distance = geolib.getDistance(position.coords,
                {
                    longitude: place.geometry.location.lng,
                    latitude: place.geometry.location.lat,
                });
                return place;
            }),
            annotations: places.map((place) => {
                return {
                    longitude: place.geometry.location.lng,
                    latitude: place.geometry.location.lat,
                    title: place.name,
                    animateDrop: true,
                    image: imageForName(place.name),
                };
            }),
        });
    }
}

const styles = StyleSheet.create({
    mapScreen: {},
});

module.exports = MapScreen;
