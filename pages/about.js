import React from 'react';
import Link from 'next/link';
import { View, Text } from 'react-native';
import { t } from 'react-native-tailwindcss';

const About = () => {
  return (
    <View style={[t.itemsCenter, t.justifyCenter]}>
      <Text>About React Native</Text>
      <Text style={t.textGreen500}>Text green</Text>
      <Text style={t.textYellow300}>Text yellow</Text>
      <Text style={t.textPurple100}>Text purple</Text>
      <Link href="/">
          <a>Home</a>
      </Link>
    </View>
  )
}

export default About;
