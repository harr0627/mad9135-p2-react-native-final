import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  /* optional colour choices:
#BB2020

*/
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    // alignItems: 'stretch',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  about: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  aboutCompany: {
    textAlign: 'center',
    padding: 5,
  },
  formLabel: {
    paddingBottom: 2,
  },
  formInput: {
    fontSize: 20,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#BB2020',
    marginBottom: 5,
  },
  listItem: {
    borderBottomWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  listItemTitle: {
    fontSize: 24,
    paddingBottom: 7,
    textAlign: 'center',
    color: '#FFF',
  },
  listInstructions: {
    fontSize: 16,
    paddingBottom: 15,
  },
  completedTitle: {
    textAlign: 'center',
    fontSize: 18,
  },
  completedPoints: {
    fontSize: 50,
    textAlign: 'center',
  },
  questTitleDetails: {
    flex: 1,
  },
  questValue: {
    flex: 1,
  },
  completeDetails: {
    fontSize: 100,
    textAlign: 'center',
    fontSize: 80,
    textDecorationLine: 'underline',
    color: '#FFF',
  },
  questValueDetails: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFF',
  },
  questDetailsCard: {
    backgroundColor: '#BB2020',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#BEC7C7',
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  deleteBtn: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
export default styles;
