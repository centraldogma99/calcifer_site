import * as React from "react"
import styled from "@emotion/styled";

const Main = styled.main`
  color: #232129;
  font-family: -apple-system, Roboto, sans-serif, serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Heading = styled.h1`
`



// markup
const IndexPage = () => {
  return (
    <Main>
      <title>Calcifer</title>
      <h1>Calcifer</h1>
    </Main>
  )
}

export default IndexPage
