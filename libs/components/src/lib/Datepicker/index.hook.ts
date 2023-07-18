import { useEffect, useState } from "react";

export const useData = () => {
  const months = [
    "Jan", "Feb", 
    "Mar", "Apr", 
    "May", "Jun", 
    "Jul", "Aug", 
    "Sep", "Oct", 
    "Nov", "Dec"
  ]

  const rangeOfYears = (start: number, end: number) => Array(end - start + 1)
  .fill(start)
  .map((year, index) => year + index)

  const years = rangeOfYears(new Date().getFullYear() - 100, new Date().getFullYear() + 100)
  
  const [isShowPopup, setPopup] = useState(false);
  const [currentYear, setCurrentYear] = useState<number | undefined>(undefined);
  const [currentMonth, setCurrentMonth] = useState<number | undefined>(undefined);
  const [yearPage, setYearPage] = useState(0);

  const [datePickerTab, setDatePickerTab] = useState<'month' | 'year'>('year');

  const displayDate = (placeholder = '') => {
    if (currentMonth && currentYear) {
      return `${months[currentMonth]} ${currentYear}`
    } 
    return placeholder
  }

  useEffect(() => {
    setDatePickerTab('year')
  }, [isShowPopup])

  useEffect(() => {
    if (currentYear && !currentMonth) {
      setCurrentMonth(new Date().getMonth())
    }
  }, [currentMonth, currentYear])
  
  

  return {
    isShowPopup, setPopup,
    currentYear, setCurrentYear,
    currentMonth, setCurrentMonth,
    months, years, datePickerTab, setDatePickerTab,
    yearPage, setYearPage, displayDate
  };
};
