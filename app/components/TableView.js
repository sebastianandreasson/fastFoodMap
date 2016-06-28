import React, { Component } from 'react';
import { TouchableOpacity, ListView, StyleSheet, Text } from 'react-native';

const songs = [
    { title: "Hellows" },
    { title: "aaaaaaa" },
    { title: "bbbbbbb" },
]

class TableView extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(songs),
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
    _renderRow(song) {
        return (
            <TouchableOpacity style={styles.listItem}>
                <Text style={styles.listItemText}>{song.title}</Text>
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
        height: 40,
    },
    listItemText: {
        marginLeft: 15,
    }
});

module.exports = TableView;
