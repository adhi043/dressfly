import * as React from "react";
import { View, Text, Pressable, TouchableOpacity, StatusBar, ScrollView, Image, FlatList, Dimensions, Animated, TextInput, Platform } from "react-native";
import { Color, FontSize } from "../GlobalStyles";
import tw from "twrnc";
import BellIcon from "react-native-heroicons/outline/BellIcon";
import BookmarkIcon from "react-native-heroicons/outline/BookmarkIcon";
import ChevronRightIcon from "react-native-heroicons/solid/ChevronRightIcon";
import StarIcon from "react-native-heroicons/solid/StarIcon";
import HeartIcon from "react-native-heroicons/solid/HeartIcon";
import MegaphoneIcon from "react-native-heroicons/outline/MegaphoneIcon";
import ChevronDoubleRightIcon from "react-native-heroicons/outline/ChevronDoubleRightIcon";
import PlusIconO from "react-native-heroicons/outline/PlusIcon";
import AdjustmentsHorizontalIcon from "react-native-heroicons/solid/AdjustmentsHorizontalIcon";
import CheckBadgeIcon from "react-native-heroicons/solid/CheckBadgeIcon";
import XMarkIcon from "react-native-heroicons/solid/XMarkIcon";
import MagnifyingGlassIconS from "react-native-heroicons/solid/MagnifyingGlassIcon";
import Pagination from "../Components/Pagination";
import InstaStory from 'react-native-insta-story';
import Modal from "react-native-modal";
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import ShoppingCartIconS from "react-native-heroicons/solid/ShoppingCartIcon";





const Search = ({ navigation }) => {

  const cat = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [act, setAct] = React.useState('For you')
  const [search, setSearch] = React.useState(null)
  const [show, setShow] = React.useState(false)
  const [filter, setFilter] = React.useState(false)
  const [sel, setSel] = React.useState('Star')
  const [index, setIndex] = React.useState(0)




  const data = [
    {
      user_id: 1,
      user_image:
        'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
      user_name: 'Ahmet Çağlar Durmuş',
      stories: [
        {
          story_id: 1,
          story_image:
            'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
        {
          story_id: 2,
          story_image:
            'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
        },
      ],
    },
    {
      user_id: 2,
      user_image:
        'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      user_name: 'Test User',
      stories: [
        {
          story_id: 1,
          story_image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
        {
          story_id: 2,
          story_image:
            'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 2 swiped'),
        },
      ],
    },
  ];

  const [multiSliderValue, setMultiSliderValue] = React.useState([0, 100])

  const multiSliderValuesChange = (values) => setMultiSliderValue(values)



  const { width, height } = Dimensions.get('screen')

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Color.background}
        translucent={false}
      />
      <ScrollView style={{ backgroundColor: Color.white }} showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: Color.background, paddingVertical: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>

          <View style={[tw`flex-row justify-between items-center mb-4`, { paddingHorizontal: 20, }]}>
            <View style={tw`flex-row justify-between items-center gap-x-3`}>
              <Image source={require('../assets/phot.png')} style={{ borderRadius: 20, width: 50, height: 50 }} />
              <View>
                <Text style={{ color: Color.colorwhite_100, fontSize: FontSize.font_size }}>Welcome Back</Text>
                <Text style={{ color: Color.white, fontSize: FontSize.size_mini, fontWeight: '600' }}>Muhammad Adnan</Text>
              </View>
            </View>
            <View style={tw`flex-row justify-between items-center gap-x-3`}>
              <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.colorwhite_100, borderRadius: 20 }]}>
                <BellIcon size={25} color={Color.white} />
                <View style={{ height: 16, width: 16, borderRadius: 200, backgroundColor: Color.white, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0, top: 0 }}>
                  <Text style={{ color: Color.black, fontSize: 10 }}>2</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.colorwhite_100, borderRadius: 20 }]}>
                <BookmarkIcon size={25} color={Color.white} />
              </TouchableOpacity>

            </View>

          </View>




          <View style={[tw`flex-row gap-x-5 items-center mb-4`, { paddingHorizontal: 20, }]}>

            <TouchableOpacity style={[tw`flex-row gap-x-3 items-center`]} onPress={() => { setAct('For you') }}>
              <Text style={{ color: act === 'For you' ? Color.colorwhite_200 : Color.white, fontSize: FontSize.headline3_size, fontWeight: '400' }}>For you</Text>
              {act === 'For you' ? <View style={{ borderBottomColor: Color.white, borderBottomWidth: 2, width: 24, position: 'absolute', bottom: -4 }} /> : null}
            </TouchableOpacity>


            <TouchableOpacity style={tw`flex-row gap-x-3 items-center`} onPress={() => { setAct('Following') }}>
              <Text style={{ color: act === 'Following' ? Color.colorwhite_200 : Color.white, fontSize: FontSize.headline3_size, fontWeight: act === 'Following' ? '600' : '400' }}>Following</Text>
              {act === 'Following' ? <View style={{ borderBottomColor: Color.white, borderBottomWidth: 2, width: 24, position: 'absolute', bottom: -4 }} /> : null}
            </TouchableOpacity>
          </View>



          <View style={[tw`gap-x-3`, { paddingHorizontal: 20, flexDirection: 'row', }]}>
            <View style={{ backgroundColor: Color.colorwhite_100, borderRadius: 20, flexDirection: 'row', width: '80%' }}>
              <TouchableOpacity style={[tw`p-3`,]}>
                <MagnifyingGlassIconS size={25} color={Color.white} />
              </TouchableOpacity>
              <TextInput placeholderTextColor={Color.colorwhite_100} placeholder="Search..." style={{ color: Color.white, width: '70%' }} onChangeText={(value) => { setSearch(value) }} />

            </View>
            <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.colorwhite_100, borderRadius: 20, }]} onPress={() => { setFilter(true) }}>
              <AdjustmentsHorizontalIcon size={25} color={Color.white} />
              <View style={{ height: 16, width: 16, borderRadius: 200, backgroundColor: Color.white, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0, top: 0 }}>
                <Text style={{ color: Color.black, fontSize: 10 }}>7</Text>
              </View>
            </TouchableOpacity>

          </View>




        </View>





        {search ?
          <>
            <View style={[tw` my-4`, { paddingHorizontal: 20, width: '100%' }]}>
              <View style={[tw`flex-row justify-between items-center pb-3`, { borderBottomWidth: 1, borderBottomColor: Color.prgray, width: '100%' }]}>
                <Text style={{ color: Color.black, fontSize: FontSize.headline2_size, fontWeight: '600' }}>Recent</Text>
                <TouchableOpacity style={tw`flex-row gap-x-3 items-center`}>
                  <Text style={{ color: Color.colorGray_100, fontSize: FontSize.font_size }}>Clear All</Text>
                </TouchableOpacity>
              </View>



              {cat.map(i => {
                return (<>
                  <View style={[tw`flex-row justify-between items-center py-2`, { width: '100%' }]}>
                    <Text style={{ color: Color.colorGray_100, fontSize: FontSize.size_mini }}>Puma Running Sneakers</Text>
                    <TouchableOpacity style={tw`flex-row gap-x-3 items-center`}>
                      <XMarkIcon size={18} color={Color.colorGray_100} />
                    </TouchableOpacity>
                  </View>
                </>)
              })}

            </View>
          </>
          : <>


            <View style={{ padding: 20, paddingBottom: 0 }}>
              <View style={[tw`mt-1`, { position: 'relative' }]}>
                <View style={{ backgroundColor: Color.prgray, width: '100%', padding: 10, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                  <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                    <TouchableOpacity style={[tw`p-3`, { borderRadius: 20 }]}>
                      <MegaphoneIcon size={25} color={Color.black} />
                    </TouchableOpacity>
                    <View>
                      <Text style={{ color: Color.black, fontSize: FontSize.size_mini, fontWeight: '600' }}>Promote your products</Text>
                      <View style={tw`flex-row gap-x-3`}>
                        <Text style={{ color: Color.colorGray_100, fontSize: FontSize.font_size, fontWeight: '600' }}>For only Rs.500/month</Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.colorGray_100, borderRadius: 20 }]} onPress={() => { setShow(true) }}>
                    <ChevronDoubleRightIcon size={25} color={Color.black} />
                  </TouchableOpacity>
                </View>
              </View>

            </View>


            <View style={{ paddingLeft: 20 }}>
              <View style={tw`flex-row  items-center my-3`}>
                <View>
                  <TouchableOpacity style={[{ backgroundColor: Color.prgray, borderRadius: 200, width: 65, height: 65, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: Color.primary }]}>
                    <PlusIconO size={25} color={Color.black} />
                  </TouchableOpacity>
                  <Text style={{ color: Color.black, fontSize: FontSize.font1_size, textAlign: 'center' }}>Add Story</Text>
                </View>
                <View>
                  <InstaStory
                    data={data}
                    duration={10}
                    avatarSize={60}
                    avatarImageStyle={{}}
                    unPressedBorderColor={Color.primary}
                    style={{ margin: 10 }}
                    avatarTextStyle={{ color: Color.black, fontSize: FontSize.font1_size }}
                    unPressedAvatarTextColor={Color.black}
                    pressedAvatarTextColor={Color.black}

                    showAvatarText={true}

                  />

                </View>




              </View>

            </View>




            <View style={{ marginBottom: 10, justifyContent: 'center', alignItems: 'center',paddingHorizontal:20 }}>

              <View style={{ flexDirection: 'row', gap: 5, flexWrap: 'wrap' }}>
                <TouchableOpacity style={{ padding: 2, borderRadius: 20, borderWidth: 1, borderColor: sel === 'Star' ? Color.primary : Color.colorGray_100 }} onPress={() => { setSel('Star') }}>
                  <View style={{ borderRadius: 20, width: 40, height: 30, backgroundColor: Color.prgray, justifyContent: 'center', alignItems: 'center' }} >
                    <StarIcon size={16} color='orange' />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 2, borderRadius: 20, borderWidth: 1, borderColor: sel === 'All' ? Color.primary : Color.colorGray_100 }} onPress={() => { setSel('All') }}>
                  <View style={{ borderRadius: 20, width: 50, height: 30, backgroundColor: Color.prgray, justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ color: Color.black, fontSize: FontSize.font_size }}>All</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 2, borderRadius: 20, borderWidth: 1, borderColor: sel === 'Sellers' ? Color.primary : Color.colorGray_100 }} onPress={() => { setSel('Sellers') }}>
                  <View style={{ borderRadius: 20, width: 'auto', height: 30, backgroundColor: Color.prgray, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15 }} >
                    <Text style={{ color: Color.black, fontSize: FontSize.font_size }}>Sellers</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 2, borderRadius: 20, borderWidth: 1, borderColor: sel === 'Whole Sale' ? Color.primary : Color.colorGray_100, }} onPress={() => { setSel('Whole Sale') }}>
                  <View style={{ borderRadius: 20, width: '100%', height: 30, backgroundColor: Color.prgray, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }} >
                    <Text style={{ color: Color.black, fontSize: FontSize.font_size }}>Whole Sales</Text>
                  </View>
                </TouchableOpacity>


              </View>

            </View>




            {/* star */}
            {sel === 'Star' ?
              <>
                <TouchableOpacity style={[tw`mb-5`, { flex: 1, flexDirection: 'row', paddingHorizontal: 20, gap: 5 }]} onPress={() => {
                  navigation.navigate('ViewProduct')
                }}>

                  <View style={{ borderRadius: 20, flex: 2, height: 250 }}>
                    <Image source={require('../assets/phot.png')} style={{ borderRadius: 20, width: '100%', height: 250, }} />
                  </View>

                  <View style={{ borderRadius: 20, flex: 1, height: 250, flexDirection: 'column', gap: 5 }}>
                    <View style={{ flex: 1 }}>
                      <Image source={require('../assets/phot2.png')} style={{ borderRadius: 20, width: '100%', height: '100%', }} />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Image source={require('../assets/phot1.png')} style={{ borderRadius: 20, width: '100%', height: '100%', }} />
                    </View>
                  </View>

                </TouchableOpacity>


                <TouchableOpacity style={[tw`mb-5`, { flex: 1, flexDirection: 'row', paddingHorizontal: 20, gap: 5 }]} onPress={() => {
                  navigation.navigate('ViewProduct')
                }} >


                  <View style={{ borderRadius: 20, flex: 1, height: 250, flexDirection: 'column', gap: 5 }}>
                    <View style={{ flex: 1 }}>
                      <Image source={require('../assets/phot1.png')} style={{ borderRadius: 20, width: '100%', height: '100%', }} />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Image source={require('../assets/phot.png')} style={{ borderRadius: 20, width: '100%', height: '100%', }} />
                    </View>
                  </View>



                  <View style={{ borderRadius: 20, flex: 2, height: 250 }}>
                    <Image source={require('../assets/phot2.png')} style={{ borderRadius: 20, width: '100%', height: 250, }} />
                  </View>

                </TouchableOpacity>
              </> : null
            }



            {sel === 'All' ?
              <>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', flexWrap: 'wrap',width:'100%',paddingHorizontal: 20, }}>
                  <View style={[tw`mb-2`, {  position: 'relative',width:'48%' }]}>

                    <View style={{ width: '100%', height: 200, backgroundColor: 'transparent' }}>
                      <Image source={require('../assets/phot.png')} style={{ borderRadius: 20, width: '100%', height: 200, }} />
                    </View>

                    <>




                      <View style={{ padding: 0, alignSelf: 'flex-end', position: 'absolute', top: 0, right: 0, }}>
                        <TouchableOpacity style={[tw`p-2`, {  borderRadius: 0 }]}>
                          <HeartIcon size={24} color={Color.error} />
                        </TouchableOpacity>

                      </View>

                    </>

                    <View style={[tw`mt-1`, { position: 'relative' }]}>
                      <View style={{ backgroundColor: Color.prgray, width: '100%', padding: 10, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                          <Text style={{ color: Color.black, fontSize: FontSize.font_size, fontWeight: '600' }}>Men Shirt...</Text>
                          <View style={[tw`gap-x-3`,{flexWrap:'wrap'}]}>
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
                  <View style={[tw`mb-2`, {  position: 'relative',width:'48%' }]}>

                    <View style={{ width: '100%', height: 200, backgroundColor: 'transparent' }}>
                      <Image source={require('../assets/phot.png')} style={{ borderRadius: 20, width: '100%', height: 200, }} />
                    </View>

                    <>




                      <View style={{ padding: 0, alignSelf: 'flex-end', position: 'absolute', top: 0, right: 0, }}>
                        <TouchableOpacity style={[tw`p-2`, {  borderRadius: 0 }]}>
                          <HeartIcon size={24} color={Color.error} />
                        </TouchableOpacity>

                      </View>

                    </>

                    <View style={[tw`mt-1`, { position: 'relative' }]}>
                      <View style={{ backgroundColor: Color.prgray, width: '100%', padding: 10, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                          <Text style={{ color: Color.black, fontSize: FontSize.font_size, fontWeight: '600' }}>Men Shirt...</Text>
                          <View style={[tw`gap-x-3`,{flexWrap:'wrap'}]}>
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
              : null}




            {/* sellers */}

            {sel === 'Sellers' ?
              <>
                <View style={{ paddingHorizontal: 20 }}>
                  <View style={[tw`flex-row justify-between items-center mb-2`, { padding: 10, width: '100%', height: 90, borderRadius: 20, backgroundColor: Color.prgray }]}>
                    <View style={tw`flex-row justify-between items-center gap-x-3`}>
                      <TouchableOpacity style={{ padding: 2, borderRadius: 20, borderWidth: 1, borderColor: Color.primary }} onPress={()=>{
                        navigation.navigate('Sellers')
                      }}>
                        <Image source={require('../assets/phot.png')} style={{ borderRadius: 20, width: 50, height: 50 }} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{
                        navigation.navigate('Sellers')
                      }}>
                        <Text style={{ color: Color.black, fontSize: FontSize.size_mini, fontWeight: '600' }}>Muhammad Adnan</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                          <View style={{ borderRightWidth: 1, borderRightColor: Color.colorGray_100, paddingRight: 10 }}>
                            <Text style={{ color: Color.gray2, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>37 Followers</Text>
                          </View>
                          <View style={{ paddingLeft: 10 }}>
                            <Text style={{ color: Color.gray2, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>27 Products</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={tw`flex-row justify-between items-center gap-x-3`}>

                      <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20 }]}>
                        <Text style={{ color: Color.primary, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>Follow</Text>
                      </TouchableOpacity>

                    </View>

                  </View>
                  <View style={[tw`flex-row justify-between items-center mb-2`, { padding: 10, width: '100%', height: 90, borderRadius: 20, backgroundColor: Color.prgray }]}>
                    <View style={tw`flex-row justify-between items-center gap-x-3`}>
                      <TouchableOpacity style={{ padding: 2, borderRadius: 20, borderWidth: 1, borderColor: Color.primary }} onPress={()=>{
                        navigation.navigate('Sellers')
                      }}>
                        <Image source={require('../assets/phot.png')} style={{ borderRadius: 20, width: 50, height: 50 }} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{
                        navigation.navigate('Sellers')
                      }}>
                        <Text style={{ color: Color.black, fontSize: FontSize.size_mini, fontWeight: '600' }}>Muhammad Adnan</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                          <View style={{ borderRightWidth: 1, borderRightColor: Color.colorGray_100, paddingRight: 10 }}>
                            <Text style={{ color: Color.gray2, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>37 Followers</Text>
                          </View>
                          <View style={{ paddingLeft: 10 }}>
                            <Text style={{ color: Color.gray2, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>27 Products</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={tw`flex-row justify-between items-center gap-x-3`}>

                      <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20 }]}>
                        <Text style={{ color: Color.black, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>UnFollow</Text>
                      </TouchableOpacity>

                    </View>

                  </View>
                </View>

              </>
              : null}




            {/* whole sale */}

            {sel === 'Whole Sale' ?
              <>
                <View style={{ paddingHorizontal: 20 }}>
                  <View style={[tw`flex-row justify-between items-center mb-2`, { padding: 10, width: '100%', height: 90, borderRadius: 20, backgroundColor: Color.prgray }]}>
                    <View style={tw`flex-row justify-between items-center gap-x-3`}>
                      <View style={{ padding: 2, borderRadius: 20, borderWidth: 1, borderColor: Color.primary }}>
                        <Image source={require('../assets/phot.png')} style={{ borderRadius: 20, width: 50, height: 50 }} />
                      </View>
                      <View>
                        <Text style={{ color: Color.black, fontSize: FontSize.size_mini, fontWeight: '600' }}>Muhammad Adnan</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                          <View style={{ borderRightWidth: 1, borderRightColor: Color.colorGray_100, paddingRight: 10 }}>
                            <Text style={{ color: Color.gray2, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>37 Followers</Text>
                          </View>
                          <View style={{ paddingLeft: 10 }}>
                            <Text style={{ color: Color.gray2, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>27 Products</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={tw`flex-row justify-between items-center gap-x-3`}>

                      <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20 }]}>
                        <Text style={{ color: Color.primary, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>Follow</Text>
                      </TouchableOpacity>

                    </View>

                  </View>
                  <View style={[tw`flex-row justify-between items-center mb-2`, { padding: 10, width: '100%', height: 90, borderRadius: 20, backgroundColor: Color.prgray }]}>
                    <View style={tw`flex-row justify-between items-center gap-x-3`}>
                      <View style={{ padding: 2, borderRadius: 20, borderWidth: 1, borderColor: Color.primary }}>
                        <Image source={require('../assets/phot.png')} style={{ borderRadius: 20, width: 50, height: 50 }} />
                      </View>
                      <View>
                        <Text style={{ color: Color.black, fontSize: FontSize.size_mini, fontWeight: '600' }}>Muhammad Adnan</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                          <View style={{ borderRightWidth: 1, borderRightColor: Color.colorGray_100, paddingRight: 10 }}>
                            <Text style={{ color: Color.gray2, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>37 Followers</Text>
                          </View>
                          <View style={{ paddingLeft: 10 }}>
                            <Text style={{ color: Color.gray2, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>27 Products</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={tw`flex-row justify-between items-center gap-x-3`}>

                      <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20 }]}>
                        <Text style={{ color: Color.black, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>UnFollow</Text>
                      </TouchableOpacity>

                    </View>

                  </View>
                </View>

              </>
              : null}







          </>}









      </ScrollView>







      <Modal isVisible={show} backdropColor={Color.background} backdropOpacity={0.4}  >
        <View style={{ backgroundColor: Color.white, borderRadius: 20, padding: 20, paddingHorizontal: 40, justifyContent: 'center', alignItems: 'center' }}>

          <TouchableOpacity style={[tw`flex-row gap-x-3 items-center`, { position: 'absolute', top: 10, right: 10 }]} onPress={() => { setShow(false) }}>
            <XMarkIcon size={18} color={Color.gray2} />
          </TouchableOpacity>
          <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.primary, borderRadius: 20 }]}>
            <CheckBadgeIcon size={25} color={Color.white} />
          </TouchableOpacity>
          <Text style={{ color: Color.black, fontSize: FontSize.headline3_size, fontWeight: '800' }}>Successfully</Text>
          <Text style={{ color: Color.gray2, marginVertical: 10, marginBottom: 30, textAlign: 'center' }}>Your product has been successfully added for promotion!</Text>
          <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.background, borderRadius: 20, flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }]}>

            <Text style={{ color: Color.white, fontSize: FontSize.font_size }}>View Post</Text>


          </TouchableOpacity>
        </View>
      </Modal>








      <Modal isVisible={filter} backdropColor={Color.background} backdropOpacity={0.4}
        style={{ margin: 0, justifyContent: 'flex-end' }}  >
        <View style={{ backgroundColor: Color.white, borderRadius: 20, padding: 20, justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
          <View style={{ width: 50, height: 4, backgroundColor: Color.colorGray_100, borderRadius: 20 }} />
          <TouchableOpacity style={[tw`flex-row gap-x-3 items-center`, { position: 'absolute', top: 10, right: 10 }]} onPress={() => { setFilter(false) }}>
            <XMarkIcon size={18} color={Color.gray2} />
          </TouchableOpacity>
          {/* <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.primary, borderRadius: 20 }]}>
            <CheckBadgeIcon size={25} color={Color.white} />
          </TouchableOpacity> */}
          <Text style={{ color: Color.gray2, fontSize: FontSize.headline3_size, fontWeight: '800', marginVertical: 15 }}><Text style={{ color: Color.black, fontSize: FontSize.headline3_size, fontWeight: '800', marginTop: 15 }}>Filters</Text></Text>

          <View style={{ height: (height / 2) }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ width: width, paddingHorizontal: 10, height: '100%' }}>
              <View style={{ marginBottom: 10, height: '100%' }}>


                <View style={[tw`mt-1`, { position: 'relative', marginBottom: 5 }]}>
                  <View style={{ backgroundColor: Color.prgray, width: '100%', padding: 10, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                    <View style={{ flexDirection: 'row', gap: 0, alignItems: 'center' }}>

                      <View>
                        <Text style={{ color: Color.black, fontSize: FontSize.size_mini, fontWeight: '600' }}>Sort By</Text>
                        <View style={tw`flex-row gap-x-3`}>
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity style={[tw`p-3`, { flexDirection: 'row', gap: 5, borderRadius: 20 }]} onPress={() => { }}>
                      <Text style={{ color: Color.colorGray_100, fontSize: FontSize.font_size }}>In Stock Only</Text>
                      <ChevronRightIcon size={20} color={Color.black} />
                    </TouchableOpacity>
                  </View>
                </View>




                <View style={[tw`mt-1`, { position: 'relative', marginBottom: 5 }]}>
                  <View style={{ backgroundColor: Color.prgray, width: '100%', padding: 10, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                    <View style={{ flexDirection: 'row', gap: 0, alignItems: 'center' }}>

                      <View>
                        <Text style={{ color: Color.black, fontSize: FontSize.size_mini, fontWeight: '600' }}>Category</Text>
                        <View style={tw`flex-row gap-x-3`}>
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity style={[tw`p-3`, { flexDirection: 'row', gap: 5, borderRadius: 20 }]} onPress={() => { }}>
                      <Text style={{ color: Color.colorGray_100, fontSize: FontSize.font_size }}>Jackets</Text>
                      <ChevronRightIcon size={20} color={Color.black} />
                    </TouchableOpacity>
                  </View>
                </View>




                <View style={[tw`mt-1`, { position: 'relative', marginBottom: 5 }]}>
                  <View style={{ backgroundColor: Color.prgray, width: '100%', padding: 10, borderRadius: 20, flexDirection: 'column', alignItems: 'center' }}>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <View style={{ flexDirection: 'row', gap: 0, alignItems: 'center' }}>

                        <View>
                          <Text style={{ color: Color.black, fontSize: FontSize.size_mini, fontWeight: '600' }}>State</Text>
                          <View style={tw`flex-row gap-x-3`}>
                          </View>
                        </View>
                      </View>
                      <TouchableOpacity style={[tw`p-3`, { flexDirection: 'row', gap: 5, borderRadius: 20 }]} onPress={() => { }}>
                        {/* <Text style={{ color: Color.colorGray_100, fontSize: FontSize.font_size }}>Jackets</Text> */}
                        <ChevronRightIcon size={20} color={Color.black} />
                      </TouchableOpacity>


                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                      <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20, width: '48%', elevation: 5 }]} onPress={() => { }}>
                        <Text style={{ color: Color.black, fontSize: FontSize.font_size, textAlign: 'center' }}>New</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20, width: '48%', elevation: 5 }]} onPress={() => { }}>
                        <Text style={{ color: Color.black, fontSize: FontSize.font_size, textAlign: 'center' }}>Used</Text>
                      </TouchableOpacity>


                    </View>

                  </View>
                </View>





                <View style={[tw`mt-1`, { position: 'relative', marginBottom: 5 }]}>
                  <View style={{ backgroundColor: Color.prgray, width: '100%', padding: 10, borderRadius: 20, flexDirection: 'column', alignItems: 'center' }}>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <View style={{ flexDirection: 'row', gap: 0, alignItems: 'center' }}>

                        <View>
                          <Text style={{ color: Color.black, fontSize: FontSize.size_mini, fontWeight: '600' }}>Gender</Text>
                          <View style={tw`flex-row gap-x-3`}>
                          </View>
                        </View>
                      </View>
                      <TouchableOpacity style={[tw`p-3`, { flexDirection: 'row', gap: 5, borderRadius: 20 }]} onPress={() => { }}>
                        {/* <Text style={{ color: Color.colorGray_100, fontSize: FontSize.font_size }}>Jackets</Text> */}
                        <ChevronRightIcon size={20} color={Color.black} />
                      </TouchableOpacity>


                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                      <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20, width: '30%', elevation: 5 }]} onPress={() => { }}>
                        <Text style={{ color: Color.black, fontSize: FontSize.font_size, textAlign: 'center' }}>UniSex</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20, width: '30%', elevation: 5 }]} onPress={() => { }}>
                        <Text style={{ color: Color.black, fontSize: FontSize.font_size, textAlign: 'center' }}>Men</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20, width: '30%', elevation: 5 }]} onPress={() => { }}>
                        <Text style={{ color: Color.black, fontSize: FontSize.font_size, textAlign: 'center' }}>Women</Text>
                      </TouchableOpacity>


                    </View>

                  </View>
                </View>








                <View style={[tw`mt-1`, { position: 'relative', marginBottom: 5 }]}>
                  <View style={{ backgroundColor: Color.prgray, width: '100%', padding: 10, borderRadius: 20, flexDirection: 'column', alignItems: 'center' }}>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <View style={{ flexDirection: 'row', gap: 0, alignItems: 'center' }}>

                        <View>
                          <Text style={{ color: Color.black, fontSize: FontSize.size_mini, fontWeight: '600' }}>Price Range</Text>
                          <View style={tw`flex-row gap-x-3`}>
                          </View>
                        </View>
                      </View>
                      <TouchableOpacity style={[tw`p-3`, { flexDirection: 'row', gap: 5, borderRadius: 20 }]} onPress={() => { }}>
                        <Text style={{ color: Color.colorGray_100, fontSize: FontSize.font_size }}>PKR {multiSliderValue[0]} - PKR {multiSliderValue[1]}</Text>
                        {/* <ChevronRightIcon size={20} color={Color.black} /> */}
                      </TouchableOpacity>


                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <MultiSlider
                        markerStyle={{
                          ...Platform.select({
                            ios: {
                              height: 30,
                              width: 30,
                              shadowColor: '#000000',
                              shadowOffset: {
                                width: 0,
                                height: 3
                              },
                              shadowRadius: 1,
                              shadowOpacity: 0.1
                            },
                            android: {
                              height: 15,
                              width: 15,
                              borderRadius: 50,
                              backgroundColor: Color.primary
                            }
                          })
                        }}
                        pressedMarkerStyle={{
                          ...Platform.select({
                            android: {
                              height: 30,
                              width: 30,
                              borderRadius: 20,
                              backgroundColor: Color.primary
                            }
                          })
                        }}
                        selectedStyle={{
                          backgroundColor: Color.primary
                        }}
                        trackStyle={{
                          backgroundColor: '#CECECE'
                        }}
                        touchDimensions={{
                          height: 40,
                          width: 40,
                          borderRadius: 20,
                          slipDisplacement: 40
                        }}
                        values={[multiSliderValue[0], multiSliderValue[1]]}
                        sliderLength={280}
                        onValuesChange={multiSliderValuesChange}
                        min={0}
                        max={100}
                        allowOverlap={false}
                        minMarkerOverlapDistance={10}
                      />


                    </View>

                  </View>
                </View>








                <View style={[tw`mt-1`, { position: 'relative', marginBottom: 5 }]}>
                  <View style={{ backgroundColor: Color.prgray, width: '100%', padding: 10, borderRadius: 20, flexDirection: 'column', alignItems: 'center' }}>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <View style={{ flexDirection: 'row', gap: 0, alignItems: 'center' }}>

                        <View>
                          <Text style={{ color: Color.black, fontSize: FontSize.size_mini, fontWeight: '600' }}>Size</Text>
                          <View style={tw`flex-row gap-x-3`}>
                          </View>
                        </View>
                      </View>
                      <TouchableOpacity style={[tw`p-3`, { flexDirection: 'row', gap: 5, borderRadius: 20 }]} onPress={() => { }}>
                        {/* <Text style={{ color: Color.colorGray_100, fontSize: FontSize.font_size }}>Jackets</Text> */}
                        <ChevronRightIcon size={20} color={Color.black} />
                      </TouchableOpacity>


                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                      <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20, width: '18%', elevation: 5 }]} onPress={() => { }}>
                        <Text style={{ color: Color.black, fontSize: FontSize.font_size, textAlign: 'center' }}>XS</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20, width: '18%', elevation: 5 }]} onPress={() => { }}>
                        <Text style={{ color: Color.black, fontSize: FontSize.font_size, textAlign: 'center' }}>S</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20, width: '18%', elevation: 5 }]} onPress={() => { }}>
                        <Text style={{ color: Color.black, fontSize: FontSize.font_size, textAlign: 'center' }}>M</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20, width: '18%', elevation: 5 }]} onPress={() => { }}>
                        <Text style={{ color: Color.black, fontSize: FontSize.font_size, textAlign: 'center' }}>L</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20, width: '18%', elevation: 5 }]} onPress={() => { }}>
                        <Text style={{ color: Color.black, fontSize: FontSize.font_size, textAlign: 'center' }}>XL</Text>
                      </TouchableOpacity>


                    </View>

                  </View>
                </View>







                <View style={[tw`mt-1`, { position: 'relative', marginBottom: 5 }]}>
                  <View style={{ backgroundColor: Color.prgray, width: '100%', padding: 10, borderRadius: 20, flexDirection: 'column', alignItems: 'center' }}>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <View style={{ flexDirection: 'row', gap: 0, alignItems: 'center' }}>

                        <View>
                          <Text style={{ color: Color.black, fontSize: FontSize.size_mini, fontWeight: '600' }}>Rating</Text>
                          <View style={tw`flex-row gap-x-3`}>
                          </View>
                        </View>
                      </View>
                      <TouchableOpacity style={[tw`p-3`, { flexDirection: 'row', gap: 5, borderRadius: 20 }]} onPress={() => { }}>
                        {/* <Text style={{ color: Color.colorGray_100, fontSize: FontSize.font_size }}>Jackets</Text> */}
                        <ChevronRightIcon size={20} color={Color.black} />
                      </TouchableOpacity>


                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                      <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20, width: '18%', elevation: 5, flexDirection: 'row' }]} onPress={() => { }}>
                        <StarIcon size={16} color='orange' />
                        <Text style={{ color: Color.black, fontSize: FontSize.font_size, textAlign: 'center' }}> 5</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20, width: '18%', elevation: 5, flexDirection: 'row' }]} onPress={() => { }}>
                        <StarIcon size={16} color='orange' />
                        <Text style={{ color: Color.black, fontSize: FontSize.font_size, textAlign: 'center' }}> 4</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20, width: '18%', elevation: 5, flexDirection: 'row' }]} onPress={() => { }}>
                        <StarIcon size={16} color='orange' />
                        <Text style={{ color: Color.black, fontSize: FontSize.font_size, textAlign: 'center' }}> 3</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20, width: '18%', elevation: 5, flexDirection: 'row' }]} onPress={() => { }}>
                        <StarIcon size={16} color='orange' />
                        <Text style={{ color: Color.black, fontSize: FontSize.font_size, textAlign: 'center' }}> 2</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20, width: '18%', elevation: 5, flexDirection: 'row' }]} onPress={() => { }}>
                        <StarIcon size={16} color='orange' />
                        <Text style={{ color: Color.black, fontSize: FontSize.font_size, textAlign: 'center' }}> 1</Text>
                      </TouchableOpacity>




                    </View>

                  </View>
                </View>







                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, paddingHorizontal: 5 }}>

                  <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20, width: '48%', elevation: 5 }]} onPress={() => { }}>
                    <Text style={{ color: Color.black, fontSize: FontSize.font_size, textAlign: 'center' }}>Reset</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.background, borderRadius: 20, flexDirection: 'row', width: '48%', justifyContent: 'center', alignItems: 'center', elevation: 5 }]}>
                    <Text style={{ color: Color.white, fontSize: FontSize.font_size }}>Apply</Text>
                  </TouchableOpacity>


                </View>






              </View>
            </ScrollView>
          </View>

        </View>
      </Modal>




    </>
  );
};
export default Search;
