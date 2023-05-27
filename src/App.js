import './App.css';
import { useState } from 'react';
import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Banner from './Components/Banner';
import Notice from './Components/Notice';
import Search from './Components/Search';
import Signin from './Components/Signin';

const Wrapper = styled.div`
  font-family: 'Noto Sans TC', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fefffb;
`

const Home = () => {
  const [content, setContent] = useState(undefined)
  const [category, setCategory] = useState(undefined)
  const [tags, setTags] = useState([])

  return (
    <div>
      <Wrapper>
        <Banner />
        <Notice />
        <Search content={content} setContent={setContent} category={category} setCategory={setCategory} tags={tags} setTags={setTags} />
      </Wrapper>
    </div>
  )
}

const App = () => {
  return(
    <Router>
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
