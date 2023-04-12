  // news api
  const KEY = 'lCxcgARC80c4FgP3vVqbkFwLqMaQjLnQv-x3rFbQxqY';
  const COASTAL_AREA = 'carlsbad beach';
  
  fetch(`https://api.newscatcherapi.com/v2/search?q=${COASTAL_AREA}&lang=en&sort_by=relevancy&page=1`, {
    headers: {
      'x-api-key': KEY
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const articles = data.articles;
    const articleList = document.querySelectorAll('.article');
    for (let i = 0; i < articleList.length; i++) {
      const article = articles[i];
      articleList[i].querySelector('img').src = article.media;
      articleList[i].querySelector('h3').innerText = article.title;
      articleList[i].querySelector('p').innerText = article.summary;
      articleList[i].querySelector('.read-more').href = article.link;
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch request:', error);
  });
  