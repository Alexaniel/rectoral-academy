import { ITextStyles } from '@fluentui/react/lib/Text';
import { theme } from '../../../theme';

export const headerProps: Partial<ITextStyles> = {
    root: {
        fontWeight: 800,
        fontSize: 36,
        color: theme.themePrimary,
        textAlign: 'center',
        marginBottom: 32,
    },
};

export const labelProps: Partial<ITextStyles> = {
    root: {
        fontWeight: 700,
        color: theme.themePrimary,
        textAlign: 'center',
        fontSize: 24,
    },
};

export const descriptionProps: Partial<ITextStyles> = {
    root: {
        fontWeight: 600,
        color: theme.neutralDark,
        textAlign: 'justify',
    },
};
