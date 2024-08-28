import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { theme as themeDefault } from '../../themes/theme-default';
import { Provider } from '../../provider';
import { Flyout } from './flyout';
import { FlyoutComponentT } from './flyout.types';

export default {
  title: 'Components/Flyout',
  component: Flyout,
} as Meta;

const Template: StoryFn<FlyoutComponentT> = () => {
  return (
    <Provider theme={themeDefault} colorScheme="light">
      <Flyout>
        <Flyout.Toggle />
        <Flyout.List>
          <Flyout.Item>Item 1</Flyout.Item>
          <Flyout.Item>Item 2</Flyout.Item>
          <Flyout.Item>Item 3</Flyout.Item>
        </Flyout.List>
      </Flyout>
    </Provider>
  );
};

export const Default = Template.bind({});
Default.args = {};
