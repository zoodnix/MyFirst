import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    listItem: {
        backgroundColor: '#ddd',
        flexDirection: 'row',
        marginVertical: 10,
        padding: 10,
    },
    listName: {
        flex: 0.5,
        textAlign: 'center',
        alignItems: 'flex-start'
    },
    listSalary: {
        flex: 0.5,
        textAlign: 'center',
        alignItems: 'flex-end',
    },
});

export default styles;