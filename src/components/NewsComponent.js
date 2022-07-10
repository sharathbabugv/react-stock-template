import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const NewsComponent = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          width: "100%",
          height: "auto",
        },
      }}
    >
      <Card sx={{ mt: 2, mb: 2 }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.path}
            alt="green iguana"
          ></CardMedia>
          <CardContent>
            <Typography
              noWrap
              variant="h6"
              component="div"
              style={{ textOverflow: "ellipsis" }}
            >
              {props.title}
            </Typography>
            <Typography
              variant="body2"
              style={{ textOverflow: "ellipsis" }}
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
              }}
              color="text.secondary"
            >
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default NewsComponent;
