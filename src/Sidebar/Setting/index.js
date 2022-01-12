import React, {useRef} from "react";
import { Animated } from "react-native";

const SettingScreen = () => {
    const animation = useRef(new Animated.Value(1)).current;

    return (
        <Animated.Image></Animated.Image>
    )
}

export default SettingScreen;