import React from "react";
import {SafeAreaView, Text} from "react-native";
import styles from "../styles/GlobalTheme";
import {StatusBar} from "expo-status-bar";

export default class HomePage extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar style="auto"/>
                <Text>Hello World</Text>
            </SafeAreaView>
        );
    }
}