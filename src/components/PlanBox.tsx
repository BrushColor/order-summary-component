import IconMusic from '../assets/icon-music.svg';

export function PlanBox() {
  return (
    <div className="flex flex-row items-center justify-between rounded-lg bg-gray-100 p-5">
      <div className="flex flex-row items-center gap-3">
        <img src={IconMusic} alt="Icon music" />
        <div>
          <p className="text-neutral-blue-800 font-red-hat-display font-black">
            Annual Plan
          </p>
          <span className="text-neutral-blue-300 font-red-hat-display">
            $59.99/year
          </span>
        </div>
      </div>
      <a
        href="#"
        className="text-neutral-blue-800 font-red-hat-display transform cursor-pointer font-bold underline transition-all duration-300 ease-in-out hover:no-underline hover:brightness-110 active:no-underline active:brightness-110"
      >
        Change
      </a>
    </div>
  );
}
