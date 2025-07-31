import { ScrollView, TouchableOpacity, Text, View, Image, ImageBackground } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import landingP from "../styles/landingP";
import NavBar from "../components/NavBar";
import '../assets/MAIN.png'
import '../assets/FACE CARE.png';
import '../assets/BODY CARE.png';
import '../assets/PRODUCTS.png'


export default function LandingPage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavBar/>
      <ScrollView>
        <View style={landingP.container}>
          <Image source={require('../assets/MAIN.png')} style={[landingP.glow, {marginLeft:-50}]}/>
          <View style={{marginLeft:-90, alignItems:'center', justifyContent: 'center'}}>
            <Text style={[landingP.headline]}>
              feel the glow,
            </Text>
            <Text style={[landingP.headline]}>
              own the shine
            </Text>
            <Text style={landingP.subText}>
              UNLOCK YOUR SKIN'S LUSTER...
            </Text>
            <TouchableOpacity style={landingP.buttons}>
              <Text style={landingP.buttonText}>
                SHOP NOW  
              </Text>
            </TouchableOpacity>
          </View>
        </View>

{/* BASTA DITO NEXT DIV  */}

      <View style={landingP.container2}>
        <View style={landingP.gridContainer}>

          <ImageBackground source={require('../assets/FACE CARE.png')} style={landingP.gridImg}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={[landingP.headline,{
              color: '#fff',
              textShadowColor: 'rgba(0,0,0,0.7)',
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 6,
            }
          ]}>face</Text>
          </View>
          </ImageBackground>

          <ImageBackground source={require('../assets/BODY CARE.png')} style={landingP.gridImg}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={[landingP.headline,{
              color: '#fff',
              textShadowColor: 'rgba(0,0,0,0.7)',
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 6,
            }
          ]}>body</Text>
          </View>
          </ImageBackground>
          
          <ImageBackground source={require('../assets/PRODUCTS.png')} style={landingP.gridImg}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={[landingP.headline,{
              color: '#fff',
              textShadowColor: 'rgba(0,0,0,0.7)',
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 6,
              lineHeight: -30,
              textAlign: 'center',
            }
          ]}>value {'\n'}bundles</Text>
          </View>
          </ImageBackground>
        </View>    
      </View>

      {/* divider line */}

      <View style={landingP.dividerLine}>
        <Text style={landingP.dividerLineText}>OUR MOST LOVED</Text>
        <TouchableOpacity>
          <Text style={landingP.dividerLineText}>SEE MORE  {'\u2192'} </Text>
        </TouchableOpacity>
        
      </View> 


      </ScrollView>
      </SafeAreaView>
  );
}

