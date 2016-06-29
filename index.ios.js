/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator } from 'react-native';
import MapScreen from "./app/screens/MapScreen";

class fastFoodMap extends Component {
    _renderScene(route, navigator) {
        var globalNavigatorProps = {
            navigator,
        };
        switch (route.name) {
            case "mapScreen":
                return (
                    <MapScreen {...globalNavigatorProps} />
                );
            default:
                return null;
        };
    }
    render() {
        return (
            <Navigator
             initialRoute={{ name: "mapScreen" }}
             ref="appNavigator"
             style={styles.navigatorStyle}
             renderScene={this._renderScene}
            />
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('fastFoodMap', () => fastFoodMap);
