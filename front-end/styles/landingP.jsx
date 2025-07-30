import { StyleSheet } from "react-native";

const landingP = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    backgroundColor: "#f8e1e4ff",
    paddingTop: 20,
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'space-evenly',
    flexDirection:'row'
  },
  glow:{
    shadowColor: '#daf2f3ff', 
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 55, 
    shadowRadius: 20,
  },
  headline:{
    fontSize:100,
    fontFamily:'Higuen Serif',
    color:'#e26d7bff',
    marginTop: -42,
  },
  subText:{
    color:'#f799a4ff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 6,
    marginTop: -10,
  },
  buttons:
  {
    width:150,
    height:50,
    marginTop: 20,
    backgroundColor: '#f799a4ff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 17, 
    fontWeight: 'bold',
    letterSpacing: 3
  }, 

  //for second divider
  container2:{
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#FFF5E4',
    padding: 20,
  },
  gridContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 50,
  },
  gridImg:{
    width: 400,
    height: 300,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  }


});


export default landingP;