import React from "react"
import styled from "styled-components"
import globalStyles from "../../../config/style-variables"
import device from "../../../config/device"
import IcomoonReact from "icomoon-react"
import iconSet from "../../../../content/assets/icons/selection.json"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const ArticleLink = styled.a`
  color: ${globalStyles.primaryColor};

  :hover {
    color: ${globalStyles.secondaryColor};
  }

  @media ${device.small} {
    margin-bottom: 1rem;
  }
`

const ArticleTitle = styled.div`
  padding-top: 1rem;
  padding-bottom: 2rem;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -1.28px;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media ${device.small} {
    font-size: 1.5em;
    line-height: 30px;
    letter-spacing: -1.13806px;
  }
`

const StyledPreview = styled(Img)`
  height: 412px;
  margin: 0 2.5rem 0 0;
  width: 100%;

  @media ${device.small} {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    display: block;
    margin: 2rem auto 2rem auto;
  }

  @media ${device.medium} {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    display: block;
    margin: 2rem auto 2rem auto;
  }

  @media ${device.large} {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    display: block;
    margin: 2rem auto 2rem auto;
  }
`

const ArticleTextContainer = styled.div`
  margin-top: 1.5rem;
  margin-right: 4rem;

  @media ${device.small} {
    margin-right: 0;
  }
`

const RenderPreviewIfItMatters = ({ preview, shouldRenderPreview }) => {
  return shouldRenderPreview ? (
    <StyledPreview alt="article-preview" fixed={preview}></StyledPreview>
  ) : null
}

export default props => {
  const ArticleWrapper = styled.article`
    display: flex;
    flex-direction: row;
    width: ${props.small ? "50%" : "100%"};

    @media ${device.small} {
      flex-direction: column;
    }

    @media ${device.medium} {
      flex-direction: column;
    }

    @media ${device.large} {
      flex-direction: column;
    }
  `

  const data = useStaticQuery(graphql`
    query {
      file: file(absolutePath: { regex: "/2020.jpg/" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
          }
        }
      }
    }
  `)

  return (
    <ArticleWrapper>
      <RenderPreviewIfItMatters
        shouldRenderPreview={props.showPreview}
        preview={data.file.childImageSharp.fluid}
      ></RenderPreviewIfItMatters>
      <ArticleTextContainer>
        <p>{props.creationDate}</p>
        <ArticleTitle>
          <ArticleLink href={props.link}>{props.title}</ArticleLink>
          <p style={{ marginTop: "auto" }}>
            <ArticleLink
              href={props.link}
              style={{ color: globalStyles.secondaryColor }}
            >
              Leer mas{" "}
              {
                <IcomoonReact
                  iconSet={iconSet}
                  size={"1em"}
                  icon="hand"
                  color={globalStyles.secondaryColor}
                />
              }
            </ArticleLink>
          </p>
        </ArticleTitle>
      </ArticleTextContainer>
    </ArticleWrapper>
  )
}
