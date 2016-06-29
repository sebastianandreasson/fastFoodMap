import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import { imageForName } from "../static/methods";

class Cell extends Component {
    render () {
        const place = this.props.place;
        const image = imageForName(place.name);
        const address = place.vicinity.substr(0, place.vicinity.indexOf(','));
        return (
            <TouchableOpacity style={styles.cell} onPress={this.props.onPress.bind(this, place)}>
                <Image style={styles.cellImage} source={image} resizeMode={Image.resizeMode.contain} />
                <View style={styles.cellTextWrapper}>
                    <Text style={styles.cellTitle}>{place.name} - {address}</Text>
                    <Text style={styles.cellSubTitle}>{place.distance}m away</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    cell: {
        flexDirection: "row",
        alignItems: "center",
        height: 60,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.1)",
    },
    cellImage: {
        width: 30,
        height: 30,
    },
    cellTextWrapper: {
        flexDirection: "column",
    },
    cellTitle: {
        marginLeft: 10,
        fontSize: 16
    },
    cellSubTitle: {
        marginLeft: 10,
        fontSize: 11
    }
});

module.exports = Cell;
