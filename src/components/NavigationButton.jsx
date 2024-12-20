/* eslint-disable react/prop-types */

export default function NavigationButton({ children }) {
  return (
    <button className="bg-primary text-neutral hover:bg-secondary rounded-full px-5 py-2 font-medium">
      {children}
    </button>
  );
}
