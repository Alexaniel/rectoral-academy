import { Text, ITextStyles } from '@fluentui/react/lib/Text';
import { theme } from '../../theme';

interface SubheaderProps {
  text: string;
}

const textProps: Partial<ITextStyles> = {
    root: {
        fontWeight: 700,
        color: theme.themeDark,
        lineHeight: '34px',
    },
};

const Subheader = ({ text }: SubheaderProps) => (
    <Text
        variant="xxLarge"
        block
        styles={textProps}
    >
        {text}
    </Text>
);

export default Subheader;
