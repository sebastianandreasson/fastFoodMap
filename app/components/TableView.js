import React, { Component } from "react";
import { View, Text, RefreshControl, ListView, StyleSheet } from "react-native";
import geolib from "geolib";
import Cell from "./Cell";

class TableView extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(props.places),
            refreshing: true,
        }
    }
    componentWillReceiveProps(props) {
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
            dataSource: ds.cloneWithRows(props.places),
            refreshing: false,
        });
    }
    render() {
        return (
            <ListView
                style={styles.listView}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                enableEmptySections={true}
                refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh.bind(this)} />}
            />
        )
    }
    _renderRow(place) {
        return (
            <Cell onPress={this.props.onCellPress} place={place} />
        );
    }
    _onRefresh() {
        this.setState({refreshing: true});
        this.props.onRefresh(() => {
            this.setState({ refreshing: false });
        });
    }
}

const styles = StyleSheet.create({
    listView: {
        marginTop: 0,
        borderTopWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.1)",
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
    },
    spinner: {

    }
});

module.exports = TableView;
