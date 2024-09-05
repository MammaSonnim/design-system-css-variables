import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { DSProviderT } from '../../provider/types';
import { Flyout } from './flyout';
import { FlyoutPropsT } from './flyout.types';
import { StoryWrapper } from '../story-wrapper';

export default {
  title: 'Components/Flyout',
  component: Flyout,
} as Meta;

const Template: StoryFn<FlyoutPropsT & DSProviderT> = (props) => {
  return (
    <StoryWrapper
      theme={props.theme}
      colorScheme={props.colorScheme}
      scale={props.scale}
    >
      <Flyout {...props}>
        <Flyout.Toggle />
        <Flyout.List>
          <Flyout.Item>Item 1</Flyout.Item>
          <Flyout.Item>Item 2</Flyout.Item>
          <Flyout.Item>Item 3</Flyout.Item>
        </Flyout.List>
      </Flyout>
    </StoryWrapper>
  );
};

const defaultProps = {};

export const LightSmall = Template.bind({});
LightSmall.args = {
  ...defaultProps,
  scale: 'small',
};

export const LightMediumDefault = Template.bind({});
LightMediumDefault.args = {
  ...defaultProps,
};

export const LightLarge = Template.bind({});
LightLarge.args = {
  ...defaultProps,
  scale: 'large',
};

export const DarkMedium = Template.bind({});
DarkMedium.args = {
  ...defaultProps,
  colorScheme: 'dark',
};
