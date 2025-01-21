import {
  Buttons,
  Container,
  Content,
  multiply,
  Text,
  ThemeProvider,
} from '@herujest/rn-mob-common-ui';
import { StyleSheet, View } from 'react-native';

const result = multiply(3, 7);

export default function App() {
  return (
    <ThemeProvider>
      <Container>
        <Content>
          <View style={styles.container}>
            <Text>Result: {result}</Text>
          </View>
          <Buttons type="primary" title="Primary Button" />
          <Buttons type="primaryInactive" title="Primary Inactive Button" />
          <Buttons type="secondary" title="Secondary Button" />
          <Buttons type="secondaryInactive" title="Secondary Inactive Button" />
        </Content>
      </Container>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
