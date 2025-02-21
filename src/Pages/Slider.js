import * as React from "react";
import { View, Text, Pressable, TouchableOpacity, StatusBar, Image, Dimensions } from "react-native";
import { Color, FontSize } from "../GlobalStyles";
import SwiperFlatList from "react-native-swiper-flatlist";

const Slider = () => {

  const {width,height}=Dimensions.get('screen')


  const slider = [
    require('../assets/sp1.png'),
    require('../assets/sp2.png'),
    require('../assets/3.webp')
  ]

  return (
    <>

      <View style={{ flex: 1, backgroundColor: Color.background, padding: 20 }}>

        <Text style={{ color: Color.white, fontSize: FontSize.headline_size, fontWeight: '600' }}>Welcome To DressFly</Text>
        <Image source={require('../assets/logo.png')} style={{ width: 100, height: 100 }} />


        <View style={{ marginVertical: 10 }}>
            <View style={{ height: 270, width: '100%' }}>
              <SwiperFlatList
                paginationStyleItem={{ width: 10, height: 10, borderRadius: 200 }}
                // showPagination
                autoplay
                autoplayDelay={2}
                autoplayLoop
                paginationActiveColor={Color.black}
                data={slider}
                renderItem={({ item }) => (
                  <>

                    <Image
                      source={item}
                      style={{ height: '100%', width: width }}
                      resizeMode={'contain'}
                    />

                  </>
                )}

              />



            </View>

          </View>

        {/* <View style={{ width: 100, height: 100, justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: Color.white, borderRadius: 200, overflow: 'hidden', position: 'absolute', top: '45%', left: '5%' }}>
          <Image source={require('../assets/sp1.png')} style={{ width: 100, height: 100 }} resizeMode="contain" />
        </View>
        <View style={{ width: 190, height: 190, justifyContent: 'flex-end', alignItems: 'center', padding: 10, backgroundColor: Color.white, borderRadius: 200, alignSelf: 'flex-end', overflow: 'hidden', position: 'absolute', top: '25%', right: '5%',paddingBottom:30 }}>
          <Image source={require('../assets/sp2.png')} style={{ width: 70, height: 70, borderRadius: 200, position: 'absolute', top: '0%', left: '0%' }} resizeMode="contain" />
          <Image source={require('../assets/sp3.png')} style={{ width: 70, height: 70, borderRadius: 200, position: 'absolute', top: '10%', left: '35%' }} resizeMode="contain" />
          <Image source={require('../assets/sp3.png')} style={{ width: 70, height: 70, borderRadius: 200, position: 'absolute', top: '0%', left: '70%' }} resizeMode="contain" />

          <Text style={{ color: Color.black, fontSize: FontSize.font_size, fontWeight: '600', lineHeight: 20,textAlign:'center', }}>Get all types of clothes here!</Text>
          <Text style={{ color: Color.black, fontSize: FontSize.font_size, fontWeight: '600', lineHeight: 20,textAlign:'center', }}>Buy & Sell</Text>
        </View>
        <View style={{ width: 100, height: 100, justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: Color.white, borderRadius: 200, overflow: 'hidden', position: 'absolute', top: '65%', right: '5%' }}>
          <Image source={require('../assets/sp1.png')} style={{ width: 80, height: 80 }} resizeMode="contain" />
        </View> */}


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', bottom: 40, width: '100%', paddingLeft: 20 }}>
          <Text style={{ color: Color.white, fontSize: FontSize.font_size, fontWeight: '600', width: '60%', lineHeight: 20 }}>The Best Social E-commerce App of The Century For Your Fashion Needs!</Text>


          <TouchableOpacity style={{ width: 70, height: 70, justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: Color.gray2, borderRadius: 200 }}>
            <Text style={{ color: Color.white, fontSize: FontSize.size_3xs, fontWeight: '600', textAlign: 'center' }}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>

    </>
  );
};
export default Slider;
