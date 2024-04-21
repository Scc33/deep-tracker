import axios from "axios";
import { useEffect, useState } from "react";
import ActivityCalendar from "react-activity-calendar";

const Calendar: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get('/api/session');
      const maxTotalDurations = response.data.reduce((acc: number, session: any) => { return acc + session.TOTAL_DURATION }, 0); 
      const data = response.data.map((session: any) => ({
        date: session.DATE,
        count: session.EFFORTS,
        level: Math.floor((session.TOTAL_DURATION / maxTotalDurations) * 9),
      }));
      var now = new Date().setDate(new Date().getDate() - 365);
      var daysOfYearData = [];
      for (var d = new Date(2024, 0, 1); d <= now; d.setDate(d.getDate() + 1)) {
          const day = new Date(d).toISOString().substring(0,10);
          if (day in data) {
            daysOfYearData.push(data[day]);
          } else {
            daysOfYearData.push({ date: day, count: 0, level: 0 });
          }
      }
      console.log(daysOfYearData)
      setData(daysOfYearData as any[]); // Update the type of data to any[]
      setLoading(false);
      console.log('Get session:', data);
    } catch {
      console.error('Failed to get session');
    }
  };

  return (
    <ActivityCalendar
      showWeekdayLabels={true}
      weekStart={1}
      maxLevel={9}
      loading={loading}
      data={data}
      colorScheme="light"
    />
  );
};

export default Calendar;
