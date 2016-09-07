import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

class StatusbarBackground extends Component {
    render () {
        return (
            <View style={[styles.statusbarBackground, this.props.style || {}]} />
        )
    }
}

const styles = StyleSheet.create({

    statusbarBackground: {
        height: 20
    }
});

module.exports = StatusbarBackground;
