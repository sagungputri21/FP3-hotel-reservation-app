import React from "react";
import { View, Text } from "react-native";
import { Table, Row } from "react-native-table-component";
import { StyleSheet, ScrollView } from 'react-native';
import { DataTable } from "react-native-paper";


const BookingHistoryPage = () => {

    const listIdName = (localStorage.getItem('hotelItem'))
    console.log("ini data hotel di history", listIdName)

    const arrayOfDataHotel = listIdName !== null? JSON.parse(listIdName) : [];
    // const arrayOfDataTotal = listTotal;
    return(
        
        <View style={styles.container}>
            <Text style={styles.text}>Hotel History</Text>
            <ScrollView horizontal={true}>
                <DataTable style={styles.container}>
                    <DataTable.Header style={styles.tableHeader}>
                        <DataTable.Title>Hotel</DataTable.Title>
                        <DataTable.Title>Price</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row style={styles.tableHeader}>
                        <DataTable.Cell>Hotel Roma Prague</DataTable.Cell>
                        <DataTable.Cell>$200</DataTable.Cell>
                    </DataTable.Row>
                
                </DataTable>
            </ScrollView>
        </View>
    )
}

export default BookingHistoryPage


const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 16, 
        paddingTop: 20, 
        backgroundColor: '#ffffff' 
    },
    
    tableHeader: {
      backgroundColor: '#DCDCDC',
    },
    head: { 
        height: 50, 
        backgroundColor: '#6F7BD9' 
    },
    text: { 
        textAlign: 'center', 
        fontWeight: '200',
        fontSize:  '300'
    },
    dataWrapper: { 
        marginTop: -1 
    },
    row: { 
        height: 40, 
        backgroundColor: '#F7F8FA' 
      }
  });