import { View } from 'react-native'
import theme from '../../theme'
import Text from '../Text'

const ItemHeader = ({ fullName, description, language }) => {
  return (
    <View style={theme.container.header}>
      <Text
        fontWeight='bold'
        fontSize='subheading'
      >
        {fullName}
      </Text>
      <Text color="textSecondary" >{description}</Text>
      <Text
        color='language'
        style={{
          ...theme.container.itemSeparator,
          ...theme.buttons.smallButton,
        }}
      >
        {language}
      </Text>
    </View>
  )
}

export default ItemHeader