import {
  Buttons,
  Container,
  Content,
  multiply,
  Text,
  ThemeProvider,
  Gutters,
  Metrics,
  CommonStyles,
  Icon,
} from '@herujest/rn-mob-common-ui';
import { StyleSheet, View } from 'react-native';

const result = multiply(3, 7);

export default function App() {
  return (
    <ThemeProvider>
      <Container style={CommonStyles.container}>
        <Content>
          <View style={styles.container}>
            <Text>Result: {result}</Text>
          </View>
          <Icon name="" />
          <Buttons type="primary" title="Primary Button" />
          <Buttons type="primaryInactive" title="Primary Inactive Button" />
          <Buttons type="secondary" title="Secondary Button" />
          <Buttons type="secondaryInactive" title="Secondary Inactive Button" />
          <Text style={{ marginTop: Gutters.base }}>
            Gutters Margin top Base:
          </Text>
          <Text style={{ marginTop: Gutters.element.small }}>
            Gutters Margin top element small
          </Text>
          <Text style={{ marginTop: Gutters.element.large }}>
            Gutters Margin top element large
          </Text>
          <Text>Metrics screen width: {Metrics.screenWidth}</Text>
          <Text>Metrics screen height: {Metrics.screenHeight}</Text>
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
