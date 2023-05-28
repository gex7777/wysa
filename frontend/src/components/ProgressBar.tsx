const ProgressBar = ({
  step,
  totalSteps,
}: {
  step: number;
  totalSteps: number;
}) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => {
    if (i === 0 || i === totalSteps) {
      return;
    }
    return `w-${i}/${totalSteps}`;
  }).filter((val) => val !== undefined);
  steps.unshift("w-0");
  steps.push("w-full");
  console.log(steps);

  return (
    <div className="h-1 w-full relative  rounded-full overflow-hidden animate-fade animate-once animate-duration-[2000ms] animate-ease-in">
      <div className="w-full h-full bg-slate-800 absolute"></div>
      <div
        className={`transition-all w- ease-out duration-1000 h-full  bg-blue-700 relative ${
          steps[step - 1]
        }`}
      ></div>
    </div>
  );
};

export default ProgressBar;
