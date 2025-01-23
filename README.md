---
# rn-mob-common-ui

Basic UI design system for basic mobile needs.

## Installation

```sh
npm install @herujest/rn-mob-common-ui

or

yarn add @herujest/rn-mob-common-ui
```

## Usage

initial usage:
call this in your initial App file to wrap src router


<ThemeProvider>
  ...
  <AppNavigator>
  ...
</ThemeProvider>

Below are examples of how to use the components from the `rn-mob-common-ui` library.

### Buttons

A customizable button component.

```tsx
import { Buttons } from 'rn-mob-common-ui';

<Buttons
  type="primary"
  title="Click Me"
  onPress={() => console.log("Button Pressed!")}
/>
```

### Icon

Render SVG icons easily.

```tsx
import { Icon } from 'rn-mob-common-ui';

<Icon name="settings" size={24} color="#000" />
```

### Text

Styled text component with multiple variants for different textual representations.

```tsx
import { Text } from 'rn-mob-common-ui';

<Text variant="headline1">Hello World!</Text>
```

### Container

A base container component that uses a `SafeAreaView`.

```tsx
import { Container } from 'rn-mob-common-ui';

<Container>
  <Text>Safe and sound!</Text>
</Container>
```

### Content

Scrollable content area that ensures the keyboard doesn't overlap inputs.

```tsx
import { Content } from 'rn-mob-common-ui';

<Content>
  <Text>Scrollable Content Here</Text>
</Content>
```

### InputField

A labeled input field with validation styles.

```tsx
import { InputField } from 'rn-mob-common-ui';

<InputField
  label="Username"
  value={username}
  onChangeText={setUsername}
  error={!!error}
  placeholder="Enter your username"
/>
```

### Modal & Popups

Reusable modal and popup components for various modals.

```tsx
import { Modal, Popups } from 'rn-mob-common-ui';

// Use Popups with ref to control modal visibility
```

### EmptyView

A component to display empty states with an image and description.

```tsx
import { EmptyView } from 'rn-mob-common-ui';

<EmptyView description="No Data Found" imageSource={require('./path/to/image.png')} />
```

### Theme Context

Use theme context to access and switch between light and dark themes.

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

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---
