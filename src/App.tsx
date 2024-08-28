import clsx from 'clsx';
import './App.css';
import { Provider } from './provider';
import { theme } from './themes/theme-default';
import { Button } from './components/button/button';
import { Flyout } from './components/flyout/flyout';

const colorScheme = 'dark';

function App() {
  return (
    <Provider theme={theme}>
      <div
        className={clsx(
          'App',
          theme.common['ds--common'],
          theme[colorScheme]?.[`ds--${colorScheme}`]
        )}
      >
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
    </Provider>
  );
}

export default App;
