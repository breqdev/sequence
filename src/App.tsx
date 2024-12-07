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

function useShowing() {
  const [showing, setShowing] = useState(false);
  const time = useTime();

  useEffect(() => {
    if (time.getHours() === 12 && time.getMinutes() === 34) {
      setShowing(true);
    }
  }, [time]);

  return showing;
}

export default function App() {
  const sequenceNumber = useMemo(() => Math.floor(Math.random() * 378000), []);

  const time = useTime();
  const show = useShowing();

  const frame = useMemo(
    () => (
      <iframe
        className="flex-grow"
        src={`https://oeis.org/A${sequenceNumber}`}
      />
    ),
    [sequenceNumber]
  );

  return (
    <div className="w-full h-full flex flex-col font-body">
      <h1 className="text-center m-4 text-4xl lg:text-5xl lg:mt-8">
        12:34 make a sequence
      </h1>
      {show ? (
        <>
          <p className="font-mono text-4xl lg:text-5xl m-2 flex flex-row justify-center">
            <span className="p-2 bg-black text-white">
              A{String(sequenceNumber).padStart(6, "0")}
            </span>
          </p>
          {frame}
        </>
      ) : (
        <>
          <p className="font-italic text-3xl m-4 text-center">
            the time is {time.getHours()}:
            {String(time.getMinutes()).padStart(2, "0")}, come back at 12:34
          </p>
          <p className="text-center mx-auto px-2 leading-relaxed w-full max-w-xl">
            made with love by{" "}
            <a
              className="px-1 py-0.5 bg-black text-white hover:underline focus-visible:underline"
              href="https://breq.dev/"
            >
              breq
            </a>{" "}
            based on a concept by{" "}
            <a
              className="px-1 py-0.5 bg-black text-white hover:underline focus-visible:underline"
              href="https://tris.fyi/"
            >
              tris
            </a>
            .
          </p>
          <p className="text-center mx-auto px-2 mt-0 leading-relaxed w-full max-w-xl">
            sequences provided by the{" "}
            <a
              className="px-1 py-0.5 bg-black text-white hover:underline focus-visible:underline"
              href="https://oeis.org/"
            >
              on-line encyclopedia of integer sequences
            </a>
            .
          </p>
        </>
      )}
    </div>
  );
}
