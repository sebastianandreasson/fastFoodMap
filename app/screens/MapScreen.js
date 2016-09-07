import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { AdMobBanner } from "react-native-admob"
import { imageForName, androidImageForName } from "../static/methods";
import DeviceInfo from "react-native-device-info";

import ViewContainer from "../components/ViewContainer";
import ScrollViewContainer from "../components/ScrollViewContainer";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import TableView from  "../components/TableView";
// import places from "../data/places";
import geolib from "geolib";
import Map from "../components/Map";

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
            annotations: [],
        }
    }
    componentDidMount() {
        this._getCurrentPosition();
    }
    _bannerError(err){
        console.warn(err);
    }
    _getCurrentPosition(callback) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this._fetchPlaces(position, callback);
            },
            (error) => {
                this._fetchPlaces({
                    coords: {
                        latitude: 37.78552685649934,
                        longitude: -122.4055764581556,
                    },
                }, callback);
                alert("unable to get location, check app permissions in settings.");
                console.warn(error.message);
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
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
    _fetchPlaces(position, callback) {
        const baseURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
        fetch(`${baseURL}?location=${position.coords.latitude},${position.coords.longitude}&rankby=distance&type=restaurant&keyword=${keyword}&key=${gaKey}`)
        .then((response) => response.json())
        .then((response) => {
            console.log("got response, update");
            console.log(response);
            this._updatePlaces(position, response.results, callback);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    _updatePlaces(position, places, callback) {
        this.setState({
            initialPosition: position,
            moveLocation: {
                ...position.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            },
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
                    coordinate: {
                        longitude: place.geometry.location.lng,
                        latitude: place.geometry.location.lat,
                    },
                    title: place.name,
                    animateDrop: true,
                    image: imageForName(place.name),
                    distance: geolib.getDistance(position.coords,
                    {
                        longitude: place.geometry.location.lng,
                        latitude: place.geometry.location.lat,
                    }),
                    androidImage: androidImageForName(place.name),
                };
            }),
        });
        if (callback) callback();
    }
    render() {
        const navigator = this.props.navigator;
        return (
            <ViewContainer>
                <ViewContainer>
                    <Map annotations={this.state.annotations} moveLocation={this.state.moveLocation} />
                    <TableView places={this.state.places} onCellPress={this._onCellPress.bind(this)} onRefresh={this._getCurrentPosition.bind(this)}/>
                </ViewContainer>
                <AdMobBanner
                  bannerSize="smartBannerPortrait"
                  adUnitID="ca-app-pub-4581009299904143/7241017310"
                  testDeviveID="EMULATOR"
                  didFailToReceiveAdWithError={this._bannerError} />
            </ViewContainer>
        )
    }
}

const styles = StyleSheet.create({
    mapScreen: {},
});

module.exports = MapScreen;
