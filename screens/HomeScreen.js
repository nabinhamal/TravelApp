import {   View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity, } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { HeroImage } from "../assets";
import * as Animatable from 'react-native-animatable';
import styles from '../styles/homescreen';




const Homescreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* First Section */}
      <View style={styles.f1}>
        <View style={styles.f2}>
          <Text style={styles.text1}>Kata</Text>
        </View>
        <Text style={styles.text2}>Jaane Ta</Text>
      </View>

      {/* Second Section */}
      <View style={styles.s1}>
        <Text style={styles.text3}>Enjoy the trip with</Text>
        <Text style={styles.text4}>
          Good Moments
        </Text>
{/* Cirlce Section */}
        <Text style={styles.ctext}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odio quis nostrum
        </Text>
      </View>
      <View style={styles.c1}></View>
<View style={styles.c2}></View>

{/* Image Section */}

<View style={styles.im}>
  <Animatable.Image  source={HeroImage} style={styles.im2}
  animation="fadeIn"
  easing="ease-in-out"
  />
   
  

<TouchableOpacity onPress={() => navigation.navigate("Discover")}

style={styles.im3}>
    <Animatable.View  style={styles.ocir}
    animation={"pulse"}
    easing="ease-in-out"
    iterationCount={"infinite"}
    > 


      <Text style={styles.cirtext}>GO</Text>
    </Animatable.View>
    </TouchableOpacity>
  </View>



    </SafeAreaView>
  );
};

export default Homescreen;
