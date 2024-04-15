"use client"
import dynamic from 'next/dynamic'
import Timer from "./components/timer";

const Calendar = dynamic(() => import('./components/Calendar'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>&quot;To produce at your peak level you need to work for extended periods with full concentration on a single task free from distraction&quot; - Deep Work, Cal Newport</div>
      <Timer />
      <Calendar />
    </main>
  );
}
