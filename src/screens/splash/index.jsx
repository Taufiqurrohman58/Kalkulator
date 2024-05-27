import {Image, ImageBackground, StyleSheet} from 'react-native'
import React, {useEffect} from 'react'
import {Logo, bg} from '../../assets'

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('ScreenProject')
    }, 3000)
  }, [navigation]);

  return (
    <ImageBackground source={bg} style={styles.background}>
      <Image source={Logo} style={styles.logo}></Image>
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  background: {
    flex:1,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center',
  },

  logo:{
    width:200,
    height:110,
  },

})