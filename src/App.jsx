import { useState } from "react";
import Landing from "./pages/Landing";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Landing
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  );
}

export default App;