import React from "react"
import Intro from "../components/landing/intro"
import BlogNews from "../components/landing/blog-news/blog-news"
import About from "../components/landing/about"
import Gallery from "../components/landing/gallery"
import Projects from "../components/landing/projects/projects"
import Contact from "../components/landing/contact"
import Navbar from "../components/landing/navbar"
import Helmet from "../components/shared/helmet"
import "../_sass/index.scss"
import styled from "styled-components"
import device from "../components/shared/device"
import globalStyles from "../components/shared/global-styles"

const LandingMain = styled.main`
  background-color: ${globalStyles.backgroundColor} !important;
  color: ${globalStyles.primaryColor} !important;
  margin: 0 auto;
  padding: 0 6rem 3rem 6rem;
  display: grid;
  grid-template-columns: 10% auto 15%;
  position: relative;
  grid-template-rows: 12vh auto;
  grid-template-areas:
    "nav ."
    "nav intro"
    "nav blog-news"
    "nav about"
    "nav gallery"
    "nav projects"
    "nav contact";

  @media ${device.phone} {
    padding: 0 1.5rem 1.5rem 1.5rem;
    grid-template-columns: 30% auto;
    grid-template-areas:
      "nav nav"
      "intro intro"
      "blog-news blog-news"
      "about about"
      "gallery gallery"
      "projects projects"
      "contact contact";
  }

  @media ${device.tabletPortrait} {
    padding: 0rem 3rem 3rem 3rem;
    grid-template-columns: 30% auto;
    grid-template-areas:
      "nav nav"
      "intro intro"
      "blog-news blog-news"
      "about about"
      "gallery gallery"
      "projects projects"
      "contact contact";
  }
`

export default () => (
  <LandingMain>
    <Navbar></Navbar>
    <Helmet></Helmet>
    <Intro></Intro>
    <BlogNews></BlogNews>
    <About></About>
    <Gallery></Gallery>
    <Projects></Projects>
    <Contact></Contact>
  </LandingMain>
)
