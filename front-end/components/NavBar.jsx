import React from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import navB from '../styles/navB'
import '../assets/LOGO.png'


export default function NavBar() {
  return (
    <SafeAreaView >
    <View style={navB.container}>
        <View style={navB.logoContainer}>
            <Image source={require('../assets/LOGO.png')}  style={{ width: 70, height: 70, marginTop:12, tintColor:'#ec8491ff' }} />
            <View style={{ marginLeft: 7, justifyContent: 'center' }}>
                <Text style={navB.logoText}>ilustrous</Text>
                <Text style={navB.logoSubText}>SKIN CARE</Text>
            </View>
        </View>


        <View style={navB.container2}>
            <TouchableOpacity>
                <Text style={navB.subText}>HOME</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={navB.subText}>ABOUT US</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={navB.subText}>PRODUCTS</Text>
            </TouchableOpacity>
        </View>


        <View style={navB.container3}>
            <TouchableOpacity>
                <Image  source={require('../assets/account.png')}  style={{ width: 40, height: 40, tintColor:'#ec8491ff'}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/HEART.png')}  style={{ width: 40, height: 40, tintColor:'#ec8491ff'}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/cart1.png')}  style={{ width: 40, height: 40, tintColor:'#ec8491ff'}}/>
            </TouchableOpacity>

        </View>

    </View>
        
    </SafeAreaView>
  )
}
