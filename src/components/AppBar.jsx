import { Pressable, View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appbar,

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
            <Link to="/signin">
              <Text>Sign in</Text>
            </Link>
        </View>;
};

export default AppBar;