import * as React from "react";
import { View, Text, Pressable, TouchableOpacity, StatusBar, Image, TextInput, Dimensions, ScrollView } from "react-native";
import { Color, FontSize } from "../GlobalStyles";
import tw from "twrnc";
import ArrowLongLeftIcon from "react-native-heroicons/outline/ArrowLongLeftIcon";
import TrashIcon from "react-native-heroicons/outline/TrashIcon";
import MinusIcon from "react-native-heroicons/solid/MinusIcon";
import MagnifyingGlassIconS from "react-native-heroicons/solid/MagnifyingGlassIcon";
import HeartIcon from "react-native-heroicons/solid/HeartIcon";
import XMarkIcon from "react-native-heroicons/solid/XMarkIcon";
import MapPinIcon from "react-native-heroicons/solid/MapPinIcon";
import PlusCircleIcon from "react-native-heroicons/solid/PlusCircleIcon";
import Modal from "react-native-modal";
import ShoppingCartIconS from "react-native-heroicons/solid/ShoppingCartIcon";




const Sellers = ({ navigation }) => {

  const { width, height } = Dimensions.get('screen')
  const [show, setShow] = React.useState(false)

  return (<>


    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ backgroundColor: Color.background, flex: 1 }}>
        <View style={[tw`flex-row justify-between items-center mb-1`, { padding: 20, paddingBottom: 10 }]}>
          <View style={tw`flex-row justify-between items-center gap-x-3`}>
            <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.colorwhite_100, borderRadius: 20 }]} onPress={() => {
              navigation.goBack()
            }}>
              <ArrowLongLeftIcon size={25} color={Color.white} />
            </TouchableOpacity>
            <View>
              <Text style={{ color: Color.white, fontSize: FontSize.headline3_size, fontWeight: '800' }}>Seller Profile</Text>
            </View>

          </View>

          <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.colorwhite_100, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }]} onPress={() => { setShow(true) }}>
            <MagnifyingGlassIconS size={25} color={Color.white} />
          </TouchableOpacity>
        </View>







        <View style={{ paddingHorizontal: 20, marginBottom: 5, width: '100%' }}>


          <View style={[tw`flex-row justify-between items-center mb-2`, { width: '100%', height: 'auto', borderRadius: 20, }]}>
            <View style={[tw`flex-row items-center gap-x-3`, { width: '100%' }]}>
              <View style={{ padding: 2, borderRadius: 20, borderWidth: 1, borderColor: Color.primary }}>
                <Image source={require('../assets/phot.png')} style={{ borderRadius: 20, width: 80, height: 80 }} />
              </View>
              <View>
                <Text style={{ color: Color.white, fontSize: FontSize.headline3_size, fontWeight: '600' }}>Shahmeer Collection</Text>
                <Text style={{ color: Color.colorwhite_100, fontSize: FontSize.font_size }}>@Muhammad Tufail</Text>

                <TouchableOpacity style={[tw`p-2`, { backgroundColor: Color.colorwhite_100, borderRadius: 20, flexDirection: 'row', width: '70%', justifyContent: 'center', alignItems: 'center', marginTop: 10 }]}>

                  <Text style={{ color: Color.white, fontSize: FontSize.font_size }}>Follow</Text>


                </TouchableOpacity>
              </View>
            </View>


          </View>



          <Text style={{ color: Color.colorwhite_100, marginVertical: 10, marginBottom: 30, }}>Your product has been successfully added for promotion, Your product has been successfully added for promotion!</Text>





        </View>





        <View style={[tw`-mt-6`, { position: 'relative' }]}>
          <View style={{ backgroundColor: Color.white, width: '100%', padding: 20, flexDirection: 'column', borderRadius: 20, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
            <View style={{ width: 70, height: 4, backgroundColor: Color.colorGray_100, borderRadius: 20, alignSelf: 'center' }} />


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
              <TouchableOpacity style={{ padding: 20, backgroundColor: Color.prgray, borderRadius: 20, width: '32%' }}>
                <Text style={{ color: Color.black, fontSize: FontSize.headline3_size, fontWeight: '600', textAlign: 'center' }}>30</Text>
                <Text style={{ color: Color.gray2, fontSize: FontSize.pxRegular_size, textAlign: 'center' }}>Listings</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ padding: 20, backgroundColor: Color.prgray, borderRadius: 20, width: '32%' }}>
                <Text style={{ color: Color.black, fontSize: FontSize.headline3_size, fontWeight: '600', textAlign: 'center' }}>30</Text>
                <Text style={{ color: Color.gray2, fontSize: FontSize.pxRegular_size, textAlign: 'center' }}>Follower</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ padding: 20, backgroundColor: Color.prgray, borderRadius: 20, width: '32%' }}>
                <Text style={{ color: Color.black, fontSize: FontSize.headline3_size, fontWeight: '600', textAlign: 'center' }}>30</Text>
                <Text style={{ color: Color.gray2, fontSize: FontSize.pxRegular_size, textAlign: 'center' }}>Follow</Text>
              </TouchableOpacity>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
              <TouchableOpacity style={{ padding: 20, backgroundColor: Color.prgray, borderRadius: 20, width: '32%' }}>
                <Text style={{ color: Color.black, fontSize: FontSize.headline3_size, fontWeight: '600', textAlign: 'center' }}>30</Text>
                <Text style={{ color: Color.gray2, fontSize: FontSize.pxRegular_size, textAlign: 'center' }}>Rating</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ padding: 20, backgroundColor: Color.prgray, borderRadius: 20, width: '32%' }}>
                <Text style={{ color: Color.black, fontSize: FontSize.headline3_size, fontWeight: '600', textAlign: 'center' }}>30</Text>
                <Text style={{ color: Color.gray2, fontSize: FontSize.pxRegular_size, textAlign: 'center' }}>Sales</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ padding: 20, backgroundColor: Color.prgray, borderRadius: 20, width: '32%' }}>
                <Text style={{ color: Color.black, fontSize: FontSize.headline3_size, fontWeight: '600', textAlign: 'center' }}>30</Text>
                <Text style={{ color: Color.gray2, fontSize: FontSize.pxRegular_size, textAlign: 'center' }}>Likes</Text>
              </TouchableOpacity>

            </View>









            <>
              <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', flexWrap: 'wrap', width: '100%', marginTop: 20 }}>
                <View style={[tw`mb-2`, { position: 'relative', width: '48%' }]}>

                  <View style={{ width: '100%', height: 200, backgroundColor: 'transparent' }}>
                    <Image source={require('../assets/phot.png')} style={{ borderRadius: 20, width: '100%', height: 200, }} />
                  </View>

                  <>




                    <View style={{ padding: 0, alignSelf: 'flex-end', position: 'absolute', top: 0, right: 0, }}>
                      <TouchableOpacity style={[tw`p-2`, { borderRadius: 0 }]}>
                        <HeartIcon size={24} color={Color.error} />
                      </TouchableOpacity>

                    </View>

                  </>

                  <View style={[tw`mt-1`, { position: 'relative' }]}>
                    <View style={{ backgroundColor: Color.prgray, width: '100%', padding: 10, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <View>
                        <Text style={{ color: Color.black, fontSize: FontSize.font_size, fontWeight: '600' }}>Men Shirt...</Text>
                        <View style={[tw`gap-x-3`, { flexWrap: 'wrap' }]}>
                          <Text style={{ color: Color.colorGray_100, fontSize: FontSize.size_3xs, fontWeight: '600', textDecorationLine: 'line-through' }}>3600/-PKR</Text>
                          <Text style={{ color: Color.primary, fontSize: FontSize.size_3xs, fontWeight: '600', }}>3100/-PKR</Text>
                        </View>
                      </View>
                      <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.colorGray_100, borderRadius: 20 }]}>
                        <ShoppingCartIconS size={20} color={Color.black} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={[tw`mb-2`, { position: 'relative', width: '48%' }]}>

                  <View style={{ width: '100%', height: 200, backgroundColor: 'transparent' }}>
                    <Image source={require('../assets/phot.png')} style={{ borderRadius: 20, width: '100%', height: 200, }} />
                  </View>

                  <>




                    <View style={{ padding: 0, alignSelf: 'flex-end', position: 'absolute', top: 0, right: 0, }}>
                      <TouchableOpacity style={[tw`p-2`, { borderRadius: 0 }]}>
                        <HeartIcon size={24} color={Color.error} />
                      </TouchableOpacity>

                    </View>

                  </>

                  <View style={[tw`mt-1`, { position: 'relative' }]}>
                    <View style={{ backgroundColor: Color.prgray, width: '100%', padding: 10, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <View>
                        <Text style={{ color: Color.black, fontSize: FontSize.font_size, fontWeight: '600' }}>Men Shirt...</Text>
                        <View style={[tw`gap-x-3`, { flexWrap: 'wrap' }]}>
                          <Text style={{ color: Color.colorGray_100, fontSize: FontSize.size_3xs, fontWeight: '600', textDecorationLine: 'line-through' }}>3600/-PKR</Text>
                          <Text style={{ color: Color.primary, fontSize: FontSize.size_3xs, fontWeight: '600', }}>3100/-PKR</Text>
                        </View>
                      </View>
                      <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.colorGray_100, borderRadius: 20 }]}>
                        <ShoppingCartIconS size={20} color={Color.black} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

              </View>

            </>




          </View>
        </View>











      </View>
    </ScrollView>





    <Modal isVisible={show} backdropColor={Color.background} backdropOpacity={0.4}  >
      <View style={{ backgroundColor: Color.white, borderRadius: 20, padding: 20, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center' }}>

        <TouchableOpacity style={[tw`flex-row gap-x-3 items-center`, { position: 'absolute', top: 10, right: 10 }]} onPress={() => { setShow(false) }}>
          <XMarkIcon size={18} color={Color.gray2} />
        </TouchableOpacity>
        <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.primary, borderRadius: 20 }]}>
          <MagnifyingGlassIconS size={25} color={Color.white} />
        </TouchableOpacity>
        <Text style={{ color: Color.black, fontSize: FontSize.headline3_size, fontWeight: '800' }}>Search</Text>
        <View style={{ marginVertical: 10,  }}>
          <View style={{ backgroundColor: Color.prgray, borderRadius: 20, flexDirection: 'row', width: '100%' }}>
            <TouchableOpacity style={[tw`p-3`,]}>
              <MagnifyingGlassIconS size={25} color={Color.gray2} />
            </TouchableOpacity>
            <TextInput placeholderTextColor={Color.colorGray_100} placeholder="Search..." style={{ color: Color.black, width: '80%' }} />

          </View>
        </View>

        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
          
          <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.background, borderRadius: 20, flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }]}>
            <Text style={{ color: Color.white, fontSize: FontSize.font_size, textAlign: 'center' }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  </>
  );
};
export default Sellers;
