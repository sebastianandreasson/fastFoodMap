import React, { Component } from 'react';
import { TouchableOpacity, ListView, StyleSheet, View, Text, Image } from 'react-native';
import geolib from "geolib";
import Cell from "./Cell";

class TableView extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(props.places),
        }
    }
    render() {
        console.log(this.state.dataSource);
        return (
            <ListView
                style={styles.listView}
                dataSource={this.state.dataSource}
                renderRow={(place) => <Cell onPress={this.props.onCellPress} place={place} /> }
            />
        )
    }
    componentWillReceiveProps(props) {
        console.log(props);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
            dataSource: ds.cloneWithRows(props.places),
        });
        console.log("TABLEVIEW componentWillReceiveProps");
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
