import React from "react";
import { Grid, Image, Text } from "../elements";

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex>
          <Image shape="circle" src={props.src} />
          <Text bold>{props.user_info.user_name}</Text>
          <Text>{props.insert_dt}</Text>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.src} />
        </Grid>
        <Grid padding="16px">
          <Text bold>댓글 {props.comment_cnt}개</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

// props로 데이터를 받아올때 부모가 정보를 주지 못할경우가 생기게 된다면?
// defaultProps로 오류나 화면이 깨질질 일이 없게 기본값을 미리 넘겨주어 props가 없어도 오류가 날 일이 없다.
Post.defaultProps = {
  user_info: {
    user_name: "suin",
    user_profile:
      ".http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
  },
  image_url:
    ".http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
  contents: "저의 이모티콘입니다!",
  comment_cnt: 10,
  insert_dt: "2021-11-29 10:00:00",
};

export default Post;
