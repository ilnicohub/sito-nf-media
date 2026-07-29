"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./BookingCalendar.module.css";
import { availabilityConfig, DayOfWeek } from "@/config/availability";

interface BookingCalendarProps {
  onSelectDate: (date: Date) => void;
  selectedDate: Date | null;
}

export default function BookingCalendar({ onSelectDate, selectedDate }: BookingCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Calculate max date (3 months from now)
  const maxDate = new Date();
  maxDate.setMonth(today.getMonth() + 3);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const nextMonth = () => {
    const next = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1);
    if (next <= maxDate) {
      setCurrentMonth(next);
    }
  };

  const prevMonth = () => {
    const prev = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1);
    if (prev >= new Date(today.getFullYear(), today.getMonth(), 1)) {
      setCurrentMonth(prev);
    }
  };

  const isDateBlocked = (date: Date) => {
    const dayOfWeek = date.getDay() as DayOfWeek;
    
    // Check working days
    if (!availabilityConfig.workingDays.includes(dayOfWeek)) {
      return true;
    }

    // Format YYYY-MM-DD correctly avoiding timezone issues
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;

    // Check blocked specific dates
    if (availabilityConfig.blockedDates.includes(dateString)) {
      return true;
    }

    // Check blocked ranges
    for (const range of availabilityConfig.blockedRanges) {
      if (dateString >= range.start && dateString <= range.end) {
        return true;
      }
    }

    return false;
  };

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth); // 0 (Sun) to 6 (Sat)
  const emptyDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Start week on Monday

  const days = [];
  for (let i = 0; i < emptyDays; i++) {
    days.push(<div key={`empty-${i}`} className={styles.emptyDay}></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    date.setHours(0, 0, 0, 0);
    
    const isPast = date < today;
    const isBlocked = isDateBlocked(date);
    const isDisabled = isPast || isBlocked;
    const isSelected = selectedDate?.toDateString() === date.toDateString();

    days.push(
      <button
        key={day}
        onClick={() => !isDisabled && onSelectDate(date)}
        disabled={isDisabled}
        className={`${styles.day} ${isSelected ? styles.selected : ""} ${isDisabled ? styles.disabled : ""}`}
      >
        {day}
      </button>
    );
  }

  const monthNames = [
    "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
  ];

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.header}>
        <button 
          onClick={prevMonth} 
          disabled={currentMonth.getMonth() === today.getMonth() && currentMonth.getFullYear() === today.getFullYear()}
          className={styles.navBtn}
          type="button"
        >
          <ChevronLeft size={20} />
        </button>
        <h3 className={styles.monthTitle}>
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        <button 
          onClick={nextMonth} 
          disabled={currentMonth.getMonth() === maxDate.getMonth() && currentMonth.getFullYear() === maxDate.getFullYear()}
          className={styles.navBtn}
          type="button"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className={styles.weekDays}>
        <span>Lun</span>
        <span>Mar</span>
        <span>Mer</span>
        <span>Gio</span>
        <span>Ven</span>
        <span>Sab</span>
        <span>Dom</span>
      </div>

      <div className={styles.daysGrid}>
        {days}
      </div>
    </div>
  );
}
