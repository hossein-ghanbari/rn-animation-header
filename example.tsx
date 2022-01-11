import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AnimationHeader from "./AnimationHeader";

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTextStyle}>Header</Text>
    </View>
  );
};

const Body: React.FC = () => {
  return (
    <View style={styles.listStyle}>
      <Text style={styles.itemStyle}>Text 1</Text>
      <Text style={styles.itemStyle}>Text 2</Text>
      <Text style={styles.itemStyle}>Text 3</Text>
      <Text style={styles.itemStyle}>Text 4</Text>
      <Text style={styles.itemStyle}>Text 5</Text>
      <Text style={styles.itemStyle}>Text 6</Text>
      <Text style={styles.itemStyle}>Text 7</Text>
      <Text style={styles.itemStyle}>Text 8</Text>
      <Text style={styles.itemStyle}>Text 9</Text>
      <Text style={styles.itemStyle}>Text 10</Text>
      <Text style={styles.itemStyle}>Text 11</Text>
      <Text style={styles.itemStyle}>Text 12</Text>
      <Text style={styles.itemStyle}>Text 13</Text>
      <Text style={styles.itemStyle}>Text 14</Text>
      <Text style={styles.itemStyle}>Text 15</Text>
      <Text style={styles.itemStyle}>Text 16</Text>
      <Text style={styles.itemStyle}>Text 17</Text>
      <Text style={styles.itemStyle}>Text 18</Text>
      <Text style={styles.itemStyle}>Text 19</Text>
      <Text style={styles.itemStyle}>Text 20</Text>
      <Text style={styles.itemStyle}>Text 21</Text>
      <Text style={styles.itemStyle}>Text 22</Text>
      <Text style={styles.itemStyle}>Text 23</Text>
      <Text style={styles.itemStyle}>Text 24</Text>
      <Text style={styles.itemStyle}>Text 25</Text>
      <Text style={styles.itemStyle}>Text 26</Text>
      <Text style={styles.itemStyle}>Text 27</Text>
      <Text style={styles.itemStyle}>Text 28</Text>
      <Text style={styles.itemStyle}>Text 29</Text>
      <Text style={styles.itemStyle}>Text 30</Text>
    </View>
  );
};

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <AnimationHeader headerComponent={Header} headerHeight={65} bodyComponent={Body} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#FA163F",
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
    elevation: 4,
    height: 65,
  },
  headerTextStyle: {
    fontSize: 20,
    color: "#fff",
  },
  listStyle: {
    padding: 14,
    paddingBottom: 0,
  },
  itemStyle: {
    backgroundColor: "#12CAD6bb",
    borderRadius: 6,
    padding: 14,
    marginBottom: 14,
    fontSize: 14,
    color: "#35495E",
  },
});

export default App;
