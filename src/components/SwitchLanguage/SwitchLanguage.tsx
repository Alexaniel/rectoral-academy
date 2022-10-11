import { Dropdown, IDropdownOption } from '@fluentui/react';

import { FormEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

const SwitchLanguage = () => {
  const { t: l, i18n } = useTranslation('shared', { keyPrefix: 'LANGUAGES' });

  const [selectedItem, setSelectedItem] = useState<IDropdownOption>();

  const dropdownLanguages = [
    { key: 'ES', text: l('SPANISH') },
    { key: 'EN', text: l('ENGLISH') },
    { key: 'PT', text: l('PORTUGUESE') },
  ];

  const onChange = (event: FormEvent<HTMLDivElement>, item?: IDropdownOption) => {
    i18n.changeLanguage(item?.key.toString());
    setSelectedItem(item);
  };

  useEffect(() => {
    const currentLanguage = dropdownLanguages.find((item) => item.key === i18n.language);
    setSelectedItem(currentLanguage);
  }, []);

  return (
    <div className={styles.containerSwitcher}>
      <Dropdown
        selectedKey={selectedItem ? selectedItem.key : undefined}
        onChange={onChange}
        options={dropdownLanguages}
      />
    </div>
  );
};

export default SwitchLanguage;
