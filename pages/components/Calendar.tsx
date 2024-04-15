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
      setData(response.data);
      setLoading(false);
      console.log('Get session:', response.data);
    } catch {
      console.error('Failed to get session');
    }
  };

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
