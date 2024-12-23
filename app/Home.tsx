import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Person from './components/Person';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Hello react native</Text>
      <TextInput style={{ backgroundColor: '#ff00ff', width: 100}}></TextInput>
      <Button title="Click me" onPress={() => alert('Button clicked!')}/>
      <ScrollView>
        {[...Array(10).keys()].map((i) => <Person key={i} name={`Person ${i}`} age={i} />)}
      </ScrollView>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
