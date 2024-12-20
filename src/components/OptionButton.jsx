/* eslint-disable react/prop-types */

export default function OptionButton({ children }) {
  return (
    <button className="focus:ring-primary border-primary bg-neutral cursor-pointer rounded-full border px-4 py-2 text-left text-lg font-normal duration-300 ease-in-out hover:translate-x-2 hover:shadow-md hover:transition-all focus:border-none focus:outline-none focus:ring-1 focus:ring-offset-2">
      {children}
    </button>
  );
}
