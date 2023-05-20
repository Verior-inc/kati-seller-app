import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Image

} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const LoginS = () => {

    return (


        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "column", alignItems: "center" ,marginTop:wp("50")}}>
                <Text style={{ fontWeight: "900", fontSize: wp("7%"), color: "#9ED5E3" }}>
                    Welcome back !
                </Text>
                <Text style={{ fontSize: wp("5%"), color: "#616161" }}>
                    Sign in your account, if you
                </Text>
                <Text style={{ fontSize: wp("5%"), color: "#616161" }}>
                    haven`t created one. Visit our web.  </Text>
                <View style={styles.inputCard}>
                    <TextInput placeholder='Email Address' placeholderTextColor={"#616161"}/>


                </View>
                <View style={styles.inputCard}>

                    <TextInput placeholder='Password' secureTextEntry={true} placeholderTextColor={"#616161"}/>
                </View>
                <TouchableOpacity style={styles.buttonS}>

                    <View >
                        <Text style={{ color: "white", alignSelf: "center", fontSize: wp("5%") }} >Continue</Text>
                    </View>
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: "row", marginTop: wp("7%"), alignSelf: "center", width: "80%" }}>
                <View style={{ flex: 1, borderColor: "#B7B7B7", borderWidth: 0.5, height: wp("0/1%"), alignSelf: "center" }}>

                </View>
                <Text style={{ color: "#B7B7B7", marginHorizontal: wp("4%") }}>OR</Text>
                <View style={{ flex: 1, borderColor: "#B7B7B7", borderWidth: 0.5, height: hp("0.1"), alignSelf: "center" }}></View>

            </View>
            <View style={{ flex: 1 , width: wp("80%"),alignSelf:"center"}}>
                <View style={{flexDirection:"row" ,marginLeft:wp("4%")}}>
                <Image style={{  borderRadius:900,width:wp("8%"),height:hp("5"),marginLeft:10}} source={require("../credentials/images.png")}/>    
                <Text style={{padding:wp("2%"),alignItems:"center",marginLeft:wp("5"),fontSize:wp("5.5%"),color:"black"}} >Continue with Facebook</Text>

                </View>
                <View style={{ flexDirection: "row" }}>

                    <View style={{ flex: 1, borderColor: "#B7B7B7", borderWidth: 0.5, height: hp("0.1"), alignSelf: "center" }}>
                    </View>

                </View>
                <View style={{flexDirection:"row"}}>
                
                <Text style={{padding:wp("2%"),alignItems:"center",marginLeft:wp("5"),fontSize:wp("5.5%"),color:"black"}}>Continue with Google</Text>
                </View>
                <View style={{ flexDirection: "row" }}>

                    <View style={{ flex: 1, borderColor: "#B7B7B7", borderWidth: 0.5, height: hp("0.1"), alignSelf: "center" }}>
                    </View>

                </View>

                <Text style={{padding:wp("2%"),alignItems:"center",marginLeft:wp("5"),fontSize:wp("5.5%"),color:"black"}}>Continue with Apple</Text>
                <View style={{ flexDirection: "row", }}>

                    <View style={{ flex: 1, borderColor: "#B7B7B7", borderWidth: 0.5, height: hp("0.1"), alignSelf: "center" ,}}>
                    </View>

                </View>
            </View>

        </View>
    )



}

const styles = StyleSheet.create({


    inputCard: {

        borderColor: "grey",
        width: wp("80%"),
        height: hp("5.5%"),
        marginTop: wp("5%"),
        borderStyle: "solid",
        borderWidth: 1,
        padding: wp("3%")




    },
    buttonS: {

        backgroundColor: "#9ED5E3",
        width: "80%",
        height: hp("5.9"),
        padding: wp("3%"),
        color: "white",
        borderRadius: wp("1%"),
        marginTop: wp("8")


    }


})

export default LoginS;