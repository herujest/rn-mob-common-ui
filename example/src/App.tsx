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
  type FontConfig,
} from '@herujest/rn-mob-common-ui';
import { StyleSheet, View } from 'react-native';
import Icon from './assets/fonts/Icon';

const result = multiply(3, 7);

const myCustomFonts: FontConfig = {
  bold: 'Montserrat-Bold',
  semiBold: 'Montserrat-SemiBold',
  regular: 'Montserrat-Regular',
};

export default function App() {
  return (
    <ThemeProvider customFonts={myCustomFonts}>
      <Container style={CommonStyles.container}>
        <Content>
          <View style={styles.container}>
            <Text variant="headline1">Result: {result}</Text>
            <Text variant="headline1">Result: {result}</Text>
          </View>
          <Icon name="mobile" size={15} />
          <Buttons
            type="primary"
            title="Primary Button"
            onPress={() => {
              console.log('Primary Button Pressed');
            }}
          />
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
