import React, { useEffect } from "react"
import styled from "styled-components"
import globalStyles from "../../config/style-variables"
// import { Link } from "gatsby"

// const LinksWrapper = styled.ul`
//   display: flex;
//   flex-direction: column;
// `

export default props => {
  // const StyledLink = styled(props => <Link {...props} />)`
  //   color: ${globalStyles.backgroundColor} !important;
  // `

  useEffect(() => {
    console.log("isOpen changed to ", props.isOpen)
  }, [props.isOpen])

  const SidebarWrapper = styled.section`
    position: fixed;
    top: 0;
    right: 0;
    background-color: ${globalStyles.primaryColor};
    width: 50%;
    height: 100vh;
    opacity: ${props.isOpen ? "1" : "0"};
  `

  // const renderLinks = linksToRender => {
  //   return linksToRender.map(link => {
  //     return (
  //       <StyledLink to={link.to} onClick={`#${link.name}`} key={link.name}>
  //         {link.name}
  //       </StyledLink>
  //     )
  //   })
  // }

  return (
    <SidebarWrapper>
      {/* <LinksWrapper>{renderLinks(props.links, true)}</LinksWrapper> */}
      <button style={{ color: "black" }} id="exit">
        &times;
      </button>
    </SidebarWrapper>
  )
}
