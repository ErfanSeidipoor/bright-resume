/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import Image from 'next/image';
import { useData } from './index.hook';
import classes from './index.module.scss';

import ArrowDropDownLeft from '../../../../assets/src/svg/arrow-dropdown-left-datePicker.svg';
import ArrowRight from '../../../../assets/src/svg/arrow-right-datePicker.svg';
import ArrowLeft from '../../../../assets/src/svg/arrow-left-datePicker.svg';

export interface DatePickerProps {
  placeholder?: string;
  placeholderColor?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  placeholder = 'Pick your date!',
  placeholderColor = 'black',
}) => {
  const data = useData();

  return (
    <>
      <button
        className={classes.root}
        onClick={(e) => {
          data.setPopup(true);
        }}
        style={{
          color: placeholderColor,
        }}
      >
        {data.displayDate(placeholder)}
      </button>

      {data.isShowPopup && (
        <>
          <div
            className={classes.popUpCloseZone}
            onClick={() => {
              data.setPopup(false);
            }}
          />

          <div className={classes.content}>
            {data.datePickerTab === 'year' ? (
              <>
                <div className={classes.header}>
                  <div
                    className={classes.title}
                    onClick={() => data.setDatePickerTab('month')}
                  >
                    <Image
                      src={ArrowDropDownLeft}
                      alt="arrow-right"
                      width={24}
                      height={24}
                    />
                    <p className={classes.text}>
                      {data.displayDate('Select a year')}
                    </p>
                  </div>
                  <div className={classes.actions}>
                    <Image
                      src={ArrowLeft}
                      className={[
                        classes.image,
                        new Date().getFullYear() + (data.yearPage - 1) * 20 <
                        new Date().getFullYear() - 100
                          ? classes.disableImage
                          : '',
                      ].join(' ')}
                      alt="arrow-right"
                      width={24}
                      height={24}
                      onClick={() =>
                        !(
                          new Date().getFullYear() + (data.yearPage - 1) * 20 <
                          new Date().getFullYear() - 100
                        ) &&
                        data.setYearPage((prevYearPage) => prevYearPage - 1)
                      }
                    />
                    <Image
                      src={ArrowRight}
                      className={[
                        classes.image,
                        new Date().getFullYear() + (data.yearPage + 1) * 20 >
                        new Date().getFullYear() + 100
                          ? classes.disableImage
                          : '',
                      ].join(' ')}
                      alt="arrow-right"
                      width={24}
                      height={24}
                      onClick={() =>
                        !(
                          new Date().getFullYear() + (data.yearPage + 1) * 20 >
                          new Date().getFullYear() + 100
                        ) &&
                        data.setYearPage((prevYearPage) => prevYearPage + 1)
                      }
                    />
                  </div>
                </div>
                <div className={classes.items}>
                  {data.years
                    .filter(
                      (item) =>
                        item >
                          new Date().getFullYear() + data.yearPage * 20 - 12 &&
                        item < new Date().getFullYear() + data.yearPage * 20 + 9
                    )
                    .map((year) => (
                      <span
                        className={[
                          classes.item,
                          data.currentYear === year ? classes.selectedItem : '',
                        ].join(' ')}
                        onClick={() => data.setCurrentYear(year)}
                      >
                        {year}
                      </span>
                    ))}
                </div>
              </>
            ) : (
              <>
                <div className={classes.header}>
                  <p className={classes.text}>Select a month</p>
                </div>
                <div className={classes.itemsMonth}>
                  {data.months.map((month) => (
                    <span
                      className={[
                        classes.itemMonth,
                        data.months[data.currentMonth!] === month
                          ? classes.selectedItemMonth
                          : '',
                      ].join(' ')}
                      onClick={() => {
                        data.setCurrentMonth(data.months.indexOf(month));
                        data.setDatePickerTab('year');
                      }}
                    >
                      {month}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default DatePicker;
