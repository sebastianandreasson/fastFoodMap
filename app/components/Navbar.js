import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ViewContainer from "./ViewContainer";
import StatusbarBackground from "./StatusbarBackground";

class Navbar extends Component {
    render () {
        return (
            <ViewContainer style={{ height: 60 }}>
                <StatusbarBackground />
                <View style={[styles.navbar, this.props.style || {}]}>
                    <Text style={styles.navbarTitle}>
                        {this.props.title}
                    </Text>
                </View>
            </ViewContainer>
        )
    }
}

const styles = StyleSheet.create({

    navbar: {
        height: 40,
        backgroundColor: "orange",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    navbarTitle: {
        fontSize: 20,
        color: "#ffffff"
    }
});

module.exports = Navbar;
