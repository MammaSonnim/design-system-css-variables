A prototype for the React based design system with theming using CSS variables (without cssInJs libraries)

## Used stack:

- TypeScript
- CRA (for speed)
- React, Context and hooks
- CSS variables
- Storybook

## How It Works

### `src/themes`

A theme is an object that contains a set of CSS variables for different color schemes and scales.

Files with variables for dark and light color schemes contain the same CSS variable names but with opposite colors. For example, `--ds-color-gray-50` in the light color scheme will be the lightest, while in the dark color scheme it will be the darkest.

Files for scales work similarly: `--ds-size-10` in the small scale will be `1px`, in the medium scale `2px`, and in the large scale `4px` (values might change later, but the principle remains the same).

Additionally, there is a set of common variables where general component variables are defined. Also there are static values, which are independent of color scheme or scale.

### `src/provider`

The provider supplies the theme object, the current color scheme, the current scale, and their setters. It also wraps the content with an element that includes classnames for the current color scheme and scale. When you switch the color scheme, the provider sets the appropriate classname, which overrides the CSS variable values.
Providers can be nested and it enables using several themes / current color schemes and scales within one app.

### `src/components`

A simple set of components for identifying potential weaknesses in the design system.

## TODO

- Add style props
- Add more components
- Automatically detect the user's color scheme in the provider
- Improve accessibility
- Adjust variables for different scales
- Build and publish to the package registry
- Use a more refined design for components (currently, they are rather ugly from a design point of view)
- Generate variables from Figma's design tokens
- Add CSS preprocessing for selectors' nesting and mixins
