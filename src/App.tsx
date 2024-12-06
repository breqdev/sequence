import { useEffect, useMemo, useState } from "react";

function useTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
}

export default function App() {
  const sequenceNumber = useMemo(() => Math.floor(Math.random() * 378000), []);

  const time = useTime();

  if (![0, 12].includes(time.getHours()) || time.getMinutes() !== 34) {
    return (
      <div className="w-full h-full flex flex-col">
        <h1 className="text-center m-2 text-4xl">12:34 make a sequence</h1>
        <p className="font-italic text-3xl m-4 text-center">
          the time is {time.getHours()}:
          {String(time.getMinutes()).padStart(2, "0")}, come back at 12:34
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-center m-2 text-4xl">12:34 make a sequence</h1>
      <p className="font-mono text-4xl m-4 text-center">A{sequenceNumber}</p>
      <iframe
        className="flex-grow"
        src={`https://oeis.org/A${sequenceNumber}`}
      />
    </div>
  );
}
