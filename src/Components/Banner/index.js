import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import bannerImg from './mahoheader2.png'
import{ Button, ButtonGroup} from '@material-ui/core';
import _Divider from '@material-ui/core/Divider';



const Wrapper = styled.div`
  background-color: white;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  > div:first-child {
    margin-bottom: 10px;
  }
`

const Line = styled(_Divider)`
  width: 100%;
`

const Banner = () => {
  
  
  return (
    <>
      <Wrapper>
        <Button 
          size="large" 
          variant="contained" 
          color="primary"
          type="button" 
        >
          創建新房間
        </Button>

        <ButtonGroup size="large" variant="text" color="primary" aria-label="text primary button group">
          <Button>黑名單</Button>
          <Link to="/signin"><Button>登入</Button></Link>
          <Button>個人頁面</Button>
        </ButtonGroup>
      </Wrapper>

      <Line />
    </>
  )
}

export default Banner;