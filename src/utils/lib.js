import { getCode } from "./currency";
import timezoneToCountry from "./timezones.json";

export const formatCurrency = (number, currency = "GHS") => {
  if (Number.isNaN(number)) return "";
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: currency,
    currencyDisplay: "narrowSymbol",
  }).format(number);
};

export const getUserCountry = () => {
  var userTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var tzArr = userTZ.split("/");
  return getCode(timezoneToCountry[tzArr[tzArr.length - 1]]);
};
