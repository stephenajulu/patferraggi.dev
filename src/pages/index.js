import React from "react"
import Intro from "../components/landing/intro"
import Layout from "../components/shared/layout"
import Divider from "../components/shared/divider"
import BlogNews from "../components/landing/blog-news/blog-news"
import About from "../components/landing/about"
import Gallery from "../components/landing/gallery"
import Projects from "../components/landing/projects/projects"
import Contact from "../components/landing/contact"
import SEO from "../components/shared/seo"

export default () => (
  <Layout>
    <SEO></SEO>
    <Intro></Intro>
    <Divider></Divider>
    <BlogNews></BlogNews>
    <About></About>
    <Gallery></Gallery>
    <Divider></Divider>
    <Projects></Projects>
    <Contact></Contact>
  </Layout>
)
