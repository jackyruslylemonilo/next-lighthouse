import React from 'react';
import Link from 'next/link';
import { View, Text } from 'react-native';

const About = () => {
  return (
    <View>
      <Text>About React Native</Text>
      <Link href="/">
          Home
      </Link>
    </View>
  )
}

export default About;
