import { Collapse } from 'antd';
import { IStudyPlan } from '../../../interfaces';

const { Panel } = Collapse;

interface StudyPlanProps {
    studyPlan: IStudyPlan;
}
const StudyPlan = ({ studyPlan }: StudyPlanProps) => (
    <div>
        <Collapse defaultActiveKey={['0']} ghost>
            {
                studyPlan?.modules.map((moduleData, index) => (
                    <Panel
                        key={index}
                        header={moduleData.topic}
                    >
                        <p>{moduleData.description}</p>
                    </Panel>
                ))
            }
        </Collapse>
    </div>
);

export default StudyPlan;
