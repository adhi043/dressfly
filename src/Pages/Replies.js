import * as React from "react";
import { View, Text, Pressable, TouchableOpacity, StatusBar, Image, TextInput, Dimensions, ScrollView } from "react-native";
import { Color, FontSize } from "../GlobalStyles";
import tw from "twrnc";
import ArrowLongLeftIcon from "react-native-heroicons/outline/ArrowLongLeftIcon";
import HeartIcon from "react-native-heroicons/solid/HeartIcon";
import PaperAirplaneIcon from "react-native-heroicons/solid/PaperAirplaneIcon";

const Replies = ({ navigation }) => {

  const { width, height } = Dimensions.get('screen')

  return (
    <View style={{ backgroundColor: Color.white, flex: 1 }}>
      <View style={[tw`flex-row justify-between items-center mb-1`, { padding: 20, paddingBottom: 10 }]}>
        <View style={tw`flex-row justify-between items-center gap-x-3`}>
          <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20 }]} onPress={() => {
            navigation.goBack()
          }}>
            <ArrowLongLeftIcon size={25} color={Color.black} />
          </TouchableOpacity>
          <View>
            <Text style={{ color: Color.black, fontSize: FontSize.headline3_size, fontWeight: '800' }}>Replies</Text>
          </View>
        </View>
      </View>


      <ScrollView>
        <>

          <View style={{ paddingHorizontal: 20 }}>
            <View style={[tw`mb-3`, { position: 'relative' }]}>
              <View style={{ width: '100%', borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <View style={{ flexDirection: 'row', gap: 7, alignItems: 'center' }}>
                  <TouchableOpacity style={[tw``, { borderRadius: 20 }]}>
                    <Image source={require('../assets/phot.png')} style={{ borderRadius: 20, width: 50, height: 50 }} />
                  </TouchableOpacity>
                  <View style={{ width: '75%' }}>
                    <Text style={{ color: Color.gray2, textAlign: 'left' }}><Text style={{ color: Color.black, fontWeight: '800' }}>Muhammad Adnan </Text>Your product has been success for promotion😄</Text>
                    <View style={[tw` gap-x-3`, { flexDirection: 'row', alignItems: 'center' }]}>
                      <Text style={{ color: Color.gray2, fontSize: FontSize.font1_size, fontWeight: '600', textAlign: 'left' }}>12 h</Text>
                      <TouchableOpacity style={[tw`p-1 flex-row`, { borderRadius: 20 }]} onPress={() => {

                        navigation.navigate('Replies')
                      }}>
                        <Text style={{ color: Color.gray2, fontSize: FontSize.font1_size, fontWeight: '600', textAlign: 'left' }}>Reply</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={[tw`p-1`, { borderRadius: 20 }]} onPress={() => { }}>
                  <HeartIcon size={25} color={Color.error} />
                  <Text style={{ color: Color.gray2, fontSize: FontSize.size_3xs, textAlign: 'left' }}>4.2k</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>





          <View style={{ paddingHorizontal: 70 }}>
            <View style={[tw`mb-3`, { position: 'relative' }]}>
              <View style={{ width: '100%', borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <View style={{ flexDirection: 'row', gap: 7, alignItems: 'center' }}>
                  <TouchableOpacity style={[tw``, { borderRadius: 20 }]}>
                    <Image source={require('../assets/phot.png')} style={{ borderRadius: 20, width: 50, height: 50 }} />
                  </TouchableOpacity>
                  <View style={{ width: '75%' }}>
                    <Text style={{ color: Color.gray2, textAlign: 'left' }}><Text style={{ color: Color.black, fontWeight: '800' }}>Muhammad Adnan </Text>Your product has been success for promotion😄</Text>
                    <View style={[tw` gap-x-3`, { flexDirection: 'row', alignItems: 'center' }]}>
                      <Text style={{ color: Color.gray2, fontSize: FontSize.font1_size, fontWeight: '600', textAlign: 'left' }}>12 h</Text>
                      <TouchableOpacity style={[tw`p-1 flex-row`, { borderRadius: 20 }]} onPress={() => {
                        navigation.navigate('Replies')
                      }}>
                        <Text style={{ color: Color.gray2, fontSize: FontSize.font1_size, fontWeight: '600', textAlign: 'left' }}>Reply</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={[tw`p-1`, { borderRadius: 20 }]} onPress={() => { }}>
                  <HeartIcon size={25} color={Color.error} />
                  <Text style={{ color: Color.gray2, fontSize: FontSize.size_3xs, textAlign: 'left' }}>4.2k</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[tw`mb-3`, { position: 'relative' }]}>
              <View style={{ width: '100%', borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <View style={{ flexDirection: 'row', gap: 7, alignItems: 'center' }}>
                  <TouchableOpacity style={[tw``, { borderRadius: 20 }]}>
                    <Image source={require('../assets/phot.png')} style={{ borderRadius: 20, width: 50, height: 50 }} />
                  </TouchableOpacity>
                  <View style={{ width: '75%' }}>
                    <Text style={{ color: Color.gray2, textAlign: 'left' }}><Text style={{ color: Color.black, fontWeight: '800' }}>Muhammad Adnan </Text>Your product has been success for promotion😄</Text>
                    <View style={[tw` gap-x-3`, { flexDirection: 'row', alignItems: 'center' }]}>
                      <Text style={{ color: Color.gray2, fontSize: FontSize.font1_size, fontWeight: '600', textAlign: 'left' }}>12 h</Text>
                      <TouchableOpacity style={[tw`p-1 flex-row`, { borderRadius: 20 }]} onPress={() => {

                        navigation.navigate('Replies')
                      }}>
                        <Text style={{ color: Color.gray2, fontSize: FontSize.font1_size, fontWeight: '600', textAlign: 'left' }}>Reply</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={[tw`p-1`, { borderRadius: 20 }]} onPress={() => { }}>
                  <HeartIcon size={25} color={Color.error} />
                  <Text style={{ color: Color.gray2, fontSize: FontSize.size_3xs, textAlign: 'left' }}>4.2k</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[tw`mb-3`, { position: 'relative' }]}>
              <View style={{ width: '100%', borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <View style={{ flexDirection: 'row', gap: 7, alignItems: 'center' }}>
                  <TouchableOpacity style={[tw``, { borderRadius: 20 }]}>
                    <Image source={require('../assets/phot.png')} style={{ borderRadius: 20, width: 50, height: 50 }} />
                  </TouchableOpacity>
                  <View style={{ width: '75%' }}>
                    <Text style={{ color: Color.gray2, textAlign: 'left' }}><Text style={{ color: Color.black, fontWeight: '800' }}>Muhammad Adnan </Text>Your product has been success for promotion😄</Text>
                    <View style={[tw` gap-x-3`, { flexDirection: 'row', alignItems: 'center' }]}>
                      <Text style={{ color: Color.gray2, fontSize: FontSize.font1_size, fontWeight: '600', textAlign: 'left' }}>12 h</Text>
                      <TouchableOpacity style={[tw`p-1 flex-row`, { borderRadius: 20 }]} onPress={() => {

                        navigation.navigate('Replies')
                      }}>
                        <Text style={{ color: Color.gray2, fontSize: FontSize.font1_size, fontWeight: '600', textAlign: 'left' }}>Reply</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={[tw`p-1`, { borderRadius: 20 }]} onPress={() => { }}>
                  <HeartIcon size={25} color={Color.error} />
                  <Text style={{ color: Color.gray2, fontSize: FontSize.size_3xs, textAlign: 'left' }}>4.2k</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </>
      </ScrollView>











      <View style={{ backgroundColor: Color.prgray, borderRadius: 20, flexDirection: 'row', width: width, position: 'absolute', bottom: 0, padding: 5, alignItems: 'center', paddingHorizontal: 10, gap: 5, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
        <TouchableOpacity style={[tw``, { borderRadius: 20 }]}>
          <Image source={require('../assets/phot.png')} style={{ borderRadius: 200, width: 40, height: 40 }} />
        </TouchableOpacity>
        <TextInput placeholderTextColor={Color.colorGray_100} placeholder="Send a message" style={{ color: Color.black, width: '75%' }} multiline={true} />
        <TouchableOpacity style={[tw`p-3`,]}>
          <PaperAirplaneIcon size={20} color={Color.black} />
        </TouchableOpacity>
      </View>

    </View>
  );
};
export default Replies;
