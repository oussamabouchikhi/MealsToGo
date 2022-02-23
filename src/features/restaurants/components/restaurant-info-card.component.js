import React from "react";
import { Image } from "react-native";
import { SvgXml } from "react-native-svg";

import {
  Address,
  Info,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  Section,
  SectionEnd,
} from "./restaurant-info-card.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TypographyText as Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_star, i) => (
              <SvgXml key={i} width={20} height={20} xml={star} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily ? (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            ) : null}
            <Spacer position="left" size="large">
              {isOpenNow ? <SvgXml xml={open} width={20} height={20} /> : null}
            </Spacer>
            <Spacer position="left" size="large">
              <Image style={{ width: 20, height: 20 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
