import { Ticket } from '@src/@types/api';

export const groupTicketsPlaces = (tickets: Ticket[]) =>
  Object.entries(
    tickets
      .slice()
      .sort((a, b) => a.row - b.row)
      .reduce((acc: { [key: number]: number[] }, item) => {
        if (!acc[item.row]) {
          acc[item.row] = [];
        }
        acc[item.row].push(item.column);
        return acc;
      }, []),
  );
