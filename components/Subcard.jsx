import React from "react";
import {Text, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {IconProps} from "@expo/vector-icons/build/createIconSet";
import {styles, colors} from "../styles/GlobalTheme";


const style = {
    backgroundColor: colors.lightGrey,
    borderRadius: 22,
    height: 22,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
}

const Subcard = ({iconName, color, text}) => (
    <View style={{
        ...style,
        marginTop: 5
    }}>
        <View style={
            {
                ...style,
                backgroundColor: color,
                justifyContent: "center",
                width: 22
            }
        }><MaterialCommunityIcons name={iconName} size={18} color={"white"}/></View>
        <Text style={{
            color: "white",
            fontSize: 14,
            marginLeft: 5,
            fontWeight: "bold"
        }}>{text}</Text>
    </View>
);

export default Subcard
