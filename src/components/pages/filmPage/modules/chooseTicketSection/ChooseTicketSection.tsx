import { Schedule } from '@src/@types/api';
import { ArrowSmallLeftIcon, Button, CardForm, Tabs, Typography } from '@src/shared';
import { Modal } from '@src/shared/modal/Modal';
import { HALLS_MAP } from '@src/utils/constants/hallsMap';
import { MONTH_MAP } from '@src/utils/constants/monthMap';
import { FilmShowPlaces, FilmShowTimes } from '..';
import { BuyTicketsForm } from './buyTicketsForm/BuyTicketsForm';
import { useChooseTicketSection } from './useChooseTicketSection';

import { Back } from '@src/shared/Back/Back';
import styles from './styles.module.scss';

interface ChooseTicketSectionProps {
  schedules: Schedule[];
}

export const ChooseTicketSection = ({ schedules }: ChooseTicketSectionProps) => {
  const { actions, state } = useChooseTicketSection(schedules);

  return (
    <div className={styles.choose_ticket_section_wrapper}>
      <Tabs
        tabs={schedules.map((schedule) => schedule.date)}
        activeTab={state.choosedDay.date}
        onTabClick={actions.onDateClick}
        className={styles.date}
      />
      <Typography tag="h2" variant="h2">
        Расписание
      </Typography>
      <FilmShowTimes
        seances={state.choosedDay.seances}
        choosedSeanceTime={state.choosedTime}
        onChangeSeanceTime={actions.onTimeClick}
      />
      <Typography tag="h2" variant="h2">
        Выбор места
      </Typography>
      <div className={styles.places}>
        <FilmShowPlaces
          places={state.choosedTime.hall.places}
          choosedPlaces={state.choosedPlaces}
          onPlaceClick={actions.onPlaceClick}
        />
        {state.choosedPlaces.length > 0 && (
          <div className={styles.choosed_tickets_wrapper}>
            <div>
              <Typography variant="p_12_regular" color="tertiary">
                Зал
              </Typography>
              <Typography variant="p_16_regular">
                {HALLS_MAP[state.choosedTime.hall.name]}
              </Typography>
            </div>
            <div>
              <Typography variant="p_12_regular" color="tertiary">
                Дата и время
              </Typography>
              <Typography variant="p_16_regular">
                {state.choosedDay.date.split('.')[0]}{' '}
                {MONTH_MAP[state.choosedDay.date.split('.')[1]]} {state.choosedTime.time}
              </Typography>
            </div>
            <div>
              <Typography variant="p_12_regular" color="tertiary">
                Места
              </Typography>
              {actions.placesObjectToArray(state.choosedPlaces).map((i) => (
                <Typography variant="p_16_regular">
                  {i[0]} ряд - {i[1].sort().join(', ')}
                </Typography>
              ))}
            </div>
            <Typography tag="h3" variant="h3">
              Сумма:{state.choosedPlaces.reduce((a, b) => a + b.price, 0)} {' ₽'}
            </Typography>
            <Button onClick={() => state.setModalIsOpen(true)}>Купить</Button>
          </div>
        )}
        <Modal
          isOpen={state.modalIsOpen}
          onClose={() => {
            state.setModalIsOpen(false);
          }}
        >
          {state.isPaying ? (
            <>
              <Back icon={<ArrowSmallLeftIcon />} onClick={() => state.setIsPaying(false)}>
                <Typography variant="p_16_regular" color="tertiary">
                  Назад
                </Typography>
              </Back>
              <CardForm />
            </>
          ) : (
            <BuyTicketsForm
              onSubmit={(e) => {
                e.preventDefault();
                state.setIsPaying(true);
              }}
            />
          )}
        </Modal>
      </div>
    </div>
  );
};
