import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MessengerApp from './MidAct1/MessengerApp';
import CommentApp from './MidAct1/CommentApp';

export default function App() {
  return (
    <View style={styles.container}>

  <MessengerApp/>
  <CommentApp/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});