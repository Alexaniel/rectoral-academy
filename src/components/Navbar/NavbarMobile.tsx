import {
  INavLinkGroup, Nav, Panel, PanelType,
} from '@fluentui/react';
import { useTranslation } from 'react-i18next';
import SwitchLanguage from '../SwitchLanguage';

import styles from './styles.module.scss';

interface INavbarMobileProps {
  isPanelOpen: boolean;
  menu: any[];
  dismissPanel: () => void;
}

const NavbarMobile = ({
  isPanelOpen, menu, dismissPanel,
}: INavbarMobileProps) => {
  const { t } = useTranslation('shared');

  const navLinkGroups: INavLinkGroup[] = [{
    name: t('MAIN_MENU'), links: menu,
  }];

  const _onRenderGroupHeader = (group: INavLinkGroup) => (
    <h3>
      {group.name}
    </h3>
  );

  return (
    <Panel
      isOpen={isPanelOpen}
      type={PanelType.smallFixedFar}
      onDismiss={dismissPanel}
      closeButtonAriaLabel="Close"
    >
      <Nav
        onRenderGroupHeader={_onRenderGroupHeader as any}
        groups={navLinkGroups}
      />

      <div className={styles.containerLanguage}>
        <h3>
          {t('CHANGE_LANGUAGE')}
        </h3>

        <SwitchLanguage />
      </div>

    </Panel>
  );
};

export default NavbarMobile;
