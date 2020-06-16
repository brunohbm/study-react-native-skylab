import React, {useEffect, useState, useContext} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

import ArticleContext from '../contexts/articleContext';

const Main = () => {
  const context = useContext(ArticleContext);
  const [articles, setArticles] = useState([]);

  const loadMore = async () => {
    setArticles([
      ...articles,
      ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((id) => ({
        id: id,
        title: 'json-server',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      })),
    ]);
  };

  useEffect(() => {
    loadMore();
  }, []);

  const renderArticles = ({item: article}) => (
    <View style={styles.textsContainer}>
      <TouchableOpacity
        onPress={() => {
          context.navigation.navigate('Article');
        }}
        style={styles.textButton}>
        <Text style={styles.title}>{article.title || '---'}</Text>
        <Text style={styles.description}>{article.description || '---'}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        renderItem={renderArticles}
        keyExtractor={(item) => item.title}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  list: {
    padding: 20,
  },
  textsContainer: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#999',
    marginTop: 5,
    lineHeight: 24,
  },
});

export default Main;
