import { IIconProps } from '@fluentui/react';
import { ActionButton, IButtonStyles } from '@fluentui/react/lib/Button';
import { Text, ITextStyles } from '@fluentui/react/lib/Text';
import { useTranslation } from 'react-i18next';
import { theme } from '../../theme';

interface BackButtonProps {
  path: string;
}

const addFriendIcon: IIconProps = {
    iconName: 'Back',
    styles: {
        root: {
            fontSize: 16,
            color: theme.themeDark,
            fontWeight: 600,
            verticalAlign: 'middle',
        },
    },
};

const textProps: Partial<ITextStyles> = {
    root: {
        fontWeight: 600,
        color: theme.themeDark,
    },
};

const actionProps: Partial<IButtonStyles> = {
    root: {
        padding: '8px 16px',
        borderRadius: 8,
        backgroundColor: theme.neutralLighter,
    },
};

const BackButton = ({ path }: BackButtonProps) => {
    const { t } = useTranslation('shared', { keyPrefix: 'ACTIONS' });
    return (
        <ActionButton
            styles={actionProps}
            iconProps={addFriendIcon}
            allowDisabledFocus
            onClick={() => {
                window.location.href = path;
            }}
        >
            <Text
                variant="large"
                block
                styles={textProps}
            >
                { t('BACK') }
            </Text>
        </ActionButton>
    );
};

export default BackButton;
