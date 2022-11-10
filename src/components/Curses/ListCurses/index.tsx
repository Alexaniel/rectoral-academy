import { Row, Col } from 'antd';
import { useContext } from 'react';
import { CursesContext } from '../../../screens/Curses/context/cursesContext';

import CardCurse from '../CardCurse';
import styles from '../styles.module.scss';

const ListCurses = () => {
    const { curses } = useContext(CursesContext);
    return (
        <Row
            gutter={[24, 24]}
            className={styles.containerCurses}
        >
            {
                curses.map((item) => (
                    <Col xs={24} md={8} xl={6} xxl={6}>
                        <CardCurse item={item} />
                    </Col>
                ))
            }
        </Row>
    );
};

export default ListCurses;
