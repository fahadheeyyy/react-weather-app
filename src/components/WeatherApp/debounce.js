import React, { useState, useCallback, useRef, useEffect } from "react";

const BASE_URL = `https://api.nationalize.io/?name=`;

const debounce = (func, wait) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

function App() {
  const [data, setData] = useState();

  const inputElem = useRef(null);

  const fetchNameResults = () => {
    console.log("fetch data here...........");
  };

  const handleSearch = useCallback(
    debounce((inputVal) => fetchNameResults(inputVal), 2000),
    []
  );

  // results logged to console for simplicity
  useEffect(() => {
    console.table(data);
  }, [data]);

  return (
    <input
      ref={inputElem}
      onChange={() => handleSearch(inputElem.current?.value)}
    />
  );
}

export default App;
