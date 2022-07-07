const deviceNum = document.getElementById("deviceNum"),
  deviceContent = document.getElementById("deviceContent"),
  icon = document.getElementById("icon");

const getRandomNumber = (num) => {
  return Math.round(Math.random() * num);
};

console.log(getRandomNumber(224));

icon.addEventListener("click", () => {
  let myGetNumber = getRandomNumber(224);

  deviceNum.innerHTML = `ADVICE #${myGetNumber}`;

  const API_URL = `https://api.adviceslip.com/advice/${myGetNumber}`;

  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      deviceContent.innerHTML = `"${data.slip.advice}"`;
    })
    .catch((err) => {
      console.log("There is an error in the operation!");
    });
});
