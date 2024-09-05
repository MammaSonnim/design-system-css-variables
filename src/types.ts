import { ComponentSizes, ComponentVariants } from './constants';

export type ValueOf<T> = T[keyof T];
export type ComponentSizeT = ValueOf<typeof ComponentSizes>;
export type ComponentVariantT = ValueOf<typeof ComponentVariants>;
