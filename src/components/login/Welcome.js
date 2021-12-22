import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Welcome = () => {
    return (
        <View style={{ height: '45%' }} >
            <View style={{ flexDirection:'row', alignItems:'center'}} >
                <Image
                    style={{ marginVertical: 10, marginLeft: 10, width: 35, height: 40 }}
                    source={require('../../assets/orbitas.png')}
                />
                <Text style={{fontSize:25, marginLeft:10}} >gymBE</Text>
            </View>
            <Image
                style={{ width: 360, height: 299 }}
                source={require('../../assets/welcome/welcome.png')}
            />

        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({})
