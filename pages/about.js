import React from 'react';
import Link from 'next/link';
import { View, Text } from 'react-native';
import { t } from 'react-native-tailwindcss';

const About = () => {
  return (
    <View style={[t.itemsCenter, t.justifyCenter]}>
      <Text>About React Native</Text>
      <Text style={[t.textGreen, t.text35]}>Text green</Text>
      <Text style={t.secondaryDarkGray}>Text yellow</Text>
      <Text style={t.textOrange}>Text purple</Text>
      <Link href="/">
          <a>Home</a>
      </Link>
    </View>
  )
}

export default About;
