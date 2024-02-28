import * as React from "react";
import { View, Text, TextInput, Pressable, TouchableOpacity, StatusBar, ScrollView, Image, FlatList, Dimensions, Animated } from "react-native";
import { Color, FontSize } from "../GlobalStyles";
import tw from "twrnc";
import BellIcon from "react-native-heroicons/outline/BellIcon";
import BookmarkIcon from "react-native-heroicons/outline/BookmarkIcon";
import BookmarkIconS from "react-native-heroicons/solid/BookmarkIcon";
import ChatBubbleLeftEllipsisIcon from "react-native-heroicons/solid/ChatBubbleLeftEllipsisIcon";
import PaperAirplaneIcon from "react-native-heroicons/solid/PaperAirplaneIcon";
import HeartIcon from "react-native-heroicons/solid/HeartIcon";
import ArrowLongRightIcon from "react-native-heroicons/outline/ArrowLongRightIcon";
import PlusIconO from "react-native-heroicons/outline/PlusIcon";
import ShoppingCartIconS from "react-native-heroicons/solid/ShoppingCartIcon";
import CheckBadgeIcon from "react-native-heroicons/solid/CheckBadgeIcon";
import XMarkIcon from "react-native-heroicons/solid/XMarkIcon";
import Pagination from "../Components/Pagination";
import InstaStory from 'react-native-insta-story';
import Modal from "react-native-modal";
import Share from 'react-native-share';
import ViewShot, { captureRef } from 'react-native-view-shot';



const Home = ({ navigation }) => {

  const cat = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [actCat, setActCat] = React.useState(null)
  const [index, setIndex] = React.useState(0)
  const [show, setShow] = React.useState(false)
  const [result, setResult] = React.useState('')

  const myimg =
    [
      {
        img: require('../assets/phot.png')
      },
      {
        img: require('../assets/phot1.png')
      },
      {
        img: require('../assets/phot2.png')
      },

    ]

  const scrollX = React.useRef(new Animated.Value(0)).current;
  // const intervalRef = React.useRef(null);

  const handleScroll = (event) => {
    Animated.event([{
      nativeEvent: {
        contentOffset: {
          x: scrollX
        }
      }
    }], {
      useNativeDriver: false
    })(event)

    // console.log(event);
  }


  const handleOnViewableItemsChanged = React.useRef(({ viewableItems }) => {
    // console.log(viewableItems,'viewableItemsChanged');
    // You can access the first visible item like this: viewableItems[0].item
    setIndex(viewableItems[0].index)
  }).current;


  const viewabilityConfig = React.useRef({ itemVisiblePercentThreshold: 50 }).current;




  // const startAutoSlide = () => {
  //   intervalRef.current = setInterval(() => {
  //     // Calculate the next index
  //     const nextIndex = (index + 1) % myimg.length;

  //     // Scroll to the next index
  //     flatListRef.current.scrollToIndex({ index: nextIndex });
  //   }, 3000); // Adjust the interval as needed (e.g., 3000 milliseconds for a 3-second interval)
  // };

  // const stopAutoSlide = () => {
  //   clearInterval(intervalRef.current);
  // };

  // const flatListRef = React.useRef(null);











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


  const viewRef = React.useRef()



  const shareImage = async () => {
    try {
      // console.log(viewRef.current);
      const uri = await captureRef(viewRef, {
        format: 'jpg',
        quality: 0.8,
      });
      // console.log('uri', uri);
      const shareResponse = await Share.open({ url: uri });
      console.log('shareResponse', shareResponse);
    } catch (error) {
      console.log('error', error);
    }
  };





  const shareMultipleImages = async () => {
    const shareOptions = {
      title: 'Share file',
      message: 'Simple share with message',
      failOnCancel: false,
      urls: ['https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU'],
    };




    // If you want, you can use a try catch, to parse
    // the share response. If the user cancels, etc.
    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log('Result =>', ShareResponse);
      setResult(JSON.stringify(ShareResponse, null, 2));
    } catch (error) {
      console.log('Error =>', error);
      setResult('error: '.concat(getErrorString(error)));
    }
  };










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


          <View style={[tw`flex-row justify-between items-center mb-4`, { paddingHorizontal: 20, }]}>
            <Text style={{ color: Color.white, fontSize: FontSize.headline2_size, fontWeight: '600' }}>Categories</Text>
            <TouchableOpacity style={tw`flex-row gap-x-3 items-center`}>
              <Text style={{ color: Color.colorwhite_100, fontSize: FontSize.font_size }}>See All</Text>
              <ArrowLongRightIcon size={25} color={Color.colorwhite_100} />
            </TouchableOpacity>
          </View>



          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingLeft: 20 }}>
            <View style={tw`flex-row gap-x-2 items-center mb-4`}>

              {cat.map(i => {
                return (<>
                  <TouchableOpacity style={[tw`p-3 flex-row gap-x-2 items-center`, { backgroundColor: actCat === i ? Color.white : Color.colorwhite_100, borderRadius: 20 }]} onPress={() => { setActCat(i) }}>
                    {/* <BookmarkIcon size={22} color={actCat === i ? Color.black : Color.white} /> */}
                    <Text style={{ color: actCat === i ? Color.black : Color.white, fontSize: FontSize.font_size }}>Men Shirts</Text>
                  </TouchableOpacity>
                </>)
              })}

            </View>

          </ScrollView>

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



            {/* {cat.map(i => {
              return (<>
                <View>
                  <View style={{ padding: 5, borderRadius: 20, borderWidth: 1, borderColor: Color.primary }}>
                    <Image source={require('../assets/phot.png')} style={{ borderRadius: 20, width: 60, height: 60 }} />
                  </View>
                  <Text style={{ color: Color.black, fontSize: FontSize.font1_size, textAlign: 'center' }}>Adnan</Text>
                </View>
              </>)
            })} */}

          </View>

        </View>









        {cat.map(i => {
          return (<>
            <View style={[tw`mb-5`, { paddingHorizontal: 20, position: 'relative', }]}>
              
            <ViewShot ref={viewRef} >
              <FlatList
                data={myimg}
                renderItem={({ item }) => {
                  return (
                    <View style={{ width: width - 40, height: 400, backgroundColor: 'transparent' }}>
                      <Image source={item?.img} style={{ borderRadius: 20, width: width - 40, height: 400, }} />
                    </View>
                  )
                }}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                onViewableItemsChanged={handleOnViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
              // onTouchStart={stopAutoSlide}
              // onTouchEnd={startAutoSlide}
              // onMomentumScrollEnd={startAutoSlide}

              />
              </ViewShot>
              <Pagination data={myimg} scrollX={scrollX} index={index} bottom={90} />

              <>
                <View style={[tw`flex-row justify-between items-center mb-4`, { padding: 10, position: 'absolute', top: 0, left: 20, width: '100%', height: 90, borderRadius: 20 }]}>
                  <TouchableOpacity style={tw`flex-row justify-between items-center gap-x-3`} onPress={()=>{
                        navigation.navigate('Sellers')
                      }}>
                    <View style={{ padding: 2, borderRadius: 20, borderWidth: 1, borderColor: Color.primary }}>
                      <Image source={require('../assets/phot.png')} style={{ borderRadius: 20, width: 50, height: 50 }} />
                    </View>
                    <View>
                      <Text style={{ color: Color.white, fontSize: FontSize.size_mini, fontWeight: '600' }}>Shahmeer Collection</Text>
                      <Text style={{ color: Color.colorwhite_100, fontSize: FontSize.font_size }}>@Muhammad Tufail</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={tw`flex-row justify-between items-center gap-x-3`}>

                    <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20 }]}>
                      <BookmarkIconS size={20} color={Color.colorMediumseagreen} />
                      <Text style={{ color: Color.black, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>23</Text>
                    </TouchableOpacity>

                  </View>

                </View>




                <View style={{ marginTop: 30, padding: 10, alignSelf: 'flex-end', position: 'absolute', top: 90, right: 20, }}>
                  <TouchableOpacity style={[tw`p-3`, { borderRadius: 20, maxWidth: 45, backgroundColor: Color.prgray, }]} onPress={() => { setShow(true) }}>
                    <ChatBubbleLeftEllipsisIcon size={20} color={Color.blue} />
                    <Text style={{ color: Color.black, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>23</Text>
                  </TouchableOpacity>

                </View>



                <View style={{ padding: 10, alignSelf: 'flex-end', position: 'absolute', top: 205, right: 20, }}>
                  <TouchableOpacity style={[tw`p-3`, { borderRadius: 20, maxWidth: 45, backgroundColor: Color.prgray, }]} onPress={() => { shareImage() }}>
                    <PaperAirplaneIcon size={20} color={Color.black} />
                    <Text style={{ color: Color.black, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>23</Text>
                  </TouchableOpacity>

                </View>


                <View style={{ padding: 10, alignSelf: 'flex-end', position: 'absolute', top: 290, right: 20, }}>
                  <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20, maxWidth: 45 }]}>
                    <HeartIcon size={20} color={Color.error} />
                    <Text style={{ color: Color.black, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>23</Text>
                  </TouchableOpacity>

                </View>

              </>

              <View style={[tw`mt-1`, { position: 'relative' }]}>
                <View style={{ backgroundColor: Color.prgray, width: '100%', padding: 10, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <View>
                    <Text style={{ color: Color.black, fontSize: FontSize.size_mini, fontWeight: '600' }}>Men Shirts...</Text>
                    <View style={tw`flex-row gap-x-3`}>
                      <Text style={{ color: Color.colorGray_100, fontSize: FontSize.font_size, fontWeight: '600', textDecorationLine: 'line-through' }}>3600/-PKR</Text>
                      <Text style={{ color: Color.primary, fontSize: FontSize.font_size, fontWeight: '600', }}>3100/-PKR</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.colorGray_100, borderRadius: 20 }]} onPress={()=>{
                        navigation.navigate('ViewProduct')
                      }}>
                    <ShoppingCartIconS size={25} color={Color.black} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>)
        })}







      </ScrollView>





      <Modal isVisible={show} backdropColor={Color.background} backdropOpacity={0.4}
        style={{ margin: 0, justifyContent: 'flex-end' }}  >
        <View style={{ backgroundColor: Color.white, borderRadius: 20, padding: 20, justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
          <View style={{ width: 50, height: 4, backgroundColor: Color.colorGray_100, borderRadius: 20 }} />
          <TouchableOpacity style={[tw`flex-row gap-x-3 items-center`, { position: 'absolute', top: 10, right: 10 }]} onPress={() => { setShow(false) }}>
            <XMarkIcon size={18} color={Color.gray2} />
          </TouchableOpacity>
          {/* <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.primary, borderRadius: 20 }]}>
            <CheckBadgeIcon size={25} color={Color.white} />
          </TouchableOpacity> */}
          <Text style={{ color: Color.gray2, fontSize: FontSize.headline3_size, fontWeight: '800', marginVertical: 15 }}><Text style={{ color: Color.black, fontSize: FontSize.headline3_size, fontWeight: '800', marginTop: 15 }}>143</Text> Comments</Text>

          <View style={{ height: (height / 2) - 30 }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ width: width, paddingHorizontal: 10, height: '100%' }}>
              <View style={{ marginBottom: 50, height: '100%' }}>
                {cat.map(i => {
                  return (<>
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
                                setShow(false)
                                navigation.navigate('Replies')
                              }}>
                                <Text style={{ color: Color.gray2, fontSize: FontSize.font1_size, fontWeight: '600', textAlign: 'left' }}>Reply</Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                        <TouchableOpacity style={[tw`p-1`, { borderRadius: 20 }]} onPress={() => { setShow(true) }}>
                          <HeartIcon size={25} color={Color.error} />
                          <Text style={{ color: Color.gray2, fontSize: FontSize.size_3xs, textAlign: 'left' }}>4.2k</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </>)
                })}
              </View>
            </ScrollView>
          </View>

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
      </Modal>

    </>
  );
};
export default Home;
