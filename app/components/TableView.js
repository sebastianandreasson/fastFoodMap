import React, { Component } from 'react';
import { TouchableOpacity, ListView, StyleSheet, View, Text, Image } from 'react-native';
import geolib from "geolib";

class TableView extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(props.places),
        }
    }
    render() {
        return (
            <ListView
                style={styles.listView}
                dataSource={this.state.dataSource}
                renderRow={(object) => this._renderRow(object) }
            />
        )
    }
    _renderRow(place) {
        return (
            <TouchableOpacity style={styles.listItem} onPress={this.props.onCellPress.bind(this, place)}>
                <Image style={styles.listItemImage} source={require('../images/mcdonaldsIcon.png')} />
                <View style={styles.listItemTextWrapper}>
                    <Text style={styles.listItemTitle}>{place.name} - {place.vicinity}</Text>
                    <Text style={styles.listItemSubTitle}>{place.distance}m away</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    listView: {
        marginTop: 20,
    },
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        height: 60,
        padding: 10,
        borderBottomWidth: 1,
    },
    listItemImage: {
        width: 40,
        height: 40,
    },
    listItemTextWrapper: {
        flexDirection: "column",
    },
    listItemTitle: {
        marginLeft: 10,
        fontSize: 16
    },
    listItemSubTitle: {
        marginLeft: 10,
        fontSize: 11
    }
});

module.exports = TableView;
