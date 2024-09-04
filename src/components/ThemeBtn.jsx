import useTheme from "../contexts/UserContext.js";

function ThemeBtn() {
  const { setThemeMode } = useTheme();

  return (
    <>
      <div className="bg-amber-400 p-4 rounded-xl flex flex-col justify-around items-center">
        <h2 className="text-center font-semibold text-xl text-black pb-4">
          Toggle Theme
        </h2>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={() =>
              setThemeMode((prev) => (prev === "dark" ? "light" : "dark"))
            }
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-amber-400 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>

      {/* <button
        className="p-4 rounded-lg text-black font-bold bg-amber-400"
        onClick={() =>
          setThemeMode((prev) => (prev === "dark" ? "light" : "dark"))
        }
      >
        Toggle Theme
      </button> */}
    </>
  );
}

export default ThemeBtn;
