'use strict';

import React from 'react';
import { StyleSheet, View } from 'react-native';

class LeftView extends React.Component {
    static navigationOptions = {
        title: '首页',
    };
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    }
});

export default LeftView;