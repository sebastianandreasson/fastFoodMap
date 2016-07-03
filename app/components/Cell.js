import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import { imageForName } from "../static/methods";

class Cell extends Component {
    render () {
        const place = this.props.place;
        const image = imageForName(place.name);
        const address = place.vicinity.substr(0, place.vicinity.indexOf(','));
        const isOpen = (place.opening_hours && place.opening_hours.open_now);
        console.log(place);
        return (
            <TouchableOpacity style={styles.root} onPress={this.props.onPress.bind(this, place)}>
                <View style={styles.cell}>
                    <Image style={styles.cellImage} source={image} resizeMode={Image.resizeMode.contain} />
                    <View style={styles.cellTextWrapper}>
                        <Text style={styles.cellTitle} numberOfLines={1}>{place.name}, {address}</Text>
                        <Text style={styles.cellSubTitle}>{place.distance}m away</Text>
                    </View>
                </View>
                <View style={styles.cell}>
                    <Text style={isOpen ? styles.openLabelOpen : styles.openLabelClosed}>{isOpen ? "OPEN" : "CLOSED"}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 60,
        borderBottomWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.1)",
    },
    cell: {
        marginLeft: 10,
        height: 60,
        flexDirection: "row",
    },
    cellImage: {
        width: 30,
        height: 30,
        alignSelf: "center"
    },
    cellTextWrapper: {
        height: 60,
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: "center",
    },
    cellTitle: {
        width: 250,
        marginLeft: 10,
        fontSize: 16
    },
    cellSubTitle: {
        color: "rgba(0, 0, 0, 0.8)",
        marginLeft: 10,
        fontSize: 11
    },
    openLabelOpen: {
        fontSize: 11,
        color: "#2a9835",
        alignSelf: "center",
        marginRight: 10,
    },
    openLabelClosed: {
        fontSize: 11,
        color: "#c12b2b",
        alignSelf: "center",
        marginRight: 10,
    }
});

module.exports = Cell;
