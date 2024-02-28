import * as React from "react";
import { View, Text, TextInput, Pressable, TouchableOpacity, StatusBar, ScrollView, Image, FlatList, Dimensions, Animated } from "react-native";
import { Color, FontSize } from "../GlobalStyles";
import tw from "twrnc";
import ChevronRightIcon from "react-native-heroicons/outline/ChevronRightIcon";
import ArrowUturnLeftIcon from "react-native-heroicons/outline/ArrowUturnLeftIcon";
import TruckIcon from "react-native-heroicons/outline/TruckIcon";
import BookmarkIconS from "react-native-heroicons/solid/BookmarkIcon";
import ChatBubbleLeftEllipsisIcon from "react-native-heroicons/solid/ChatBubbleLeftEllipsisIcon";
import ChatBubbleLeftEllipsisIconO from "react-native-heroicons/outline/ChatBubbleLeftEllipsisIcon";
import PaperAirplaneIcon from "react-native-heroicons/solid/PaperAirplaneIcon";
import HeartIcon from "react-native-heroicons/solid/HeartIcon";
import ArrowLongLeftIcon from "react-native-heroicons/outline/ArrowLongLeftIcon";
import StarIcon from "react-native-heroicons/solid/StarIcon";
import ShoppingCartIconS from "react-native-heroicons/solid/ShoppingCartIcon";
import CheckCircleIcon from "react-native-heroicons/outline/CheckCircleIcon";
import XMarkIcon from "react-native-heroicons/solid/XMarkIcon";
import Pagination from "../Components/Pagination";
import InstaStory from 'react-native-insta-story';
import Modal from "react-native-modal";
import Share from 'react-native-share';
import ViewShot, { captureRef } from 'react-native-view-shot';


const ViewProduct = ({ navigation }) => {
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
    <View style={{ flex: 1, backgroundColor: Color.white }}>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[tw`mb-5`, { position: 'relative', }]}>

          <ViewShot ref={viewRef} >
            <FlatList
              data={myimg}
              renderItem={({ item }) => {
                return (
                  <View style={{ width: width, height: 450, backgroundColor: 'transparent' }}>
                    <Image source={item?.img} style={{ borderRadius: 20, width: width, height: 450, borderTopLeftRadius: 0, borderTopRightRadius: 0 }} />
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
          <Pagination data={myimg} scrollX={scrollX} index={index} bottom={120} />

          <>

            <View style={[tw`flex-row justify-between items-center mb-4`, { padding: 10, position: 'absolute', top: 0, left: 10, width: '95%', height: 90, borderRadius: 20 }]}>
              <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20 }]} onPress={() => {
                navigation.goBack()
              }}
              >
                <ArrowLongLeftIcon size={25} color={Color.black} />
              </TouchableOpacity>
              <View style={tw`flex-row justify-between items-center`}>

                <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20 }]}>
                  <BookmarkIconS size={20} color={Color.colorMediumseagreen} />
                  <Text style={{ color: Color.black, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>23</Text>
                </TouchableOpacity>

              </View>

            </View>



            {/* <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20, padding: 10, alignSelf: 'flex-end', position: 'absolute', top: 20, right: 30, }]}>
            <BookmarkIconS size={20} color={Color.colorMediumseagreen} />
            <Text style={{ color: Color.black, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>23</Text>
          </TouchableOpacity> */}




            <View style={{ marginTop: 30, padding: 10, alignSelf: 'flex-end', position: 'absolute', top: 90, right: 10, }}>
              <TouchableOpacity style={[tw`p-3`, { borderRadius: 20, maxWidth: 45, backgroundColor: Color.prgray, }]} onPress={() => { setShow(true) }}>
                <ChatBubbleLeftEllipsisIcon size={20} color={Color.blue} />
                <Text style={{ color: Color.black, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>23</Text>
              </TouchableOpacity>

            </View>



            <View style={{ padding: 10, alignSelf: 'flex-end', position: 'absolute', top: 205, right: 10, }}>
              <TouchableOpacity style={[tw`p-3`, { borderRadius: 20, maxWidth: 45, backgroundColor: Color.prgray, }]} onPress={() => { shareImage() }}>
                <PaperAirplaneIcon size={20} color={Color.black} />
                <Text style={{ color: Color.black, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>23</Text>
              </TouchableOpacity>

            </View>


            <View style={{ padding: 10, alignSelf: 'flex-end', position: 'absolute', top: 290, right: 10, }}>
              <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.prgray, borderRadius: 20, maxWidth: 45 }]}>
                <HeartIcon size={20} color={Color.error} />
                <Text style={{ color: Color.black, fontSize: FontSize.font1_size, textAlign: 'center', fontWeight: '600' }}>23</Text>
              </TouchableOpacity>

            </View>

          </>

          <View style={[tw`-mt-10`, { position: 'relative' }]}>
            <View style={{ backgroundColor: Color.white, width: '100%', paddingHorizontal: 20, flexDirection: 'column', borderRadius: 20 }}>
              <View style={{ width: 50, height: 4, backgroundColor: Color.colorGray_100, borderRadius: 20, marginTop: 10, alignSelf: 'center' }} />



              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>


                <View>
                  <Text style={{ color: Color.black, fontSize: FontSize.headline2_size, fontWeight: '600' }}>Men Shirts</Text>
                  <View style={tw`flex-row gap-x-3`}>
                    <Text style={{ color: Color.colorGray_100, fontSize: FontSize.font_size, fontWeight: '600', textDecorationLine: 'line-through' }}>3600/-PKR</Text>
                    <Text style={{ color: Color.primary, fontSize: FontSize.font_size, fontWeight: '600', }}>3100/-PKR</Text>
                  </View>
                </View>
                <TouchableOpacity style={[tw`p-3`, { backgroundColor: Color.colorGray_100, borderRadius: 20 }]} onPress={()=>{
                        navigation.navigate('Cart')
                      }}>
                  <ShoppingCartIconS size={25} color={Color.black} />
                </TouchableOpacity>

              </View>






              <View style={{ flexDirection: 'row', gap: 10, marginBottom: 10 }}>
                <TouchableOpacity style={{ padding: 2, borderRadius: 20, borderWidth: 1, borderColor: Color.colorGray_100 }}>
                  <View style={{ borderRadius: 200, width: 20, height: 20, backgroundColor: 'red' }} />
                </TouchableOpacity>

                <TouchableOpacity style={{ padding: 2, borderRadius: 20, borderWidth: 1, borderColor: Color.primary }}>
                  <View style={{ borderRadius: 200, width: 20, height: 20, backgroundColor: 'black' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 2, borderRadius: 20, borderWidth: 1, borderColor: Color.colorGray_100 }}>
                  <View style={{ borderRadius: 200, width: 20, height: 20, backgroundColor: 'green' }} />
                </TouchableOpacity>
              </View>




              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, width: '100%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <CheckCircleIcon size={16} color='#ADD3A5' />
                  <Text style={{ color: '#ADD3A5', fontSize: FontSize.font_size }}> Available in Stock</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <StarIcon size={16} color='orange' />
                  <Text style={{ color: Color.black, fontSize: FontSize.font_size }}> 4.6<Text style={{ color: Color.colorGray_100, fontSize: FontSize.font_size }}>(273 Reviews)</Text></Text>
                </View>

              </View>





              <View style={{ marginBottom: 10 }}>
                <Text style={{ color: Color.black, fontSize: FontSize.font_size, fontWeight: '600', marginBottom: 5 }}>Size</Text>

                <View style={{ flexDirection: 'row', gap: 5, flexWrap: 'wrap' }}>
                  <TouchableOpacity style={{ padding: 2, borderRadius: 20, borderWidth: 1, borderColor: Color.colorGray_100 }}>
                    <View style={{ borderRadius: 20, width: 50, height: 30, backgroundColor: Color.prgray, justifyContent: 'center', alignItems: 'center' }} >
                      <Text style={{ color: Color.black, fontSize: FontSize.font_size }}>XS</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ padding: 2, borderRadius: 20, borderWidth: 1, borderColor: Color.colorGray_100 }}>
                    <View style={{ borderRadius: 20, width: 50, height: 30, backgroundColor: Color.prgray, justifyContent: 'center', alignItems: 'center' }} >
                      <Text style={{ color: Color.black, fontSize: FontSize.font_size }}>S</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ padding: 2, borderRadius: 20, borderWidth: 1, borderColor: Color.colorGray_100 }}>
                    <View style={{ borderRadius: 20, width: 50, height: 30, backgroundColor: Color.prgray, justifyContent: 'center', alignItems: 'center' }} >
                      <Text style={{ color: Color.black, fontSize: FontSize.font_size }}>M</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ padding: 2, borderRadius: 20, borderWidth: 1, borderColor: Color.colorGray_100 }}>
                    <View style={{ borderRadius: 20, width: 50, height: 30, backgroundColor: Color.prgray, justifyContent: 'center', alignItems: 'center' }} >
                      <Text style={{ color: Color.black, fontSize: FontSize.font_size }}>L</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ padding: 2, borderRadius: 20, borderWidth: 1, borderColor: Color.colorGray_100 }}>
                    <View style={{ borderRadius: 20, width: 50, height: 30, backgroundColor: Color.prgray, justifyContent: 'center', alignItems: 'center' }} >
                      <Text style={{ color: Color.black, fontSize: FontSize.font_size }}>XL</Text>
                    </View>
                  </TouchableOpacity>

                </View>

              </View>



              <View style={{ marginBottom: 10 }}>
                <Text style={{ color: Color.black, fontSize: FontSize.font_size, fontWeight: '600', marginBottom: 5 }}>Quantity</Text>

                <View style={{ flexDirection: 'row', gap: 5, flexWrap: 'wrap', alignItems: 'center' }}>
                  <TouchableOpacity style={{ padding: 2, borderRadius: 20, borderWidth: 0, borderColor: Color.colorGray_100 }}>
                    <View style={{ borderRadius: 200, width: 45, height: 45, backgroundColor: Color.prgray, justifyContent: 'center', alignItems: 'center' }} >
                      <Text style={{ color: Color.black, fontSize: FontSize.headline2_size }}>+</Text>
                    </View>
                  </TouchableOpacity>
                  <Text style={{ color: Color.black, fontSize: FontSize.font_size }}>1</Text>
                  <TouchableOpacity style={{ padding: 2, borderRadius: 20, borderWidth: 0, borderColor: Color.colorGray_100 }}>
                    <View style={{ borderRadius: 200, width: 45, height: 45, backgroundColor: Color.prgray, justifyContent: 'center', alignItems: 'center' }} >
                      <Text style={{ color: Color.black, fontSize: FontSize.headline2_size }}>-</Text>
                    </View>
                  </TouchableOpacity>


                </View>

              </View>







              <View style={{ marginBottom: 10 }}>
                <Text style={{ color: Color.black, fontSize: FontSize.font_size, fontWeight: '600', marginBottom: 5 }}>Description</Text>

                <View style={{ flexDirection: 'row', gap: 5, flexWrap: 'wrap', alignItems: 'center' }}>

                  <Text style={{ color: Color.black, fontSize: FontSize.font_size }}>A product description is a written copy that provides essential information about a product or service being sold online. It typically includes details such as features, benefits, specifications, and usage instructions.</Text>



                </View>

              </View>




              <TouchableOpacity style={[tw`mt-1`, { position: 'relative', marginBottom: 10 }]}>
                <View style={{ backgroundColor: Color.prgray, width: '100%', padding: 10, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                  <View style={{ flexDirection: 'row', gap: 0, alignItems: 'center' }}>
                    <TouchableOpacity style={[tw`p-3`, { borderRadius: 20 }]}>
                      <TruckIcon size={25} color={Color.black} />
                    </TouchableOpacity>
                    <View>
                      <Text style={{ color: Color.black, fontSize: FontSize.size_mini, fontWeight: '600' }}>Shipping Information</Text>
                      <View style={tw`flex-row gap-x-3`}>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity style={[tw`p-3`, { borderRadius: 20 }]} onPress={() => {  }}>
                    <ChevronRightIcon size={20} color={Color.black} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>




              <TouchableOpacity style={[tw`mt-1`, { position: 'relative', marginBottom: 10 }]}>
                <View style={{ backgroundColor: Color.prgray, width: '100%', padding: 10, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                  <View style={{ flexDirection: 'row', gap: 0, alignItems: 'center' }}>
                    <TouchableOpacity style={[tw`p-3`, { borderRadius: 20 }]}>
                      <ArrowUturnLeftIcon size={25} color={Color.black} />
                    </TouchableOpacity>
                    <View>
                      <Text style={{ color: Color.black, fontSize: FontSize.size_mini, fontWeight: '600' }}>Returns</Text>
                      <View style={tw`flex-row gap-x-3`}>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity style={[tw`p-3`, { borderRadius: 20 }]} onPress={() => {  }}>
                    <ChevronRightIcon size={20} color={Color.black} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>




              <TouchableOpacity style={[tw`mt-1`, { position: 'relative', marginBottom: 10 }]}>
                <View style={{ backgroundColor: Color.prgray, width: '100%', padding: 10, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                  <View style={{ flexDirection: 'row', gap: 0, alignItems: 'center' }}>
                    <TouchableOpacity style={[tw`p-3`, { borderRadius: 20 }]}>
                      <ChatBubbleLeftEllipsisIconO size={25} color={Color.black} />
                    </TouchableOpacity>
                    <View>
                      <Text style={{ color: Color.black, fontSize: FontSize.size_mini, fontWeight: '600' }}>Reviews</Text>
                      <View style={tw`flex-row gap-x-3`}>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity style={[tw`p-3`, { borderRadius: 20 }]} onPress={() => {  }}>
                    <ChevronRightIcon size={20} color={Color.black} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>



              <View style={{ marginBottom: 10 }}>
                <Text style={{ color: Color.black, fontSize: FontSize.font_size, fontWeight: '600', marginBottom: 5 }}>Product Category</Text>

                <View style={{ flexDirection: 'row', gap: 5, flexWrap: 'wrap', alignItems: 'center' }}>

                  <Text style={{ color: Color.black, fontSize: FontSize.font_size }}>Men Shirts.</Text>



                </View>

              </View>


              <View style={{ marginBottom: 10 }}>
                <Text style={{ color: Color.black, fontSize: FontSize.font_size, fontWeight: '600', marginBottom: 5 }}>SKU</Text>

                <View style={{ flexDirection: 'row', gap: 5, flexWrap: 'wrap', alignItems: 'center' }}>

                  <Text style={{ color: Color.black, fontSize: FontSize.font_size }}>#187645</Text>



                </View>

              </View>







            </View>










          </View>
        </View>


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
              <View style={{ marginBottom: 80, height: (height / 2) - 30 }}>
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

    </View>
  );
};
export default ViewProduct;
