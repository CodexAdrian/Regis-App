import React from 'react';
import {StyleSheet} from 'react-native';

export const white = "#CCCCCC"
export const regisred = "#F64867"
export const lightGrey = "#575271"
export const grey = "#343046"
export const darkgrey = "#20182D"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: darkgrey,
        alignItems: 'center',
    },
    header: {
        display: "flex",
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingLeft: 16,
        paddingRight: 16
    },
    profile: {
        display: "flex",
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginLeft: 16
    },
    headerText: {
        fontSize: 24,
        color: white,
        fontWeight: "bold"
    },
    topNav: {
        display: "flex",
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 25
    },
    navText: {
        fontSize: 16,
        color: white,
        paddingLeft: 15,
        paddingRight: 15
    }
});
