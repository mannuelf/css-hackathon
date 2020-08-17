/*
 * This repo is for education purposes.
 * You are free to copy and use the code as you wish, I only ask you get
 * your own API key at https://newsapi.org/
 * */
const API_KEY = "4bf001f99d6d424a9b3e683d28593d31";
const heroBannerContent = document.querySelector(".jsHeroBannerContent");

const fetchNews = API_KEY => {
  const proxyUrl = "https://noroffcors.herokuapp.com";
  const api = `${proxyUrl}/https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`;
  const API_URL = new URL(api);

  fetch(API_URL, {
    headers: {
      "x-requested-with": "XMLHttpRequest"
    }
  })
    .then(response => response.json())
    .then(json => {
      const articles = json.articles;
      renderCards(articles);
    })
    .catch(error => console.log(error.message));
};

fetchNews(API_KEY);

const renderCards = articles => {
  if (articles) {
    const fiveArticles = articles.slice(0, 5);
    fiveArticles.forEach((article, i) => {
      let html = `
        <div
          class="item item-${i}"
          style="background-image: url('${article.urlToImage}')">
            <div class="inner">
              <h2 class="title">${article.title}</h2>
              <p class="some-description">${article.description}</p>
              <span class="ribbon">category</span>
            </div>
        </div>
      `;
      heroBannerContent.innerHTML += html;
    });
  } else {
    heroBannerContent.innerHTML = "no articles sorry";
  }
};
