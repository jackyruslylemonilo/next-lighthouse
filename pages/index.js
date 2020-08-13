import React from 'react';
import Link from 'next/link';
import { View, Text } from 'react-native';

const Index = () => {
  return (
    <View>
      <Text>React Native</Text>
      <Link href="/about">
          About
      </Link>
    </View>
  )
}

export default Index;
