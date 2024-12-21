/* eslint-disable react/prop-types */

export default function NavigationButton({ children, styles = "" }) {
  return (
    <button
      className={`rounded-full bg-primary px-5 py-2 font-medium text-neutral hover:bg-secondary ${styles}`}
    >
      {children}
    </button>
  );
}
