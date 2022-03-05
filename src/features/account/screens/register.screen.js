import React, { useContext, useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TypographyText as Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackgroud,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  Title,
} from "../components/account.styles";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  return (
    <AccountBackgroud>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry
            secure
            onChangeText={setPassword}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Confirm Password"
            value={passwordConfirm}
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry
            secure
            onChangeText={setPasswordConfirm}
          />
        </Spacer>
        {error && (
          <Spacer size="large">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="email"
              onPress={() => onRegister(email, password, passwordConfirm)}
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton onPress={() => navigation.goBack()}>Back</AuthButton>
      </Spacer>
    </AccountBackgroud>
  );
};
