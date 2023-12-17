"use client";
import { useState } from 'react'
import Calendar from 'react-calendar';
import ToggleSwitch from '../ToggleSwitch';
import 'react-calendar/dist/Calendar.css'
import '@/style/calendar-override.css'
import '@/style/slider.css'


const ScheduleAndPublish = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(12);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleTimeChange = (event) => {
    setTime(parseInt(event.target.value, 10));
  };

  return (
    <div className="absolute right-8 top-40 bg-[#202325] rounded-md p-2 text-white">
      <div>
        <div className="flex flex-row justify-between">
          <label htmlFor="toggle-schedule">Scheduled Publish</label>
          <ToggleSwitch id="toggle-schedule" />

        </div>
        <Calendar onChange={handleDateChange} value={date} />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row mx-auto mb-2">
          <label>Time:</label>
          <span className="ml-2">{` ${time}:00`}</span>
        </div>
        <input
          type="range"
          min={0}
          max={23}
          step={1}
          value={time}
          onChange={handleTimeChange}
        />
      </div>
    </div>
  );
};

export default ScheduleAndPublish;
