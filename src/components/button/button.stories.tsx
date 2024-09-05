import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button } from './button';
import { ButtonPropsT } from './button.types';
import { DSProviderT } from '../../provider/types';
import { StoryWrapper } from '../story-wrapper';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonPropsT & DSProviderT> = (props) => {
  return (
    <StoryWrapper
      theme={props.theme}
      colorScheme={props.colorScheme}
      scale={props.scale}
    >
      <Button {...props} />
    </StoryWrapper>
  );
};

const defaultProps = {
  label: 'Submit',
};

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

export const LightMediumRound = Template.bind({});
LightMediumRound.args = {
  ...defaultProps,
  isRound: true,
  label: '❤️',
};
