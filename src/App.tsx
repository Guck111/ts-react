import { hot } from "react-hot-loader/root"
import { withTranslation } from "react-i18next"
import React from "react"
import "./App.css"
import { Header } from "./components/Header"
import { Navbar } from "./components/Navbar"
import { Profile } from "./components/Profile"
import { DialogsContainer } from "./components/Dialogs"
import { BrowserRouter, Route } from "react-router-dom"
import styled from "@emotion/styled"
import { UsersContainer } from "./components/Users"

const AppComponent = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Navbar />
        <Content>
          <Route path="/dialogs" component={DialogsContainer} />
          <Route path="/profile" component={Profile} />
          <Route path="/users" component={UsersContainer} />
        </Content>
      </Wrapper>
    </BrowserRouter>
  )
}

export const App = hot(withTranslation()(AppComponent))

const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  width: 1200px;
  grid-template-areas: "h h" "n c";
  grid-template-rows: 60px 1fr;
  grid-template-columns: 2fr 10fr;
`

const Content = styled.div`
  grid-area: c;
  background-color: cornflowerblue;
`
