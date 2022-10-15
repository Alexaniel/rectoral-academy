import {
  DefaultPalette,
  IStackProps, ITextProps, Stack, Text,
} from '@fluentui/react';
import { Image, IImageProps } from '@fluentui/react/lib/Image';
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillYoutube,
} from 'react-icons/ai';
import { ISocialMedia, NAMES, SOCIAL_MEDIA_LIST } from '../../constants/socialMedia';
import IMAGES from '../../constants/images';
import styles from './styles.module.scss';

const stackProps: Partial<IStackProps> = {
  horizontal: true,
  horizontalAlign: 'space-between',
  verticalAlign: 'center',
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
  styles: {
    root: {
      fontWeight: 600,
      color: DefaultPalette.white,
    },
  },
};

const SocialIcons = {
  [NAMES.FACEBOOK]: <AiFillFacebook />,
  [NAMES.TWITTER]: <AiFillTwitterSquare />,
  [NAMES.LINKEDIN]: <AiFillLinkedin />,
  [NAMES.INSTAGRAM]: <AiFillInstagram />,
  [NAMES.YOUTUBE]: <AiFillYoutube />,
};

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.line} />
    <Stack {...stackProps}>
      <Image {...imageProps} />
      <Stack horizontal>
        <Text {...textProps} color={DefaultPalette.white}>
          © 2022 Rectoral Board - All rights reserved
        </Text>
        <Stack horizontal verticalAlign="center">
          {
            SOCIAL_MEDIA_LIST.map((social: ISocialMedia) => (
              <a
                className={styles.socialIcon}
                key={social.keyName}
                href={social.link}
                target="_blank"
                rel="noreferrer"
              >
                {SocialIcons[social.keyName]}
              </a>
            ))
          }
        </Stack>
      </Stack>
    </Stack>
  </footer>
);

export default Footer;
