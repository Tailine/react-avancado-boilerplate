// .storybook/preview.js

import GlobalStyles from '../src/styles/global';

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];
