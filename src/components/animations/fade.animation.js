import React from "react";
import { Animated } from "react-native";

export const FadeInView = ({ duration= 1500, ...props }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration,
      }
    ).start();
  }, [fadeAnim, duration])

  return (
    <Animated.View 
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
}
}
