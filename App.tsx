import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native</Text>
      <StatusBar style="auto" backgroundColor="lightblue"/>
      <Button title='send 1' />
      <Button title='send 2' />
      <Button title='send 3' />
    </View>
  );
}

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text style={styles.button}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#A12',
    fontSize: 22,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#Bd1',
    width: 50,
    height: 20,
    marginBottom: 10,
  }
});
