import { Link } from "react-router-dom";

export default function QuizHistoryButton() {
  return (
    <div className="absolute bottom-1 right-3 py-3 sm:-bottom-5 md:bottom-3 md:right-6 md:py-0 lg:bottom-6">
      <Link
        to="/quiz-history"
        className="flex items-center justify-center gap-1 rounded-full bg-primary px-3 py-2 text-light-neutral transition-shadow duration-200 ease-in-out hover:bg-secondary hover:shadow-md focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2 md:px-5"
        title="View Quiz History"
      >
        <svg
          clipRule="evenodd"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 md:h-8 md:w-8"
        >
          <path
            d="m3.503 6.726c1.765-2.836 4.911-4.726 8.495-4.726 5.518 0 9.997 4.48 9.997 9.997 0 5.519-4.479 9.999-9.997 9.999-5.245 0-9.553-4.048-9.966-9.188-.024-.302.189-.811.749-.811.391 0 .715.3.747.69.351 4.369 4.012 7.809 8.47 7.809 4.69 0 8.497-3.808 8.497-8.499 0-4.689-3.807-8.497-8.497-8.497-3.037 0-5.704 1.597-7.206 3.995l1.991.005c.414 0 .75.336.75.75s-.336.75-.75.75h-4.033c-.414 0-.75-.336-.75-.75v-4.049c0-.414.336-.75.75-.75s.75.335.75.75zm7.487.021.007 5.563c0 .288.165.55.424.675l3.978 1.928c.373.18.821.024 1.001-.349s.024-.821-.349-1.001l-3.555-1.725s-.006-5.093-.006-5.093c0-.414-.337-.749-.75-.749-.414 0-.75.337-.75.751z"
            fillRule="nonzero"
            fill="currentColor"
          />
        </svg>
        <span className="font-semibold md:text-lg">View History</span>
      </Link>
    </div>
  );
}
