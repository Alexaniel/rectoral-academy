import { Row, Col, Empty } from 'antd';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { CursesContext } from '../../../screens/Curses/context/cursesContext';

import CardCurse from '../CardCurse';
import styles from '../styles.module.scss';

const ListCurses = () => {
    const { t } = useTranslation('curses');
    const { curses, loading } = useContext(CursesContext);
    return (
        <Row
            gutter={[24, 24]}
            className={styles.containerCurses}
        >
            {
                loading
                    ? (
                        <div className={styles.loadingCurses}>
                            {t('GETTING_CURSES')}
                        </div>
                    )
                    : (
                        curses.length > 0
                            ? (
                                curses.map((item) => (
                                    <Col xs={24} md={8} xl={6} xxl={6}>
                                        <CardCurse item={item} />
                                    </Col>
                                ))
                            ) : (
                                <Empty
                                    style={{ margin: '0 auto' }}
                                    description={(
                                        <span className={styles.empty}>
                                            {t('NO_CURSES')}
                                        </span>
                                    )}
                                />
                            )
                    )
            }
        </Row>
    );
};

export default ListCurses;
