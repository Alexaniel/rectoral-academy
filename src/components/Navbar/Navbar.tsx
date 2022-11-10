import cs from 'classnames';

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { BiMenu } from 'react-icons/bi';

import { ITextProps, Text } from '@fluentui/react/lib/Text';
import { Image, IImageProps } from '@fluentui/react/lib/Image';
import { useBoolean } from '@fluentui/react-hooks';

import NavbarMobile from './NavbarMobile';
import SwitchLanguage from '../SwitchLanguage';

import IMAGES from '../../constants/images';
import styles from './styles.module.scss';

const imageProps: Partial<IImageProps> = {
    src: IMAGES.logo.horizontal,
    alt: 'Logo rectoral board',
    loading: 'lazy',
    width: 175,
    height: 50,
};

const textProps: ITextProps = {
    variant: 'mediumPlus',
    nowrap: true,
    block: true,
};

export interface IOption {
  key: string,
  url: string,
  name: string,
}

const Navbar = () => {
    const { t } = useTranslation('shared', { keyPrefix: 'NAVBAR' });
    const [optionActive, setOptionActive] = useState<string | undefined>('');
    const [isPanelOpen, { setTrue: showPanel, setFalse: dismissPanel }] = useBoolean(false);
    const { pathname, hash } = useLocation();

    const menu: IOption[] = [
        {
            key: 'home',
            url: '/#',
            name: t('HOME'),
        },
        {
            key: 'purpose',
            url: '/#purpose',
            name: t('PURPOSE'),
        },
        {
            key: 'sense-180',
            url: '/#sense-180',
            name: t('SENSE_180'),
        },
        {
            key: 'training-gap',
            url: '/#training-gap',
            name: t('TRAINING_GAP'),
        },
        {
            key: 'target',
            url: '/#target',
            name: t('TARGET'),
        },
    ];

    useEffect(() => {
        const option = menu.find((item) => item.url === hash);
        setOptionActive(!option ? 'home' : option.key);
    }, [pathname]);

    return (
        <div className={styles.navbar}>
            <Image {...imageProps} />

            <BiMenu
                className={styles.iconMenu}
                onClick={showPanel}
            />

            <NavbarMobile
                isPanelOpen={isPanelOpen}
                dismissPanel={dismissPanel}
                menu={menu}
            />

            <div className={styles.containerMenu}>
                {
                    menu.map((item) => (
                        <Link to={item.url} key={item.key}>
                            <div
                                onClick={() => setOptionActive(item.key)}
                                className={cs(
                                    styles.option,
                                    { [styles.active]: optionActive === item.key },
                                )}
                            >
                                <Text {...textProps}>
                                    {item.name}
                                </Text>
                            </div>
                        </Link>
                    ))
                }
                <SwitchLanguage />
            </div>
        </div>
    );
};
export default Navbar;
