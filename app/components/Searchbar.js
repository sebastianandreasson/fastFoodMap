import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

class Searchbar extends Component {
    render () {
        return (
            <View style={[styles.searchbar, this.props.style || {}]}>
                <TextInput />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    searchbar: {
        height: 40,
        backgroundColor: "blue",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
});

module.exports = Searchbar;
