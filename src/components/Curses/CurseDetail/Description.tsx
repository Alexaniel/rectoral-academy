import { Text } from '@fluentui/react/lib/Text';
import { descriptionProps, labelProps } from '../elementsProperties';

interface DescriptionProps {
    description: string;
    typeProgram: string;
    subTypeProgram: string;
}

const Description = ({
    description, typeProgram, subTypeProgram,
}: DescriptionProps) => (
    <>
        <Text
            styles={labelProps}
            style={{ marginTop: 12 }}
            variant="large"
            block
        >
            {`${typeProgram} / ${subTypeProgram}`}
        </Text>

        <Text variant="large" block styles={descriptionProps}>
            {description}
        </Text>
    </>
);

export default Description;
