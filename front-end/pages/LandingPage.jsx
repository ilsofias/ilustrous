import { ScrollView, TouchableOpacity, Text, View, Image, ImageBackground } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import landingP from "../styles/landingP";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import '../assets/MAIN.png'
import '../assets/FACE CARE.png';
import '../assets/BODY CARE.png';
import '../assets/PRODUCTS.png'
import '../assets/elixir.png';
import '../assets/rsilk.png';
import '../assets/LUXE-RADIANCE.png';
import '../assets/FLORAL.png'


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

      <View style={landingP.container3}>
        <ProductCard
        imageSource={require('../assets/elixir.png')}
        title="LUSTRE ELIXIR"
        description="30 ML FACE SERUM"
        price="1,500"
        onAddToCart={() => console.log('Added Lustre Elixir')}
      />
      <ProductCard
        imageSource={require('../assets/rsilk.png')}
        title="RADIANT SILK"
        description="50 ML FACE MOISTURIZER"
        price="1,200"
        onAddToCart={() => console.log('Added Radiant Silk')}
      />
      <ProductCard
        imageSource={require('../assets/LUXE-RADIANCE.png')}
        title="LUXE RADIANCE OIL"
        description="30 ML BODY OIL"
        price="1,000"
        onAddToCart={() => console.log('Added Luxe Radiance Oil')}
      />
        
      </View>    

      <View>
          <Image source={require('../assets/FLORAL.png')} style={[landingP.glow, {marginLeft:-50, marginTop: 20}]}/>
      </View>


      </ScrollView>
      </SafeAreaView>
  );
}

