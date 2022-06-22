import { Pressable, View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,

    justifyContent:'center',
    paddingBottom: 30,
    // ...
  },
  head: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20
  }

  // ...
});
const onPressFunction =()=> {
    return null
}
const AppBar = () => {
  return <View style={styles.container}>
            <Pressable onPress={() => onPressFunction}>
                <Text style={styles.head}>Repositories</Text>
            </Pressable>
        </View>;
};

export default AppBar;