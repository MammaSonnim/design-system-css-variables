import './App.css';
import { DSProvider } from './provider';
import { theme } from './themes/theme-default';
import { Button } from './components/button/button';
import { Flyout } from './components/flyout/flyout';

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
          <Flyout>
            <Flyout.Toggle />
            <Flyout.List>
              <Flyout.Item>Test1</Flyout.Item>
              <Flyout.Item>Test2</Flyout.Item>
              <Flyout.Item>Test3</Flyout.Item>
            </Flyout.List>
          </Flyout>
          <Button>Let's test it</Button>
        </main>
      </div>
    </DSProvider>
  );
}

export default App;
