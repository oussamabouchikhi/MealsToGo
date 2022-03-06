import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { Spacer } from "../../../components/spacer/spacer.component";
import { TypographyText as Text } from "../../../components/typography/text.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <Text variant="caption">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
