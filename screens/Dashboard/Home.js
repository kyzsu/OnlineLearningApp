import React from "react";
import { View, Text, ImageBackground, Image, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import {
  IconButton,
  TextButton,
  VerticalCourseCard,
  LineDivider,
} from "../../components";
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  images,
  dummyData,
} from "../../constants";

const Home = () => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          marginBottom: 10,
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
        }}
      >
        {/* Greetings */}
        <View style={{ flex: 1 }}>
          <Text style={{ ...FONTS.h2 }}>Hello, William</Text>
          <Text style={{ color: COLORS.gray50, ...FONTS.body3 }}>
            Friday, 12th November 2021
          </Text>
        </View>

        {/* Notification */}
        <IconButton
          icon={icons.notification}
          iconStyle={{
            tintColor: COLORS.black,
          }}
        />
      </View>
    );
  }

  function renderStartLearning() {
    return (
      <ImageBackground
        source={images.featured_bg_image}
        style={{
          alignItems: "flex-start",
          marginTop: 15,
          marginHorizontal: SIZES.padding,
          padding: 15,
        }}
        imageStyle={{
          borderRadius: SIZES.radius,
        }}
      >
        {/* Info */}
        <View>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body2,
            }}
          >
            HOW TO
          </Text>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h2,
            }}
          >
            Make your brand more visible with our checklist
          </Text>
          <Text
            style={{
              marginTop: SIZES.radius,
              color: COLORS.white,
              ...FONTS.body4,
            }}
          >
            By Immanuel Williams
          </Text>
        </View>

        {/* Image */}
        <Image
          source={images.start_learning}
          style={{ width: "100%", height: 110, marginTop: SIZES.padding }}
        />

        {/* Button */}
        <TextButton
          label="Start Learning"
          contentContainerStyle={{
            height: 40,
            paddingHorizontal: SIZES.padding,
            borderRadius: 20,
            backgroundColor: COLORS.white,
          }}
          labelStyle={{
            color: COLORS.black,
          }}
        />
      </ImageBackground>
    );
  }

  function renderCourses() {
    return (
      <FlatList
        horizontal
        data={dummyData.courses_list_1}
        listKey="Courses"
        keyExtractor={(item) => `Courses-${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: SIZES.padding,
        }}
        renderItem={({ item, index }) => (
          <VerticalCourseCard
            containerStyle={{
              marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
              marginRight:
                index === dummyData.courses_list_1.length - 1
                  ? SIZES.padding
                  : 0,
            }}
            course={item}
          />
        )}
      />
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      {renderHeader()}

      {/* Content */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 160,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Start Learning */}
        {renderStartLearning()}

        {/* Courses */}
        {renderCourses()}

        <LineDivider
          lineStyle={{
            marginVertical: SIZES.padding,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
