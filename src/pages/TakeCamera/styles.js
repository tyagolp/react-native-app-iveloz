import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 23,
    paddingHorizontal: 25,
    alignSelf: 'center',
  },
  close: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  nothing: {
    flex: 0,
    backgroundColor: '#000',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
});

export default styles;
