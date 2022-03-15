import React, { useRef, useState } from 'react';
import { SafeAreaView, TextInput, View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { JADWAL, MASKAPAI, BANDARA } from '../utils/data'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const Home = ({navigation}) => {
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [date, setDate] = useState('');

    const departureRef = useRef('');
    const arrivalRef = useRef('');

    const onSubmit = () => {
        console.log(date);
        let newDeparture;
        for(const [key, value] of Object.entries(BANDARA)){
            if(value.bandara_nama === departure){
                newDeparture = (key);
                break;
            }
        }

        let newArrival;
        for(const [key, value] of Object.entries(BANDARA)){
            if(value.bandara_nama === arrival){
                newArrival = (key);
                break;
            }
        }
        
        console.log(newDeparture);
        navigation.navigate('Detail', {
            departure: newDeparture,
            arrival: newArrival,
            date: date,
        });
    }

    return (
        <SafeAreaView style={{ flex:1}}>
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.formContainer}>
                        <View style={styles.fieldContainer}>
                            <Input 
                                type="text"
                                ref={arrivalRef}
                                value={departure}
                                onChange={e => setDeparture(e.target.value)}
                                placeholder="Lokasi Keberangkatan"
                                label="Lokasi Keberangkatan"
                                autoCompleteType={undefined}
                                leftIcon={<FontAwesome name="plane-departure" size={20} color='#88b454' />}
                                leftIconContainerStyle={{
                                    padding: 10,
                                }}
                            />
                        </View>
                        <View style={styles.fieldContainer}>
                            <Input 
                                ref={arrivalRef} 
                                value={arrival}
                                onChange={e => setArrival(e.target.value)}
                                placeholder="Lokasi Tujuan"
                                label="Lokasi Tujuan"
                                autoCompleteType={undefined}
                                leftIcon={<FontAwesome name="plane-arrival" size={20} color='#88b454' />}
                                leftIconContainerStyle={{
                                    padding: 10,
                                }}
                            />
                        </View>
                        <View style={styles.fieldContainer}>
                            <Input
                                type="text"
                                value={date}
                                onChangeText={setDate}
                                autoCompleteType={undefined}
                                placeholder="Masukan Tanggal Keberangkatan"
                                label="Tanggal Keberangkatan"
                                leftIcon={<FontAwesome name="calendar-alt" size={20} color='#88b454' />}
                                leftIconContainerStyle={{
                                    padding: 10,
                                }}
                            />
                        </View>
                        <View style={styles.fieldContainer}>
                            <Button title="Cari" style={styles.button} onPress={onSubmit}/>
                        </View>
                        
                    </View>
                </View>
                
            </KeyboardAvoidingView>
            <View style={styles.copyright}>
                    <Text>Copyright Sherin Mediana Putri 119140050</Text>
                </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#88b454',
        // height: '80%',
    },
    formContainer: {
        backgroundColor: 'white',
        margin: 20,
        padding: 10,
        paddingTop: 30,
        borderRadius: 15,
        height: '100%',
    },
    fieldContainer: {
        marginHorizontal: 10,
        marginVertical: 10,
        paddingTop: 2,
    },
    button: {
        backgroundColor: 'orange',
        borderRadius: 15,
    },
    copyright: {
        marginTop: 100,
        alignItems: 'center',
    }
})

export default Home;


// const data = BANDARA.filter(el => Object.values(el)[0].bandara_nama === 'Soekarno Hatta');
        

// console.log(Object.keys(BANDARA));
