import React from "react";
import {Image, SafeAreaView, Text, View} from "react-native";
// @ts-ignore
import Avatar from "../assets/avatar.webp";
import styles, {white} from "../styles/GlobalTheme";
import {StatusBar} from "expo-status-bar";
import {Foundation, Octicons} from "@expo/vector-icons";

export default class HomePage extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar style="light"/>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Dashboard</Text>
                    <View style={styles.profile}>
                        <Octicons name={"bell"} color={white} size={24}/>
                        <Image source={Avatar} style={styles.avatar}/>
                    </View>
                </View>
                <View style={styles.topNav}>
                    <Text style={styles.navText}>myRegis</Text>
                    <Text style={styles.navText}>Moodle</Text>
                    <Text style={styles.navText}>Library</Text>
                    <Text style={styles.navText}>Grades</Text>
                </View>
            </SafeAreaView>
        );
    }
}