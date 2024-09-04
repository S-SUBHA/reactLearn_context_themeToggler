import { useState } from "react";
import Card from "./components/Card.jsx";
import { ThemeContextProvider } from "./contexts/UserContext.js";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  return (
    <>
      <ThemeContextProvider value={{ setThemeMode }}>
        <main
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${themeMode}`}
        >
          <Card />
        </main>
      </ThemeContextProvider>
    </>
  );
}

export default App;
