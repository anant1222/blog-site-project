const { Articles } = require("../data/db");

async function createArticle(article) {
  if (!article.title) {
    return new Error("title missin g");
  }

  if (!article.body) {
    return new Error("body missing ");
  }

  await Articles.create({
    title: article.title,
    // ...other field
  });
}

module.exports = {
  createArticle,
};
