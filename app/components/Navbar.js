import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Navbar extends Component {
    render () {
        return (
            <View style={[styles.navbar, this.props.style || {}]}>
                <Text style={styles.navbarTitle}>
                    {this.props.title}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    navbar: {
        height: 60,
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
