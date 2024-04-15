"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import Calendar from "./components/Calendar";
import Timer from "./components/timer";

export default function Home() {
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>&quot;To produce at your peak level you need to work for extended periods with full concentration on a single task free from distraction&quot; - Deep Work, Cal Newport</div>
      <Timer />
      <Calendar />
    </main>
  );
}
