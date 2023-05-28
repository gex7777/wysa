import { BsArrowDownShort } from "react-icons/bs";

type Props = {
  onClick?: React.MouseEventHandler;
  bounce?: boolean;
};
const Button = ({ onClick, bounce }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`w-fit flex items-center justify-center rounded-full  bg-amber-400 ${
        bounce
          ? "animate-bounce animate-infinite animate-ease-in"
          : "animate-fade-down animate-once animate-ease-in"
      } `}
    >
      <BsArrowDownShort className=" text-5xl text-white" />
    </button>
  );
};

export default Button;
