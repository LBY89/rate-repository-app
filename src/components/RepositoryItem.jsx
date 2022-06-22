import {View, Image, StyleSheet, } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    view :{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        
    },
    container: {
        marginLeft: 10,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    
    },
    image: {
      width: 60,
      height: 60,
      marginRight: 10,
      display: 'flex'
      
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
    },
  });

const RepositoryItem =({item})=> {
    
    return(
        <View style={styles.view}>
            <Text style={styles.container}>
                <Image
                    style={styles.image}
                    source={{
                    uri: 'https://avatars.githubusercontent.com/u/4060187?v=4',
                    }}
                />
                <Text style={styles.description}>
                    <Text fontWeight="bold" fontSize={"subheading"}>
                        {item.fullName}
                    </Text>
                    <Text>{item.description}</Text>
                </Text>
            </Text>
            <Text>Lauguage: {item.language}</Text>
            <Text>
                <Text>Stars: {item.stargazersCount}</Text>
                <Text>Fork: {item.forksCount}</Text>
                <Text>Reviews: {item.reviewCount}</Text>
                <Text color="textSecondary">Rating: {item.ratingAverage}</Text>
            </Text>
        </View>
           
    )
};

export default RepositoryItem;