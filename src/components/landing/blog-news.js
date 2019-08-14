import React from "react"
import Article from "./article"

const articles = [
  {
    title: "We live in a fast world and we want everything to be fast.",
    isActive: true,
    creationDate: "May 25, 2018",
  },
  {
    title:
      "Below is the live preview of what we re going to build in the last preview.",
    isActive: false,
    creationDate: "May 29, 2018",
  },
  {
    title:
      "How I found a problem with Angular unit testing and decided to fix it myself.",
    isActive: false,
    creationDate: "July 1, 2019",
  },
]

export default () => (
  <div className="blog-news">
    <p className="blog-news__text">
      I also have a blog, you can read it{" "}
      <a className="blog-news__link" href="/blog">
        here
      </a>
      , and these are the latest articles:
    </p>
    <section className="blog-news__articles">
      {articles.map(article => {
        const articleIndex = articles.indexOf(article)
        const isLastElement = true

        return (
          <Article
            key={articleIndex}
            title={article.title}
            isActive={article.isActive}
            creationDate={article.creationDate}
            addDivider={isLastElement}
          />
        )
      })}
    </section>
  </div>
)
