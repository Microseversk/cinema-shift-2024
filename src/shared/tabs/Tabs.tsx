import { Typography } from '@src/shared';

import classNames from 'classnames';
import styles from './styles.module.scss';

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabClick?: (tab: string) => void;
  className?: string;
}

export const Tabs = ({ activeTab, tabs, className, onTabClick }: TabsProps) => {
  const onTabChange = (tab: string) => {
    onTabClick?.(tab);
  };
  return (
    <div className={classNames(styles.tabs_container, className)}>
      {tabs.map((tab) => (
        <Typography
          variant="p_14_regular"
          key={tab}
          className={classNames(styles.tab, { [styles.tab_active]: tab === activeTab })}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </Typography>
      ))}
    </div>
  );
};
