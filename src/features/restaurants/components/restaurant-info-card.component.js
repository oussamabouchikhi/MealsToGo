import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
  padding: 20px;
`;

const Title = styled.Text`
  padding: 16px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
