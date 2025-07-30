import { StyleSheet } from "react-native";

const navB = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5E4",
    display: 'flex',
    flexDirection: 'row',
    height:30,
    width: '100%',
  },
  logoContainer:
  {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    marginLeft: 20,
    marginTop: -10,
  },
  logoText: {
    fontSize: 50,
    fontFamily:'Higuen Serfif',
    letterSpacing: -3,
    color:'#e26d7bff'
  },
  logoSubText: {
    fontSize: 10,   
    letterSpacing:12,
    marginTop: -11,
    marginLeft: 1,
},

//for home, about us, products
    container2: {
    width: '50%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 40,
},
    subText:{
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    color:'#e26d7bff'
    }

//for account, heart, cart
    ,container3: {
    width: '25%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 25,
    marginLeft: 300,
    }
});


export default navB;