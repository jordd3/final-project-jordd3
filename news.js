document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "pub_82855ac4e0a624a067eaf6690a3abbd7f70da"; // Replace with your actual API key from https://newsdata.io/register
  const endpoint = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=volunteer&language=en`;

  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const newsContainer = document.getElementById("newsList");
      newsContainer.innerHTML = ""; // Replace fallback content

      data.results.slice(0, 5).forEach((article) => {
        const div = document.createElement("div");
        div.classList.add("news-article");
        div.innerHTML = `
          <h3><a href="${article.link}" target="_blank">${article.title}</a></h3>
          <p>${article.description || "No description available."}</p>
        `;
        newsContainer.appendChild(div);
      });
    })
    .catch((error) => {
      console.error("API failed. Using static fallback.", error);
    });
});
