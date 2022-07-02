import { View } from 'react-native'
import theme from '../../theme'
import Text from '../Text'
import { nFormatter } from '../../../untils'

const RepoCount = ({ stargazersCount, forksCount, reviewCount, ratingAverage }) => {
  return (
    // to use View as parent div, Text cannot wrap another Text.
    <View style={theme.repocount.container} >
        <View style={theme.repocount.stat}>
            <Text style={theme.repocount.stat.final}>{ nFormatter(stargazersCount)}</Text>
            <Text color="textSecondary">Stars</Text>
        </View>
        <View style={theme.repocount.stat}>
            <Text style={theme.repocount.stat.final}>{nFormatter(forksCount)}</Text>
            <Text color="textSecondary">Fork</Text>
        </View>
        <View style={theme.repocount.stat}>
            <Text>{nFormatter(reviewCount)}</Text>
            <Text color="textSecondary">Reviews</Text>
        </View>
        <View style={theme.repocount.stat}>
            <Text >{nFormatter(ratingAverage)}</Text>
            <Text color="textSecondary">Rating</Text>
        </View>
    </View> 
  )
}

export default RepoCount