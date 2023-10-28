import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react'






const LoginStructure = (props) => {
    

    return (
      
    <View style={styles.container}>
    <View style={styles.container}>

      <View style={styles.row3}>
        <View style={styles.rowcon4}>
          <Image source={require('../../assets/loginlogo.png')} style={{ height: 178, width: 178, }}></Image>
        </View>
      </View>
      <View style={styles.row4}>
        <View style={styles.rowcon5}>
          <View style={styles.row4}>
            <View style={styles.rowcon9}>
              <View style={styles.row4}>
                <View style={styles.rowcon8}>
                 




                {props.children}

               
                </View>
              </View>
            </View>
          </View>






          <View style={styles.rowimage}>
            <View style={styles.rowcon4}>
              <Image source={require('../../assets/loginbottumimage.png')} style={{ height: 178, width: '100%', marginBottom: -150, }}></Image>
            </View>
          </View>
        </View>
      </View>

    </View>
  </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    
        backgroundColor: "#BD1616",
        alignItems: "center",
        justifyContent: "flex-start",
      },
    
      row3: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#BD1616",
    
    
      },
    
      row4: {
        backgroundColor: "#fff",
        flex: 3,
        flexDirection: "row",
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    
      },
    
      rowimage: {
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
    
        zIndex: -1,
    
    
      },
    
      rowbut: {
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    
    
    
    
      },
    
      rowcon4: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    
      },
    
      rowcon9: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
    
      },
    
      rowcon8: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginTop: 50,
    
      },
    
      rowcon5: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    
    
      },
  
     
      buttonelement: {
    
        alignItems: "center",
        width: '100%',
        zIndex: 10,
      },

    
})

export default LoginStructure;