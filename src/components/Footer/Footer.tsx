import { ITextProps, Text } from '@fluentui/react';
import { Image, IImageProps } from '@fluentui/react/lib/Image';
import { theme } from '../../theme';
import IMAGES from '../../constants/images';
import styles from './styles.module.scss';

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
    <div className={styles.info}>

      <Image {...imageProps} />

      <div>
        <Text {...textProps} color={theme.white}>
          © 2022 Rectoral Board - All rights reserved
        </Text>
      </div>
    </div>
  </footer>
);

export default Footer;
