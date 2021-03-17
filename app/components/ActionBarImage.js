import React from "react";
import { Icon } from "react-native-elements";
import GLOBALS from "../utils/global";

const ActionBarImage = () => {
    return (
        <Icon reverse name="play-circle" type="font-awesome" color={GLOBALS.BG_COLOR.BRAND} 
        />
    );

};

export default ActionBarImage;