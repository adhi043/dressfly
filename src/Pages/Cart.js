import * as React from "react";
import { View, Text, Pressable, TouchableOpacity, StatusBar, Image, TextInput, Dimensions, ScrollView } from "react-native";
import { Color, FontSize } from "../GlobalStyles";
import tw from "twrnc";
import ArrowLongLeftIcon from "react-native-heroicons/outline/ArrowLongLeftIcon";
import TrashIcon from "react-native-heroicons/outline/TrashIcon";
import MinusIcon from "react-native-heroicons/solid/MinusIcon";
import PlusIcon from "react-native-heroicons/solid/PlusIcon";
import XMarkIcon from "react-native-heroicons/solid/XMarkIcon";
import MapPinIcon from "react-native-heroicons/solid/MapPinIcon";
import PlusCircleIcon from "react-native-heroicons/solid/PlusCircleIcon";
import Modal from "react-native-modal";




const Cart = ({ navigation }) => {

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
            <Text style={{ color: Color.black, fontSize: FontSize.headline3_size, fontWeight: '800' }}>Cart</Text>
          </View>

        </View>

        <TouchableOpacity style={[tw`p-1`, { backgroundColor: Color.colorGray_100, borderRadius: 200, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }]} onPress={() => { }}>
          <Text style={{ color: Color.black, fontSize: FontSize.font_size }}>3</Text>
        </TouchableOpacity>
      </View>




      <ScrollView>




        <View style={{ paddingHorizontal: 20, marginBottom: 40 }}>


          <View style={[tw`flex-row justify-between items-center mb-2`, { width: '100%', height: 'auto', borderRadius: 20, backgroundColor: Color.white }]}>
            <View style={[tw`flex-row items-center gap-x-3`, { width: '100%' }]}>
              <View style={{}}>
                <Image source={require('../assets/phot.png')} style={{ borderRadius: 20, width: 70, height: 90 }} />
              </View>
              <View>
                <Text style={{ color: Color.black, fontSize: FontSize.size_mini, fontWeight: '600' }}>Oversized Denim Jacket</Text>
                <Text style={{ color: Color.gray2, fontSize: FontSize.font_size }}>590 PKR</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ borderRightWidth: 1, borderRightColor: Color.colorGray_100, paddingRight: 10, flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                    <View style={{ width: 12, height: 12, borderRadius: 200, backgroundColor: 'blue' }} />
                    <Text style={{ color: Color.gray2, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>Blue</Text>
                  </View>
                  <View style={{ paddingLeft: 10 }}>
                    <Text style={{ color: Color.gray2, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>Size=XS</Text>
                  </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5, width: '87%' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, }}>
                    <TouchableOpacity style={{ padding: 3 }}>
                      <MinusIcon size={18} color={Color.gray2} />
                    </TouchableOpacity>
                    <Text style={{ color: Color.gray2, fontSize: FontSize.font_size }}>1</Text>
                    <TouchableOpacity style={{ padding: 3 }}>
                      <PlusIcon size={18} color={Color.gray2} />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.white, borderRadius: 20 }]}>
                    <TrashIcon size={20} color={Color.gray2} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>


          </View>

          <View style={[tw`flex-row justify-between items-center mb-2`, { width: '100%', height: 'auto', borderRadius: 20, backgroundColor: Color.white }]}>
            <View style={[tw`flex-row items-center gap-x-3`, { width: '100%' }]}>
              <View style={{}}>
                <Image source={require('../assets/phot.png')} style={{ borderRadius: 20, width: 70, height: 90 }} />
              </View>
              <View>
                <Text style={{ color: Color.black, fontSize: FontSize.size_mini, fontWeight: '600' }}>Oversized Denim Jacket</Text>
                <Text style={{ color: Color.gray2, fontSize: FontSize.font_size }}>590 PKR</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ borderRightWidth: 1, borderRightColor: Color.colorGray_100, paddingRight: 10, flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                    <View style={{ width: 12, height: 12, borderRadius: 200, backgroundColor: 'blue' }} />
                    <Text style={{ color: Color.gray2, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>Blue</Text>
                  </View>
                  <View style={{ paddingLeft: 10 }}>
                    <Text style={{ color: Color.gray2, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>Size=XS</Text>
                  </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5, width: '87%' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, }}>
                    <TouchableOpacity style={{ padding: 3 }}>
                      <MinusIcon size={18} color={Color.gray2} />
                    </TouchableOpacity>
                    <Text style={{ color: Color.gray2, fontSize: FontSize.font_size }}>1</Text>
                    <TouchableOpacity style={{ padding: 3 }}>
                      <PlusIcon size={18} color={Color.gray2} />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.white, borderRadius: 20 }]}>
                    <TrashIcon size={20} color={Color.gray2} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>


          </View>







          <View style={[tw`mt-1`, { position: 'relative', marginBottom: 5 }]}>
            <View style={{ backgroundColor: Color.background2, width: '100%', padding: 10, borderRadius: 20, flexDirection: 'column', alignItems: 'center' }}>
              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                <View style={{ flexDirection: 'row', gap: 0, alignItems: 'center' }}>

                  <View>
                    <Text style={{ color: Color.black, fontSize: FontSize.size_mini, fontWeight: '600' }}>Delivery Information</Text>
                    <View style={tw`flex-row gap-x-3`}>
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={[tw`p-3`, { flexDirection: 'row', gap: 5, borderRadius: 20 }]} onPress={() => { }}>
                  {/* <Text style={{ color: Color.colorGray_100, fontSize: FontSize.font_size }}>Jackets</Text> */}
                  {/* <ChevronRightIcon size={20} color={Color.black} /> */}
                </TouchableOpacity>


              </View>

              <View style={{ width: '100%', flexDirection: 'row', gap: 10, alignItems: 'center', paddingHorizontal: 0 }}>
                <Text style={{ color: Color.gray2, fontSize: FontSize.font2_size, textAlign: 'center', fontWeight: '600' }}>Delivery Method</Text>
                <Text style={{ color: Color.gray2, fontSize: FontSize.font2_size, textAlign: 'center', fontWeight: '400' }}>M&P Courier</Text>
              </View>

              <View style={{ width: '100%', flexDirection: 'row', gap: 10, alignItems: 'center', paddingHorizontal: 0 }}>
                <Text style={{ color: Color.gray2, fontSize: FontSize.font2_size, textAlign: 'center', fontWeight: '600' }}>Delivery Charges</Text>
                <Text style={{ color: Color.gray2, fontSize: FontSize.font2_size, textAlign: 'center', fontWeight: '400' }}>200 PKR</Text>
              </View>

            </View>
          </View>


          <View style={[tw`mt-1`, { position: 'relative', marginBottom: 5 }]}>
            <View style={{ backgroundColor: Color.prgray, width: '100%', padding: 10, borderRadius: 20, flexDirection: 'column', alignItems: 'center' }}>
              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 0 }}>
                <View style={{ flexDirection: 'row', gap: 0, alignItems: 'center' }}>

                  <View>
                    <Text style={{ color: Color.black, fontSize: FontSize.size_mini, fontWeight: '600' }}>Promo Code</Text>
                    <View style={tw`flex-row gap-x-3`}>
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={[tw`p-3`, { flexDirection: 'row', gap: 5, borderRadius: 20 }]} onPress={() => { }}>
                  <PlusCircleIcon size={25} color={Color.gray2} />
                </TouchableOpacity>


              </View>

              <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 0 }}>
                <TextInput placeholderTextColor={Color.colorGray_100} placeholder="Enter promo code" style={{ color: Color.black, width: '100%' }} />
              </View>


            </View>
          </View>









          <View style={{ backgroundColor: Color.white, borderRadius: 20, flexDirection: 'column', alignItems: 'center',marginTop:40 }}>

            <View style={{ marginVertical: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <Text style={{ color: Color.colorGray_100, fontSize: FontSize.font_size, fontWeight: '600' }}>Amount</Text>
              <Text style={{ color: Color.black, fontSize: FontSize.font_size, fontWeight: '600' }}>1000 PKR</Text>
            </View>

            <View style={{ marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <Text style={{ color: Color.colorGray_100, fontSize: FontSize.font_size, fontWeight: '600' }}>Delivery</Text>
              <Text style={{ color: Color.black, fontSize: FontSize.font_size, fontWeight: '600' }}>20 PKR</Text>
            </View>

            <View style={{ marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <Text style={{ color: Color.colorGray_100, fontSize: FontSize.pxRegular_size, fontWeight: '600' }}>Total</Text>
              <Text style={{ color: Color.black, fontSize: FontSize.pxRegular_size, fontWeight: '600' }}>1020 PKR</Text>
            </View>
            <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.background, borderRadius: 20, flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }]} onPress={() => { setShow(true) }}>

              <Text style={{ color: Color.white, fontSize: FontSize.font_size }}>Checkout</Text>


            </TouchableOpacity>
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
export default Cart;
