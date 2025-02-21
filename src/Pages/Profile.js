import * as React from "react";
import { View, Text, Pressable, TouchableOpacity, StatusBar, Image, TextInput, Dimensions, ScrollView } from "react-native";
import { Color, FontSize } from "../GlobalStyles";
import tw from "twrnc";
import ArrowLongLeftIcon from "react-native-heroicons/outline/ArrowLongLeftIcon";
import TrashIcon from "react-native-heroicons/outline/TrashIcon";
import MinusIcon from "react-native-heroicons/solid/MinusIcon";
import ArrowLeftStartOnRectangleIcon from "react-native-heroicons/solid/ArrowLeftStartOnRectangleIcon";
import XMarkIcon from "react-native-heroicons/solid/XMarkIcon";
import MapPinIcon from "react-native-heroicons/solid/MapPinIcon";
import PlusCircleIcon from "react-native-heroicons/solid/PlusCircleIcon";
import Modal from "react-native-modal";




const Profile = ({ navigation }) => {

  const { width, height } = Dimensions.get('screen')
  const [show, setShow] = React.useState(false)

  return (<>
    <View style={{ backgroundColor: Color.white, flex: 1 }}>
      <View style={[tw`flex-row justify-between items-center mb-1`, { padding: 20, paddingBottom: 10 }]}>
        <View style={tw`flex-row justify-between items-center gap-x-3`}>
          <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20 }]} onPress={() => {
            navigation.goBack()
          }}>
            <ArrowLongLeftIcon size={25} color={Color.black} />
          </TouchableOpacity>
          <View>
            <Text style={{ color: Color.black, fontSize: FontSize.headline3_size, fontWeight: '800' }}>Profile</Text>
          </View>

        </View>

      </View>




      <ScrollView>




        <View style={{ paddingHorizontal: 20, marginBottom: 40 }}>


          <View style={[tw`flex-row justify-between items-center mb-2 my-9`, { width: '100%', height: 'auto', borderRadius: 20, }]}>
            <View style={[tw`flex-row items-center gap-x-3`, { width: '100%' }]}>
              <View style={{ padding: 2, borderRadius: 20, borderWidth: 1, borderColor: Color.primary }}>
                <Image source={require('../assets/phot.png')} style={{ borderRadius: 20, width: 80, height: 80 }} />
              </View>
              <View>
                <Text style={{ color: Color.black, fontSize: FontSize.headline3_size, fontWeight: '600' }}>Shahmeer Collection</Text>
                <Text style={{ color: Color.gray2, fontSize: FontSize.font_size }}>@Muhammad Tufail</Text>

                <TouchableOpacity style={[tw`p-2`, { backgroundColor: Color.prgray, borderRadius: 20, flexDirection: 'row', width: '70%', justifyContent: 'center', alignItems: 'center', marginTop: 10, gap: 5 }]}>

                  <ArrowLeftStartOnRectangleIcon size={20} color={Color.error} />
                  <Text style={{ color: Color.black, fontSize: FontSize.font_size, fontWeight: '700' }}>Logout</Text>


                </TouchableOpacity>
              </View>
            </View>


          </View>







          <View style={[tw`mt-1`, { position: 'relative', marginBottom: 5,flexDirection:'row',alignItems:'center',gap:5,flexWrap:'wrap' }]}>

            
            <View style={{ backgroundColor: Color.background2, width: '31%', padding: 10, borderRadius: 20, flexDirection: 'column', alignItems: 'center',height:140,justifyContent:'space-between' }}>
              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                <TouchableOpacity style={[tw`p-2`, { backgroundColor: Color.prgray, borderRadius: 20 }]} onPress={() => {
                  // navigation.goBack()
                }}>
                  <MapPinIcon size={20} color={Color.black} />
                </TouchableOpacity>
                <TouchableOpacity style={[tw`p-3`, { flexDirection: 'row', gap: 5, borderRadius: 20 }]} onPress={() => { }}>
                </TouchableOpacity>


              </View>

              <View style={{ width: '100%', flexDirection: 'row', gap: 10, alignItems: 'center', paddingHorizontal: 0 }}>
                <Text style={{ color: Color.gray2, fontSize: FontSize.font2_size, textAlign: 'center', fontWeight: '800' }}>Address</Text>
              </View>


            </View>
            
            <View style={{ backgroundColor: Color.background2, width: '31%', padding: 10, borderRadius: 20, flexDirection: 'column', alignItems: 'center',height:140,justifyContent:'space-between' }}>
              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                <TouchableOpacity style={[tw`p-2`, { backgroundColor: Color.prgray, borderRadius: 20 }]} onPress={() => {
                  // navigation.goBack()
                }}>
                  <MapPinIcon size={20} color={Color.black} />
                </TouchableOpacity>
                <TouchableOpacity style={[tw`p-3`, { flexDirection: 'row', gap: 5, borderRadius: 20 }]} onPress={() => { }}>
                </TouchableOpacity>


              </View>

              <View style={{ width: '100%', flexDirection: 'row', gap: 10, alignItems: 'center', paddingHorizontal: 0 }}>
                <Text style={{ color: Color.gray2, fontSize: FontSize.font2_size, textAlign: 'center', fontWeight: '800' }}>Address</Text>
              </View>


            </View>
            
            <View style={{ backgroundColor: Color.background2, width: '31%', padding: 10, borderRadius: 20, flexDirection: 'column', alignItems: 'center',height:140,justifyContent:'space-between' }}>
              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                <TouchableOpacity style={[tw`p-2`, { backgroundColor: Color.prgray, borderRadius: 20 }]} onPress={() => {
                  // navigation.goBack()
                }}>
                  <MapPinIcon size={20} color={Color.black} />
                </TouchableOpacity>
                <TouchableOpacity style={[tw`p-3`, { flexDirection: 'row', gap: 5, borderRadius: 20 }]} onPress={() => { }}>
                </TouchableOpacity>


              </View>

              <View style={{ width: '100%', flexDirection: 'row', gap: 10, alignItems: 'center', paddingHorizontal: 0 }}>
                <Text style={{ color: Color.gray2, fontSize: FontSize.font2_size, textAlign: 'center', fontWeight: '800' }}>Address</Text>
              </View>


            </View>



          </View>





        </View>


      </ScrollView>








    </View>






    <Modal isVisible={show} backdropColor={Color.background} backdropOpacity={0.4}  >
      <View style={{ backgroundColor: Color.white, borderRadius: 20, padding: 20, paddingHorizontal: 40, justifyContent: 'center', alignItems: 'center' }}>

        <TouchableOpacity style={[tw`flex-row gap-x-3 items-center`, { position: 'absolute', top: 10, right: 10 }]} onPress={() => { setShow(false) }}>
          <XMarkIcon size={18} color={Color.gray2} />
        </TouchableOpacity>
        <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.primary, borderRadius: 20 }]}>
          <MapPinIcon size={25} color={Color.white} />
        </TouchableOpacity>
        <Text style={{ color: Color.black, fontSize: FontSize.headline3_size, fontWeight: '800' }}>Confirm Location</Text>
        <Text style={{ color: Color.gray2, marginVertical: 10, marginBottom: 30, textAlign: 'center' }}>Your product has been successfully added for promotion!</Text>

        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
          <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20, flexDirection: 'row', width: '48%', justifyContent: 'center', alignItems: 'center' }]}>
            <Text style={{ color: Color.black, fontSize: FontSize.font_size }}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.background, borderRadius: 20, flexDirection: 'row', width: '48%', justifyContent: 'center', alignItems: 'center' }]}>
            <Text style={{ color: Color.white, fontSize: FontSize.font_size, textAlign: 'center' }}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  </>
  );
};
export default Profile;
