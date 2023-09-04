
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function flex() {
  const [session, setSession] = useState(0);
  const [num, setnum] = useState(0);

  const change = () => {
    setSession(session + 1);
    setnum(num + 5);
  };

  const ref = () => {
    setSession(0);
    setnum(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.row1}>
          <View style={styles.rowcon1}>
            <Text>1</Text>
          </View>
          <View style={styles.rowcon2}>
            <Text>2</Text>
          </View>
          <View style={styles.rowcon3}>
            <Text>3</Text>
          </View>
        </View>
        <View style={styles.row3}>
          <View style={styles.rowcon4}>
            <Text>4</Text>
          </View>
        </View>
        <View style={styles.row4}>
          <View style={styles.rowcon5}>
            <Text>5</Text>
          </View>
        </View>
      </View>
      <View style={styles.container1}>
        <View style={styles.row2}>
          <View style={styles.rowcon6}>
            <Text>6</Text>
          </View>
          <View style={styles.rowcon7}>
            <View style={styles.row8}><View style={styles.rowcon4}>
            <Text>7</Text>
          </View></View>
            <View style={styles.row9}><View style={styles.rowcon5}>
            <Text>5</Text>
          </View></View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  container1: {
    flex: 2,

    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  row1: {
    flex: 1,
    flexDirection: "row",
  },

  row3: {
    flex: 1,
    flexDirection: "row",
  },

  row4: {
    flex: 1,
    flexDirection: "row",
  },

  row2: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "blue",

    justifyContent: "center",
  },
  row8: {
    flex: 1,
    flexDirection: "row",
    backgroundColor:'black',
  },

  row9: {
    flex: 1,
    flexDirection: "row",
    backgroundColor:'white',
  },
  rowcon1: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },

  rowcon2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },

  rowcon3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },

  rowcon4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
  },

  rowcon5: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },

  rowcon6: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "wheat",
  },

  rowcon7: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
  },
});
