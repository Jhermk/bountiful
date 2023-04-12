// news api
const KEY = "cb7488eff8ed4a3aafa4380e32f97eb4";
const COASTAL_AREA = "carlsbad beach";

fetch(`https://newsapi.org/v2/everything?q=${COASTAL_AREA}&apiKey=${KEY}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const articles = data.articles;
    const articleList = document.querySelectorAll(".article");
    for (let i = 0; i < articleList.length; i++) {
      const article = articles[i];
      articleList[i].querySelector("img").src = article.urlToImage;
      articleList[i].querySelector("h3").innerText = article.title;
      articleList[i].querySelector("p").innerText = article.description;
      articleList[i].querySelector(".read-more").href = article.url;
    }
  })
  .catch((error) => {
    console.error("There was a problem with the fetch request:", error);
  });
