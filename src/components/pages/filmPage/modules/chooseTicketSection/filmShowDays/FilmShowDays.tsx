import { Tabs } from '@src/shared';

interface FilmShowDaysProps {
  schedulesDate: string[];
  choosedDate: string;
  onTabClick: (date: string) => void;
}

export const FilmShowDays = ({ schedulesDate, onTabClick, choosedDate }: FilmShowDaysProps) => (
  <Tabs tabs={schedulesDate} activeTab={choosedDate} onTabClick={onTabClick} />
);
