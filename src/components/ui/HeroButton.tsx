import { HiSolidArrowRightCircle } from "solid-icons/hi";

export const HeroButton = () => {
  return (
    <button
      onClick={() => (window.location.pathname = "/dashboard")}
      class="ease-[cubic-bezier(0.68, -0.6, 0.32, 1.6)] relative z-10 mt-3 rounded-2xl bg-gradient-to-tr from-yellow-500 to-red-600 p-3.5 duration-300 will-change-transform hover:scale-[1.2] active:scale-90 max-md:p-3"
    >
      <span class="flex items-center text-gray-200">
        <span class="pr-2 font-medium">Đi đến Dashboard</span>
        <HiSolidArrowRightCircle />
      </span>
    </button>
  );
};
