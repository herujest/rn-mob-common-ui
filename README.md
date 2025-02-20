# **rn-mob-common-ui**

_A basic UI design system for mobile applications._

# **1. Installation**

To install the package, use one of the following commands:

```sh
npm install @herujest/rn-mob-common-ui
# or
yarn add @herujest/rn-mob-common-ui
```

---

# **2. Getting Started**

### **2.1 Setting Up the ThemeProvider**

Wrap your application (or a specific section) with the `ThemeProvider` component. This ensures theme data are available to all child components.

#### **Example:**

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@herujest/rn-mob-common-ui';
import App from './App';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
```

---

# **3. Components**

## **3.1 Buttons**

A customizable button component.

```tsx
import { Buttons } from 'rn-mob-common-ui';

<Buttons
  type="primary"
  title="Click Me"
  onPress={() => console.log('Button Pressed!')}
/>;
```

---

## **3.2 Icon Component**

Render SVG icons easily.

```tsx
import { Icon } from 'rn-mob-common-ui';

<Icon name="settings" size={24} color="#000" />;
```

### **Using Custom Icons**

#### **Step 1: Generate JSON with IcoMoon**

- Use [IcoMoon App](https://icomoon.io/app) to generate a JSON file.
- Upload your SVGs and download the JSON.

#### **Step 2: Configure `package.json`**

```json
"@herujest/rn-mob-common-ui": {
  "icon-json-path": "path-to-your-json/customicon.json",
  "output-types-path": "desired-path-to-your-json/IconTypes.ts"
}
```

#### **Step 3: Generate Icon Types**

```sh
yarn generate-icon-types
```

---

## **3.3 Text Component**

Styled text component with multiple variants.

```tsx
import { Text } from 'rn-mob-common-ui';

<Text variant="headline1">Hello World!</Text>;
```

### **Using Custom Fonts**

You can use your own icon vector by following this

#### **Step 1: Add Custom Fonts**

Place font files in `assets/fonts/`:

```
📂 your-project
 ┣ 📂 assets
 ┃ ┗ 📂 fonts
 ┃   ┣ 🏷 CustomFont-Regular.ttf
 ┃   ┣ 🏷 CustomFont-Bold.ttf
 ┃   ┗ 🏷 CustomFont-Italic.ttf
```

#### **Step 2: Link Fonts in React Native**

Modify `react-native.config.js`:

```js
module.exports = {
  assets: ['./assets/fonts/'],
};
```

Run the following command:

```sh
npx react-native-asset
```

#### **Step 3: Apply Custom Fonts in `Text` Component**

```tsx
import { ThemeProvider, type FontConfig } from '@herujest/rn-mob-common-ui';

const customTheme: FontConfig = {
  bold: 'CustomFont-Bold',
  semibold: 'CustomFont-Regular',
  regular: 'CustomFont-Bold',
};

const App = () => (
  <ThemeProvider theme={customTheme}>
    <Text variant="headline1">Hello, Custom Font!</Text>
  </ThemeProvider>
);

export default App;
```

#### **Step 4: Use Custom Fonts**

```tsx
import { Text } from '@herujest/rn-mob-common-ui';

const App = () => <Text variant="headline1">Hello, Custom Font!</Text>;

export default App;
```

---

## **3.4 Container Component**

A base component that wraps content inside a `SafeAreaView`, ensuring proper layout and spacing.

```tsx
import { Container } from 'rn-mob-common-ui';

<Container>
  <Text>Safe and sound!</Text>
</Container>;
```

---

## **3.5 Content Component**

A scrollable content area that ensures the keyboard does not overlap input fields.

```tsx
import { Content } from 'rn-mob-common-ui';

<Content>
  <Text>Scrollable Content Here</Text>
</Content>;
```

---

## **3.6 InputField Component**

A labeled input field with validation styles.

```tsx
import { InputField } from 'rn-mob-common-ui';

<InputField
  label="Username"
  value={username}
  onChangeText={setUsername}
  error={!!error}
  placeholder="Enter your username"
/>;
```

---

## **3.7 Modal & Popup Components**

Reusable modal and popup components.

```tsx
import { Modal, Popups } from 'rn-mob-common-ui';

// Example usage
```

---

## **3.8 EmptyView Component**

Displays empty states with an image and description.

```tsx
import { EmptyView } from 'rn-mob-common-ui';

<EmptyView
  description="No Data Found"
  imageSource={require('./path/to/image.png')}
/>;
```

---

## **3.9 Theme Context**

Use the theme context to access and switch between light and dark themes dynamically.

```tsx
import { ThemeProvider, useTheme } from 'rn-mob-common-ui';

const App = () => {
  const { toggleTheme, colors } = useTheme();

  return (
    <ThemeProvider>
      <Text style={{ color: colors.basic1 }}>Theme-based Text</Text>
    </ThemeProvider>
  );
};
```

---

# **4. Contributing**

To contribute, please check the [Contributing Guide](CONTRIBUTING.md) for setup instructions and best practices.

---

# **5. License**

This project is licensed under the MIT License.
