import React, {useRef, useEffect} from "react";
import {Image, SafeAreaView, Text, TouchableOpacity, View, Animated, Easing, Dimensions} from "react-native";
// @ts-ignore
import Avatar from "../assets/avatar.webp";
import Schedule from "../assets/aortiz22_schedule_download_2_csv.json"
import styles, {Stamp, colors} from "../styles/GlobalTheme";
import {StatusBar} from "expo-status-bar";
import {EvilIcons, Foundation, Ionicons, MaterialCommunityIcons, Octicons} from "@expo/vector-icons";
import Subcard from "../components/Subcard";
import ShareButtons from "../components/ShareButtons";

// @ts-ignore
const UpcomingEvent = ({event}) => {
    let text = event.title + " @ " + event.location;
    if(text.length > 28) text = text.substring(0, 25).trim() + "...";
    text += " " + event.date;
    return (
        <View style={styles.subCard}>
            <View style={[styles.subCardIcon, {backgroundColor: event.type.color}]}><MaterialCommunityIcons
                name={event.type.icon} size={18} color={"white"}/></View>
            <Text style={{
                color: "white",
                fontSize: 14,
                marginLeft: 5,
                fontWeight: "bold"
            }}>{text}</Text>
        </View>
    )
}
// @ts-ignore
const AnimatedCard = (props) => {
    let growAnim = useRef(new Animated.Value(0)).current
    React.useEffect(()=>{
        Animated.timing(growAnim, {
            toValue: Dimensions.get("window").height/5,
            duration: 250,
            useNativeDriver: false
        }).start();
    }, [growAnim])

    return(
        <Animated.View style={
            props.open ? {
                height: 55,
                overflow: "hidden",
                ...props.style
            } : {
            height: growAnim,
            overflow: "hidden",
            ...props.style
        }}>
            {props.children}
        </Animated.View>
    )
}

const Stamps = () => {
    const length = stamps.length;
    let endOption = Math.floor(length/5) % 2 == 0 ? "Grub\nDay" : "Free\nMerch";
    let stampsToRender: any[];
    let toDisplay = length % 5;
    if(toDisplay != 0) {
        stampsToRender = [{}, {}, {}, {}]
        for(let index = length - toDisplay; index < length; index++) stampsToRender[index] = stamps[index];
        for (let i = toDisplay; i < 4; i++) {
            stampsToRender[i] = eventTypes.Blank;
        }
        return (
            <View style={styles.stampContainer}>
                {stampsToRender.filter(value => value != eventTypes.Blank).map((value, index) => (<Stamp key={index} style={{backgroundColor: value.color}}><MaterialCommunityIcons name={value.icon} size={40} color={"white"}/></Stamp>))}
                {stampsToRender.filter(value => value == eventTypes.Blank).map(value => (<Stamp style={{backgroundColor: value.color}}/>))}
                <Stamp style={{backgroundColor: colors.grey}}><Text style={styles.stampText}>{endOption}</Text></Stamp>
            </View>

        )
    } else {
        return (
            <View style={styles.stampContainer}>
                <Stamp style={{backgroundColor: colors.grey}}/>
                <Stamp style={{backgroundColor: colors.grey}}/>
                <Stamp style={{backgroundColor: colors.grey}}/>
                <Stamp style={{backgroundColor: colors.grey}}/>
                <Stamp style={{backgroundColor: colors.grey}}><Text style={styles.stampText}>{endOption}</Text></Stamp>
            </View>
        )
    }
    return (
        <View style={styles.stampContainer}>
            {stampsToRender.filter(value => value != eventTypes.Blank).map((value, index) => (<Stamp key={index} style={{backgroundColor: value.color}}><MaterialCommunityIcons name={value.icon} size={40} color={"white"}/></Stamp>))}
            {stampsToRender.filter(value => value == eventTypes.Blank).map(value => (<Stamp style={{backgroundColor: value.color}}/>))}
            <Stamp style={{backgroundColor: colors.grey}}><Text style={styles.stampText}>{endOption}</Text></Stamp>
        </View>

    )
}


const eventTypes = {
    Baseball: {
        color: colors.regisRed,
        icon: "baseball"
    },
    Drama: {
        color: colors.purple,
        icon: "drama-masks"
    },
    Blank: {
        color: colors.grey,
        icon: null
    }
}

const events = [
    {
        title: "Baseball Game",
        location: "Van Nest Little League",
        time: "6:00 pm",
        date: "11/20/21",
        type: eventTypes.Baseball,
        description: "The Regis Raiders play against Cardinal Spellman HS at Van Nest Little League for a shot at the championships."
    },
    {
        title: "Romeo & Juliet",
        location: "Regis Auditorium",
        time: "8:00 pm",
        date: "11/18/21",
        type: eventTypes.Drama,
        description: "Come see the wonderful Regis Repertoire play Romeo & Juliet. All are welcome, tickets are $20."
    }
]


const stamps = [eventTypes.Drama, eventTypes.Baseball, eventTypes.Drama, eventTypes.Baseball]

export default class HomePage extends React.Component {
    state = {
        spiritCardOpen: false,
        scheduleCardOpen: false
    }
    ScheduleCard = () => {
        let today = Schedule.filter(value => value.date == '11/08/21');
        let letterDay = today.filter(value => value.subject.substring(2, value.subject.length) == 'Day').map(value => value.subject[0]);
        today = today.filter(value => value.subject.substring(2, value.subject.length) != 'Day');
        return(
            <TouchableOpacity activeOpacity={1} style={styles.card} onPress={() =>
                this.setState({
                    scheduleCardOpen: !this.state.scheduleCardOpen
                })
            }>
                <View style={styles.minimizedScheduleBox}>
                    <View style={styles.calenderBoxContainer}><MaterialCommunityIcons name={"calendar-blank"} size={45} color={"white"}/></View>
                    <View style={styles.letterDayBox}><Text style={styles.letterDayText}>{letterDay}</Text></View>
                    <View style={styles.classSubcardContainer}>
                        <View>
                            <AnimatedCard style={{width: "100%"}} open={!this.state.scheduleCardOpen}>
                                {today.map((value, index) => <Subcard key={index} iconName={"pencil"} color={colors.purple} text={value.subject}/>)}
                            </AnimatedCard>
                        </View>
                    </View>
                </View>
                <MaterialCommunityIcons style={{textAlign:"center"}} name={this.state.scheduleCardOpen ? "chevron-up":"chevron-down"} color={colors.white} size={18}/>
            </TouchableOpacity>
        );
    }

    SpiritCard = () => {

        return (
            <TouchableOpacity activeOpacity={1} style={styles.card} onPress={()=> {
                this.setState({
                    spiritCardOpen: !this.state.spiritCardOpen
                })
            }}>
                <Text style={styles.boxHeader}>Digital Spirit Card</Text>
                <Stamps/>
                <Text style={styles.underlinedSubheader}>Upcoming Events:</Text>
                    {events.map((value, index) => <UpcomingEvent key={index} event={value}/>)}
                <MaterialCommunityIcons style={{textAlign:"center"}} name={this.state.spiritCardOpen ? "chevron-up":"chevron-down"} color={colors.white} size={18}/>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar style="light"/>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Dashboard</Text>
                    <View style={styles.profile}>
                        <MaterialCommunityIcons name={"bell"} color={colors.white} size={24}/>
                        <Image source={Avatar} style={styles.avatar}/>
                    </View>
                </View>
                <View style={styles.topNav}>
                    <View style={styles.navFocus}><Text style={styles.navText}>myRegis</Text></View>
                    <Text style={styles.navText}>Moodle</Text>
                    <Text style={styles.navText}>Library</Text>
                    <Text style={styles.navText}>Grades</Text>
                </View>
                <View style={styles.cardDiv}>
                    <this.SpiritCard/>
                    <this.ScheduleCard/>
                </View>
            </SafeAreaView>
        );
    }
}
