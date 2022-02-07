import React from 'react';
import {SafeAreaView,Text,View,FlatList,StyleSheet} from 'react-native';
import music_data from './music_data.json';
import SongCard from './component/SongCard';



function App(){

  const renderSong = ({item}) => <SongCard song={item}/>;
  return(
    <SafeAreaView style={styles.container}>
        <FlatList
          keyExtractor={item => item.id}
          data={music_data}
          renderItem={renderSong}
        />
    </SafeAreaView>
  );
}

export default App;
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
});