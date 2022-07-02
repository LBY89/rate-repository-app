import { Platform } from 'react-native'

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textDarkBackground: 'white',
    language: '#f5f9fa',
    primary: '#0366d6',
    appbar: '#78cfa5',
    description: '#6681e3',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '500',
    bold: '700',
  },
  backgroundColors: {
    appBar: '#24292e',
    primary: '#e5e5e5',
  },
  images: {
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 6,
      marginHorizontal: 10,
    },
  },
  buttons: {
    largeButton: {
      padding: 20,
      borderRadius: 6,
      backgroundColor: 'blue',
      marginHorizontal: 8,
    },
    smallButton: {
      paddingHorizontal: 5,
      marginTop: 5,
      marginBottom: 10,
      alignSelf: 'flex-start',
      backgroundColor: 'blue',
      borderRadius: 5,
    },
  },
  itemSeparator: {
    marginBottom: 8,
  },
  container: {
    card: {
      paddingTop: 8,
      paddingBottom: 12,
      height: 150,
      backgroundColor: '#ddebf0',
    },
    row: {
      flexDirection: 'row',
    },
    header: {
      justifyContent: 'center',
      flexShrink: 1,
    },
    itemSeparator: {
      paddingVertical: 4,
      color: "#f5f9fa",
    },
  },
  repocount: {
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    stat: {
      flexShrink: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: 10,
      final: {
        marginBottom: 10,
      }
    },
    
  },
}

export default theme
