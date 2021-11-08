import React from "react";
import {View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const style = {
    color: "white",
};

const ShareButtons = () => (
    <View style={{
        display: "flex",
        flexDirection: "row",

    }}>
        <MaterialCommunityIcons style={style} size= {20} name={"export-variant"}/>
        <MaterialCommunityIcons style={{
            ...style,
            paddingTop: 1
        }} size= {20} name={"calendar-plus"}/>
        <MaterialCommunityIcons style={style} size= {20} name={"map-marker"}/>
    </View>
)

export default ShareButtons