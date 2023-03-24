const UrlShortener = (url, length) => {
  let result = "";

  const urlLength = url.length;
  let counter = 0;
  while (counter < length) {
    result += url.charAt(Math.floor(Math.random() * urlLength));
    counter += 1;
  }
  console.log("The small urls: https://www." + result + ".com;");
  return result;
};

UrlShortener(
  "https://www.google.com/search?q=array+element+swap+javascript&rlz=1C1GCEB_enRW1043RW1043&oq=Array+Element+Swapper+j&aqs=chrome.1.69i57j0i22i30l2j0i390i650l2.12288j0j4&sourceid=chrome&ie=UTF-8",
  5
);
