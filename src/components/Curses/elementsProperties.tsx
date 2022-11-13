import { ITextStyles } from '@fluentui/react/lib/Text';
import { theme } from '../../theme';

export const descriptionProps: Partial<ITextStyles> = {
    root: {
        fontWeight: 500,
        color: theme.neutralDark,
        textAlign: 'justify',
        margin: '16px 0',
    },
};

export const categoryProps: Partial<ITextStyles> = {
    root: {
        fontWeight: 600,
        color: theme.white,
        textAlign: 'justify',
        marginTop: 8,
        borderRadius: 8,
        padding: '8px 16px',
        backgroundColor: theme.themePrimary,
    },
};

export const labelProps: Partial<ITextStyles> = {
    root: {
        fontWeight: 700,
        color: theme.themePrimary,
        textAlign: 'left',
        marginBottom: 4,
    },
};

export const valueProps: Partial<ITextStyles> = {
    root: {
        fontWeight: 500,
        color: theme.themeDark,
        textAlign: 'left',
        marginBottom: 16,
        display: 'flex',
        alignItems: 'flex-start',
    },
};
