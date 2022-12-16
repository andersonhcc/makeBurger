import React, { useEffect } from 'react';
import { StatusBar,Dimensions } from 'react-native';
import { useAuth } from '../../context/AuthContext';

import { Text } from '../../components/Text';
import { useTheme } from 'styled-components';

import { Button } from '../../components/Button';

import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';

import {
  Container,
  Header,
  WrapperImage,
  ImageProfile,
  WrapperIcon,
  IconExit,
  Main,
  ImageMain,
} from './styles';
import { useNavigation } from '@react-navigation/native';

const ww = Dimensions.get('window').width
const wh = Dimensions.get('window').height

export function Dashboard() {
  const { signOut, user } = useAuth();
  const theme = useTheme();
  const navigation = useNavigation();


  const container = useSharedValue({x:0,o:0})

  const requestButton = useSharedValue({x:0})


  const show={
    container:()=>{
      container.value = {...container.value,x:ww,o:1}
    },
    // requestButton:(x)=>{
    //   requestButton.value = {x:x}
    // }
  }
  const hide={}

  const anm = {
    container:useAnimatedStyle(()=>{
      return{
        // transform:[{translateX:withSpring(container.value.x,{mass:0.45,stiffness:75,damping:20})}],
        opacity:withTiming(container.value.o,{duration:1200})
      }
    })
  }


  const read = {
    init:()=>{
      console.log("\x1b[32m",'Dashboard.js')
      setTimeout(() => {
        show.container()
      },400);
    }
  }

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus',()=>{
      read.init()
    })
    return unsubscribe;
  },[navigation])

  return (
    <Container>

      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />

      <Animated.View style={[{position:'absolute',width:ww,height:wh,},anm.container]}>
        {/* //left:-ww */}

        <Header>
          <WrapperImage>
            <ImageProfile source={{ uri: `https://ui-avatars.com/api/?background=FFC859&name=${user.name}&color=101026` }} />
          </WrapperImage>

          <Text size={20}>Restaurante {user.name}</Text>

          <WrapperIcon onPress={signOut}>
            <IconExit />
          </WrapperIcon>
        </Header>

        <Main>
          <Text
          size={20}
          >
            Que tal abrir um novo pedido?
          </Text>
          
          <ImageMain source={require('../../assets/images/Waiters.gif')} />

          <Button
            title="Abrir pedido"
            backgroundColor={theme.colors.primary}
            width={250}
            height={45}
            fontSize={16}
          />
        </Main>

      </Animated.View>


    </Container>
  );
}