import * as React from 'react';
import {
  Stack, IStackProps, PrimaryButton, DefaultButton, IButtonProps, IButtonStyles,
} from '@fluentui/react';
import { Image, IImageProps } from '@fluentui/react/lib/Image';
import { Text, ITextStyles } from '@fluentui/react/lib/Text';

import { useTranslation } from 'react-i18next';
import { theme } from '../../theme';
import IMAGES from '../../constants/images';
import styles from './styles.module.scss';

const portraitStackProps: Partial<IStackProps> = {
  horizontal: true,
  verticalAlign: 'center',
  horizontalAlign: 'center',
  className: styles.portraitStack,
};

const stackProps: Partial<IStackProps> = {
  horizontal: true,
  verticalAlign: 'center',
  horizontalAlign: 'space-between',
  styles: {
    root: {
      width: '100%',
      height: '100%',
    },
  },
};

const lineProps: React.CSSProperties = {
  display: 'block',
  width: '16%',
  background: theme.themeDark,
  height: 8,
  borderRadius: 100,
};

const subtitleStyles: ITextStyles = {
  root: {
    fontWeight: 600,
    color: theme.themeDark,
  },
};

const imageProps: Partial<IImageProps> = {
  src: IMAGES.portrait.presentation,
  alt: 'presentation rectoral board',
  loading: 'lazy',
  width: 400,
  height: 400,
  className: styles.presentation,
};

const buttonStyles: Partial<IButtonStyles> = {
  root: {
    padding: '24px',
    marginRight: 32,
    borderRadius: 8,
  },
};

const Portrait = () => {
  const { t } = useTranslation('home', { keyPrefix: 'PORTRAIT' });
  return (
    <Stack {...portraitStackProps}>
      <Stack {...stackProps}>
        <Stack.Item grow={2}>
          <div style={lineProps} />
          <Text variant="xxLarge" nowrap block styles={subtitleStyles}>
            {t('PROGRAM_ACADEMY')}
          </Text>
          <Stack horizontal horizontalAlign="start">
            <Text
              variant="mega"
              nowrap
              block
              style={{ color: theme.themeDark, fontWeight: 800 }}
            >
              {t('BOARD')}
            </Text>
            <Text
              variant="mega"
              nowrap
              block
              style={{ color: theme.themeDarkAlt, fontWeight: 800 }}
            >
              {t('IES')}
            </Text>
          </Stack>
          <Text variant="xxLarge" styles={subtitleStyles}>
            {t('DESCRIPTION')}
          </Text>
          <Stack
            horizontal
            horizontalAlign="start"
            verticalAlign="center"
            style={{ marginTop: 32 }}
          >
            <PrimaryButton styles={buttonStyles}>
              <Text
                variant="large"
                style={{ color: theme.white, fontWeight: 600 }}
              >
                {t('SEE_CURSES')}
              </Text>
            </PrimaryButton>
            <DefaultButton styles={buttonStyles}>
              <Text variant="large" style={{ fontWeight: 600 }}>
                {t('REQUEST_INFORMATION')}
              </Text>
            </DefaultButton>
          </Stack>
        </Stack.Item>
        <Stack.Item grow={8}>
          <Image {...imageProps} />
        </Stack.Item>
      </Stack>
    </Stack>
  );
};

export default Portrait;
