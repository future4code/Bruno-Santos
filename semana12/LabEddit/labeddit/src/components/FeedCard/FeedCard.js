import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  FeedCardContainer,
  CardHeader,
  BackColor,
  CardFooter,
  LikeImage,
} from "./styled";
import LessButton from "../../assets/LessButton.png";
import PlusButton from "../../assets/PlusButton.png";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 500,
    maxHeight: 400,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

function FeedCard() {
  const classes = useStyles();

  return (
    <FeedCardContainer>
      <Card className={classes.root}>
        <BackColor>
          <CardHeader>
            <h3>Nome do Usuário</h3>
          </CardHeader>
          <CardContent color={"green"}>
            <Typography variant="body2" color="primary" component="p">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardFooter>
            <div>
              <LikeImage src={PlusButton} />
              <LikeImage src={LessButton} />
            </div>
            <p>Comentários</p>
          </CardFooter>
        </BackColor>
      </Card>
    </FeedCardContainer>
  );
}

export default FeedCard;
