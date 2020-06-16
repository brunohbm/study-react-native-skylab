import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Article = () => {
  return (
    <View style={styles.container}>
      <Text>Article</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});

export default Article;
