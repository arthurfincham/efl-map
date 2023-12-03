export const SidebarBackground = () => {
  return (
    <svg className="absolute w-full h-full" fill="none">
      <defs>
        <pattern
          id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e"
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            className="z-0 stroke-gray-300"
            d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"
          ></path>
        </pattern>
      </defs>
      <rect
        stroke="none"
        fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)"
        width="100%"
        height="100%"
      ></rect>
    </svg>
  );
};

export const SidebarMobileToggle = ({ isExpanded, setIsExpanded }) => {
  return (
    <div
      className="absolute top-[-15px] z-[9] w-[90%] h-[30px] transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 border rounded-t-md sm:hidden left-1/2 flex justify-center items-center"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`${isExpanded ? 'rotate-180 transform' : ''} w-6 h-6`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
        />
      </svg>
    </div>
  );
};

export const ToggleSortButton = ({ toggleSort }) => {
  return (
    <div
      onClick={() => toggleSort()}
      className="p-2 bg-gray-100 border rounded-md cursor-pointer hover:bg-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 stroke-gray-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
        />
      </svg>
    </div>
  );
};

export const ClearProgressButton = ({ clearProgress }) => {
  return (
    <div
      onClick={() => clearProgress()}
      className="p-2 bg-gray-100 border rounded-md cursor-pointer hover:bg-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 stroke-gray-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    </div>
  );
};

export const SidebarLiveScore = ({ numOfClubsInMap }) => {
  return (
    <div className="hidden sm:flex w-full border border-gray-300 min-h-[40px] bg-white justify-end items-center rounded-lg  px-3  text-right text-sm font-medium text-gray-500   my-1 relative overflow-hidden ml-4 mb-6 sm:mb-1">
      <div
        className="absolute left-0 z-0 h-full bg-purple-200"
        style={{ width: `${(numOfClubsInMap / 92) * 100}%` }}
      />
      {92 - numOfClubsInMap} / 92
    </div>
  );
};
