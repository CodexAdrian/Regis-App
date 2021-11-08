import React from 'react';
import {StyleSheet} from 'react-native';
import styled from "styled-components/native";

export const colors = {
    white: "#CCCCCC",
    regisRed: "#F64867",
    lightGrey: "#575271",
    grey: "#343046",
    darkGrey: "#20182D",
    skyBlue: "#488EF7",
    purple: "#9548F7",
    orange: "#fd6e15"
}

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkGrey,
        alignItems: 'center',
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingTop: 10,
        paddingLeft: 16,
        paddingRight: 16
    },
    profile: {
        display: "flex",
        flexDirection: "row",
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
        color: colors.white,
        fontWeight: "bold"
    },
    topNav: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 25
    },
    navText: {
        fontSize: 16,
        color: colors.white,
        paddingLeft: 15,
        paddingRight: 15
    },
    navFocus: {
        borderRadius: 360,
        backgroundColor: colors.regisRed,
        padding: 0,
        height: 30,
        justifyContent: "center"
    },
    cardDiv: {
        width: "95%",
        paddingLeft: "2.5%",
        paddingRight: "2.5%",
        paddingTop: "5%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    card: {
        width: "100%",
        borderRadius: 21,
        backgroundColor: colors.grey,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 5,
        marginBottom: 5
    },
    boxHeader: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.white
    },
    stampContainer: {
        width: "100%",
        height: 65,
        marginTop: 10,
        marginBottom: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    stamp: {
        width: 57,
        height: 57,
        borderRadius: 360,
        borderColor: colors.lightGrey,
        backgroundColor: colors.regisRed,
        padding: 0,
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderWidth: 2,
    },
    stampText: {
        fontSize: 13,
        color: colors.white,
        fontWeight: "bold",
        textAlign: "center"
    },
    underlinedSubheader: {
        fontSize: 16,
        color: colors.white,
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
    subCard: {
        backgroundColor: colors.lightGrey,
        borderRadius: 22,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    subCardIcon: {
        backgroundColor: colors.lightGrey,
        borderRadius: 22,
        height: 22,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 22
    },
    calenderBoxContainer: {
        backgroundColor: colors.regisRed,
        borderRadius: 11,
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        marginRight: -50
    },
    letterDayBox: {
        borderRadius: 11,
        marginTop: 3,
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        color: "white"
    },
    letterDayText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18
    },
    minimizedScheduleBox : {
        display: "flex",
        flexDirection: "row"
    },
    classSubcardContainer: {
        marginLeft: 5,
        marginTop: -5
    },
    expandedScheduleBox:{

    }
});

export const Stamp = styled.View`
  width: 57px;
  height: 57px;
  border-radius: 57px;
  border-color: #575271;
  padding: 0;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-width: 2px;
`
