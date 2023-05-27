import React from 'react';
import styled from 'styled-components';

import _Button from '@material-ui/core/Button';
import _Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > div:first-child {
    margin-bottom: 50px;
    margin-top: 100px;
  }
`

const Card = styled(_Card)`
  width: 500px;
  text-align: center;
`

const Button = styled(_Button)`
  width: 300px;
  height: 50px;
  font-size: 16px !important;
`

const ButtonWrapper = styled.div`
  > * {
      margin-bottom: 30px;
    }
`

const Signin = () => {
  
  
  return (
    <Wrapper>
      <Card>
        <CardContent>
          <Typography variant="h5">
            小魔女Doremi 在線交易工具登入
          </Typography>
          <Typography variant="body2">
            目前登入方式分為
            <br/>
            Google登入及FB登入
          </Typography>
        </CardContent>
      </Card>

      <ButtonWrapper>
        <Typography>
          <GoogleLogin>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<AccountCircleIcon />}
            >
              GOOGLE登入
            </Button>
          </GoogleLogin>
        </Typography>

        <Typography>
          <FacebookLogin>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AccountCircleIcon />}
            >
              FaceBook 登入
            </Button>
          </FacebookLogin>
        </Typography>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Signin;