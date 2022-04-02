import React from "react";

import JSONtoCSV from "./JsonToCsv";

// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

function App() {
  return (
    <JSONtoCSV />    
  );
}
export default App;
