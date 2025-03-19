import { map } from "lodash";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";


export function PasswordItem ({ data, removePassword }) {

    return (
        <Pressable onLongPress={removePassword} style={{backgroundColor: "#0e0e0e", padding: 14, whith: "100%", marginBottom: 14, borderRadius: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
            <Text style={{color: 'white'}} > {map(data)} </Text>
        </Pressable>
    );
}


const styles = StyleSheet.create({ 

    container:{
        backgroundcolor: "#0e0e0e",
        padding: 14,
        whith: "100%",
        marginBottom: 14,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

    },
    text:{
        color: "#white",
   
    }

});