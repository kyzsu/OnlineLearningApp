import React from "react";
import { TouchableOpacity, Text, ImageBackground } from "react-native";

import { COLORS, FONTS, SIZES } from "../constants";

const CategoryCard = ({ category, containerStyle }) => {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={category?.thumbnail}
        resizeMode="cover"
        style={{
          height: 150,
          width: 200,
          paddingVertical: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          justifyContent: "flex-end",
          ...containerStyle,
        }}
      ></ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;
