import './App.css';
import { DSProvider, useDSContext } from './provider';
import { theme } from './themes/theme-default';
import { Button } from './components/button/button';
import { Flyout } from './components/flyout/flyout';
import { ComponentSizes } from './constants';
import { ColorSchemeT } from './provider/types';

const colorScheme = 'dark';
const scale = 'medium';

function App() {
  return (
    <DSProvider theme={theme} colorScheme={colorScheme} scale={scale}>
      <div className="App">
        <header className="App-header">
          <h1>Test your components</h1>
        </header>
        <main>
          <ColorSchemeToggle />
          <Flyout>
            <Flyout.Toggle />
            <Flyout.List>
              <Flyout.Item>Test1</Flyout.Item>
              <Flyout.Item>Test2</Flyout.Item>
              <Flyout.Item>Test3</Flyout.Item>
            </Flyout.List>
          </Flyout>
        </main>
      </div>
    </DSProvider>
  );
}

const mapCurrentColorSchemeToNext: Record<ColorSchemeT, ColorSchemeT> = {
  dark: 'light',
  light: 'dark',
};

const ColorSchemeToggle = () => {
  const { colorScheme, setColorScheme } = useDSContext();
  const nextColorScheme = mapCurrentColorSchemeToNext[colorScheme];

  return (
    <Button
      size={ComponentSizes.S}
      onClick={() => setColorScheme(nextColorScheme)}
    >
      Toggle color scheme
    </Button>
  );
};

export default App;
