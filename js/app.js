/*
 * This repo is for education purposes.
 * You are free to copy and use the code as you wish, I only ask you get you
 * own API key at https://newsapi.org/
 * */
const heroBannerContent = document.querySelector(".jsHeroBannerContent");

const fetchNews = apiKey => {
  const proxyUrl = "https://cors-anywhere.herokuapp.com";
  const api = `${proxyUrl}/https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`;
  const url = new URL(api);

  fetch(url)
    .then(response => response.json())
    .then(json => {
      const articles = json.articles;
      renderCards(articles);
    })
    .catch(error => console.log(error.message));
};

const news = fetchNews("4bf001f99d6d424a9b3e683d28593d31");

const renderCards = articles => {
  if (articles) {
    articles.forEach((article, i) => {
      let html = `
        <div class="highlight-card highlight-card-${i}"
          style="background: url('${article.title}') no-repeat center center">
          <h2>${article.title}</h2>
          <p>${article.description}</p>
        </div>
      `;
      heroBannerContent.innerHTML += html;
    });
  } else {
    heroBannerContent.innerHTML = "no articles sorry";
  }
};
