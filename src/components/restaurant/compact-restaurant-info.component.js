import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { TypographyText as Text } from "../typography/text.component";
import { Platform } from "react-native";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

// const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isWebView }) => {
  const Image = isWebView ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variant="caption">{restaurant.name}</Text>
    </Item>
  );
};
