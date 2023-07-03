import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { colors } from './colors';
import { fonts } from './fonts';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

export const theme = extendTheme({ config, colors, fonts });
