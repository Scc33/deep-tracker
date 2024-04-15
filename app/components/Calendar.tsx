import ActivityCalendar, { Activity } from "react-activity-calendar";

const Calendar = (loading: boolean, data: Array<Activity>) => {
  return (
    <ActivityCalendar
      showWeekdayLabels={true}
      weekStart={1}
      loading={loading}
      data={data}
    />
  );
};

export default Calendar;
