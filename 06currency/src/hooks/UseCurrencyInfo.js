import { useState, useEffect } from "react";

function UseCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((resp) => resp.json())
      .then((result) => setData(result[currency]));
    //update the data array with currency in parsed data object
  }, [currency]);

  return data;
}

export default UseCurrencyInfo;
