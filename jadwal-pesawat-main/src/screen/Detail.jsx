import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { JADWAL, MASKAPAI, BANDARA } from '../utils/data'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome5';


const filtered_jadwal = (departure, arrival) => {
  const data = JADWAL.filter(function(item){
    return item.bandara_kode_keberangkatan == departure && item.bandara_kode_tujuan == arrival;
 }).map(function({id, bandara_kode_keberangkatan, bandara_kode_tujuan, maskapai_id}){
     return {id, bandara_kode_keberangkatan, bandara_kode_tujuan, maskapai_id};
 });
  return data;
}


const Item = ({ departure, arrival, maskapai_id, date }) => (
  <View style={styles.item}>
    <View style={styles.row}>
        <Text style={styles.col}>{BANDARA[departure].bandara_nama}</Text>
        <Text style={styles.col}> - </Text>
        <Text style={styles.col}>{BANDARA[arrival].bandara_nama}</Text>
        
    </View>
    <View style={styles.row}>
    <FontAwesome name="plane" size={20} color='#88b454' style={{marginRight:5}}/>
      <Text style={styles.col5}>
        {MASKAPAI[maskapai_id].maskapai_nama}
        </Text>
      <Text style={styles.col5}>{date}</Text>
    </View>
  </View>
  
);


const Detail = ({navigation, route}) => {
  const {departure, arrival, date} = route.params;

  const renderItem = ({ item }) => (
    <Item departure={item.bandara_kode_keberangkatan} arrival={item.bandara_kode_tujuan} maskapai_id={item.maskapai_id} date={date}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.date}>
        {date}
      </Text>
      <FlatList
        data={filtered_jadwal(departure, arrival)}
        renderItem={renderItem}
        // keyExtractor={item => item.jadwal_id}
      />
      <View style={styles.copyright}>
          <Text>Copyright Sherin Mediana Putri 119140050</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#D1D1D1',
    posiion: 'relative',
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  col: {
    width: '25%',
    alignItems: 'center',
    textAlign: 'center',
  },
  col5:{
    width: '40%',
    fontWeight: 'bold',
  },
  date: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    width: '100%',
    backgroundColor: '#88b454',
  },
  copyright: {
    alignItems: 'center',
  },
  copyright: {
    marginBottom: 20,
    alignItems: 'center',
  }
});

export default Detail;

console.log(filtered_jadwal("SKH", "RDN"));
console.log(BANDARA[JADWAL[0].bandara_kode_keberangkatan].bandara_nama);
