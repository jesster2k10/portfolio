import tailwind from 'tailwind-config';
import config from '../../tailwind.config';

export const { theme } = tailwind.config(config);
export const { colors } = theme;
export const fonts = theme.fontFamily;
