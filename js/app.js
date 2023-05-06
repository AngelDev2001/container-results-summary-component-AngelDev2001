const summaryItems = document.querySelector(".summary__items");

const getData = () => {
  fetch("../data.json")
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error));
};

const setData = (data) => {
  for (const item of data) {
    let containerItem = document.createElement("div");
    containerItem.className = "summary__items-item";
    containerItem.innerHTML = `
                              <div class="data">
                                <figure class="data__img">
                                  <img src="${item.icon}">
                                </figure>
                                <p class="data__category">${item.category}</p>
                              </div>
                              <p class="data__score">
                                <span>${item.score}</span> /
                                <span>100</span>
                              </p>
                            `;
    summaryItems.appendChild(containerItem);
  }
};

getData();
