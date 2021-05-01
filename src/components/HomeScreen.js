import React from 'react';
import {SafeAreaView, Text, FlatList, View, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';

let Customers = [
    {
        id: 1,
        name: 'Mohan',
        salary: 40000,  
    },
    {
        id: 2,
        name: 'Kogila',
        salary: 50000,  
    },
    {
        id: 3,
        name: 'Vinay',
        salary: 60000,  
    },
    {
        id: 4,
        name: 'Mohisha',
        salary: 70000,  
    },
];

const Item = ({id, name, salary}) => {
    const handlePress = (id) => {
        const customer = Customers.find((cust) => {
            return cust.id === id;
        });
    };

    const deleteCustomer = (id) => {
        const customer = Customers.find((cust) => {
            return cust.id === id;
        });

        Customers = Customers.filter((cust) => {
            return cust.id !== customer.id;
        });

        navigation.reset({
            index: 0,
            routes: [{name: 'Home'}]
        });
    };

    return(
        <TouchableOpacity 
            onPress={() => handlePress(id)} 
            style={styles.listItem}
            onLongPress={() => deleteCustomer(id)}
        >
            <Text style={styles.listName}>{name}</Text>
            <Text style={styles.listSalary}>{salary}</Text>
        </TouchableOpacity>
    );
};

const HomeScreen = ({navigation}) => {
    return(
        <SafeAreaView style={styles.header}>
            <Text style={styles.headerText}>Welcome to App!</Text>
            <FlatList
                data={Customers}
                //keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Item id={item.id} name={item.name} salary={item.salary}/>
                )}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;