import { Text, ITextStyles } from '@fluentui/react/lib/Text';
import { theme } from '../../theme';

interface HeaderProps {
  text: string;
}

const textProps: Partial<ITextStyles> = {
    root: {
        fontWeight: 700,
        color: theme.themeDark,
        textAlign: 'center',
    },
};

const Header = ({ text }: HeaderProps) => (
    <Text
        variant="mega"
        block
        styles={textProps}
    >
        {text}
    </Text>
);

export default Header;
