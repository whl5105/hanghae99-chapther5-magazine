import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, Button } from "../elements";

const Sigup = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" blod>
          회원가입
        </Text>
        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요"
            _onChange={() => {
              console.log("아이디 입력 했어유");
            }}
          ></Input>
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="닉네임"
            placeholder="닉네임을 입력해주세요"
            _onChange={() => {
              console.log("닉네임 입력 했어유");
            }}
          ></Input>
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            _onChange={() => {
              console.log("비밀번호 입력 했어유");
            }}
          ></Input>
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요"
            _onChange={() => {
              console.log("비밀번호 맞아유");
            }}
          ></Input>
        </Grid>
        <Button text="회원가입하기"></Button>
      </Grid>
    </React.Fragment>
  );
};
Sigup.defaultProps = {};
// const  = styled.

export default Sigup;
