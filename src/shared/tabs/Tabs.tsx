import { Typography } from '@src/shared';

import styles from './styles.module.scss';

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabClick?: (tab: string) => void;
}

export const Tabs = ({ activeTab, tabs, onTabClick }: TabsProps) => {
  const onTabChange = (tab: string) => {
    onTabClick?.(tab);
  };
  return (
    <div className={styles.tabs_container}>
      {tabs.map((tab) => (
        <div key={tab} className={tab === activeTab ? styles.tab_active : styles.tab} onClick={() => onTabChange(tab)}>
          <Typography variant="p_14_regular">{tab}</Typography>
        </div>
      ))}
    </div>
  );
};
