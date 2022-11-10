import styles from './styles.module.scss';

const Layout = ({ children }: { children: any }) => (
    <div className={styles.layout}>
        {children}
    </div>
);

export default Layout;
