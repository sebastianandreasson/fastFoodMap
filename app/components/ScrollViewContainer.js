import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

class ScrollViewContainer extends Component {
    render () {
        return (
            <ScrollView style={[styles.viewContainer, this.props.style || {}]}>
                {this.props.children}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({

    viewContainer: {
        flex: 1,
        flexDirection: "column",
        // justifyContent: "flex-start",
        // alignItems: "stretch"
    }
});

module.exports = ScrollViewContainer;
