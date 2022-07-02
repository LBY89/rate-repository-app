import {View, Image } from 'react-native';
import theme from '../../theme';
import ItemHeader from './ItemHeader';
import RepoCount from './RepoCount';


const RepositoryItem =({item})=> {
    
    return(
        <View style={theme.container.card}>
             <View style={{ ...theme.container.row }}>
                <Image
                    source={{ uri: item.ownerAvatarUrl }}
                    style={theme.images.profileImage}
                />
                <ItemHeader
                    fullName={item.fullName}
                    description={item.description}
                    language={item.language}
                />
                </View>
                <RepoCount
                    stargazersCount={item.stargazersCount}
                    forksCount={item.forksCount}
                    reviewCount={item.reviewCount}
                    ratingAverage={item.ratingAverage}
                />
        </View>
           
    )
};

export default RepositoryItem;