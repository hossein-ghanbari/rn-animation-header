import React, { FunctionComponent } from "react";
import { Animated, StyleSheet } from "react-native";

interface Props {
  headerComponent?: FunctionComponent;
  bodyComponent?: FunctionComponent;
  headerHeight?: number;
}

const AnimationHeader: React.FC<Props> = ({ headerComponent, bodyComponent, headerHeight }) => {
  // header animation
  let scroll = new Animated.Value(0);
  let headerY: any;
  if (headerHeight) {
    headerY = Animated.multiply(Animated.diffClamp(scroll, 0, headerHeight), -1);
  }
  // end

  const HeaderComponent = headerComponent;
  const BodyComponent = bodyComponent;

  return (
    <>
      {HeaderComponent && headerHeight && (
        <Animated.View style={[styles.header, { transform: [{ translateY: headerY }] }]}>
          <HeaderComponent />
        </Animated.View>
      )}

      {BodyComponent && (
        <Animated.ScrollView
          scrollEventThrottle={1}
          bounces={false}
          overScrollMode="never"
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scroll } } }], { useNativeDriver: true })}
          contentContainerStyle={{
            paddingTop: headerHeight,
          }}
          scrollIndicatorInsets={{
            top: headerHeight,
          }}
        >
          <BodyComponent />
        </Animated.ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    zIndex: 1000,
    elevation: 0.1,
  },
});

export default AnimationHeader;
