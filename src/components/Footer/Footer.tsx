import { IStackProps, ITextProps, Stack, Text } from '@fluentui/react';
import { Image, IImageProps } from '@fluentui/react/lib/Image';
import { theme } from '../../theme';
import IMAGES from '../../constants/images';
import styles from './styles.module.scss';

const stackProps: Partial<IStackProps> = {
  horizontal: true,
  horizontalAlign: "space-between",
  verticalAlign: "center",
  className: styles.info,
};

const imageProps: Partial<IImageProps> = {
  src: IMAGES.logo.horizontal_light,
  alt: 'Logo rectoral board',
  loading: 'lazy',
  width: 140,
  height: 50,
};

const textProps: ITextProps = {
  variant: 'mediumPlus',
  nowrap: true,
  block: true,
};

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.line} />
    <Stack {...stackProps}>
      <Image {...imageProps} />
      <Text {...textProps} color={theme.white}>
        © 2022 Rectoral Board - All rights reserved
      </Text>
    </Stack>
  </footer>
);

export default Footer;
