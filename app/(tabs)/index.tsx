import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

interface Car {
  brand: string;
  model: string;
  year: number;
  color: string;
  imageUrl: string;
}

const cars: Car[] = [
  {
    brand: "VW",
    model: "Jetta",
    year: 2018,
    color: "Branco",
    imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOMa968-JMNbsU17aAAdoUI0SBXx7HfTpRGMLZ6Z-WrDVmVBwc5G1k2KI7ceA7EMRjJF7Ml23qx3qUqcRdVl26AUrCDN1EicOk1dVcXXkAX8QuzIZQj1lrmKB_PmMmtqJvR1VmLtevuyyF/s1600/Volkswagen-Golf-Sedan-Lamando+(7).jpg", // Substitua pelo URL correto
  },
  {
    brand: "Ford",
    model: "Maverick",
    year: 1979,
    color: "azul",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8b/1972-ford-maverick-moore.jpg", // Substitua pelo URL correto
  },
];

const CarCard: React.FC<{ car: Car }> = ({ car }) => (
  <View style={styles.card}>
    <Image source={{ uri: car.imageUrl }} style={styles.image} />
    <Text style={styles.title}>{`${car.brand} - ${car.model}`}</Text>
    <Text>{`Ano: ${car.year}`}</Text>
    <Text>{`Cor: ${car.color}`}</Text>
  </View>
);

const CarList: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.model}
        renderItem={({ item }) => <CarCard car={item} />}
      />
    </View>
  );
};

export default CarList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
});
