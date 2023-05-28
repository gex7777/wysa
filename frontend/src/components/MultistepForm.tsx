import { useEffect, useState } from "react";
import Button from "./Button";
import ProgressBar from "./ProgressBar";
//const API_URL = "http://localhost:4000";
const colors = ["bg-cyan-800", " bg-blue-900", "bg-indigo-800"];
const screenDataMock: IScreenData[] = [
  {
    step: 0,
    title: "Hey! I'm Wysa",
    subQuestion: "I'm here to help you sleep better",
  },
  {
    step: 1,
    title:
      "Let's start by calculating your sleep efficiency and examinnig your concerns. Over time, we will work together to improve these.",
  },
  {
    step: 2,
    title: "Let's say in a few weeks, you're sleeping well. What would change",
    subQuestion: "Select all the changes you would like to see",
    options: [
      { number: 1, option: "I would go to sleep easily" },
      { number: 2, option: "I would sleep through the night" },
      { number: 3, option: "I'd wake up on time, refreshed" },
    ],
  },
];
interface IScreenDataOption {
  number: number;
  option: string;
}
interface IScreenData {
  step: number;
  title: string;
  subQuestion?: string;
  options?: IScreenDataOption[];
}

const MultistepForm = () => {
  const [screenData, setScreenData] = useState<IScreenData[]>([]);
  const [step, setStep] = useState(0);
  const [numberofSteps, setNumberOfSteps] = useState(0);
  const [_, setLoading] = useState(false);
  const handleClick = async () => {
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ step: step }),
    // };
    setLoading(true);
    // const res = await fetch(API_URL, requestOptions);
    // const data = await res.json();
    const data = screenDataMock[step + 1];
    if (data.step === step) {
      setLoading(false);
      return;
    }
    setScreenData((p) => [...p, data]);
    setStep(data.step);
    setLoading(false);
  };
  useEffect(() => {
    (async () => {
      setLoading(true);
      //   const res = await fetch(API_URL);
      //   const data = await res.json();
      //   console.log(data);

      //  setScreenData((p) => [...p, data.initial]);

      //   setNumberOfSteps(data.numberOfSteps);
      //   setStep(parseInt(data.initial.step));
      setScreenData((prev) => [...prev, screenDataMock[0]]);
      setNumberOfSteps(screenDataMock.length);
      setStep(screenDataMock[0].step);
      setLoading(false);
    })();
    return () => {};
  }, []);
  console.log(step, screenData);

  if (step == 0 && screenData[step]) {
    const { title, subQuestion } = screenData[step];
    return (
      <div className="flex flex-col h-screen bg-slate-950  p-4 gap-12 justify-between   md:max-w-5xl mx-auto">
        <div className="flex flex-col justify-center items-center gap-16 pt-44">
          <div className="text-white animate-fade-down animate-once animate-ease-in text-2xl">
            {title}
          </div>

          {subQuestion && (
            <div className="text-white animate-fade-down animate-once animate-ease-in ">
              {subQuestion}
            </div>
          )}
        </div>
        <div className="mx-auto">
          <Button bounce onClick={handleClick} />
        </div>
      </div>
    );
  }

  if (screenData[step]) {
    const { title, subQuestion, options } = screenData[step];
    return (
      <div className="flex flex-col h-screen bg-slate-950  p-8 gap-12 justify-between md:max-w-5xl mx-auto">
        <div className="flex flex-col gap-16">
          <ProgressBar totalSteps={numberofSteps} step={step} />

          <div className="text-white animate-fade animate-once animate-duration-[2000ms] animate-ease-in text-2xl">
            {title}
          </div>

          {subQuestion && (
            <div className="text-white animate-fade animate-once animate-duration-[2000ms] animate-ease-in ">
              {subQuestion}
            </div>
          )}

          {options && (
            <div className="flex flex-col animate-fade-down animate-once animate-ease-in gap-4">
              {options.map((op) => (
                <div
                  key={op.number}
                  className={`text-white  p-4 rounded-md transition-all  hover:scale-105 ${
                    colors[op.number - 1]
                  } `}
                >
                  {op.option}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mx-auto">
          <Button onClick={handleClick} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-slate-950  p-4 gap-12 "></div>
  );
};

export default MultistepForm;
