"use client"
import Timer from "./components/timer";
import ActivityCalendar from "react-activity-calendar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>&quot;To produce at your peak level you need to work for extended periods with full concentration on a single task free from distraction&quot; - Deep Work, Cal Newport</div>
      <Timer />
      <ActivityCalendar showWeekdayLabels={true} weekStart={1} data={[
          {
            date: '2023-06-14',
            count: 2,
            level: 1,
          },
          {
            date: '2023-06-22',
            count: 16,
            level: 3,
          },
          {
            date: '2023-07-05',
            count: 3,
            level: 1,
          },
          {
            date: '2023-07-17',
            count: 10,
            level: 2,
          },
        ]} />
    </main>
  );
}
