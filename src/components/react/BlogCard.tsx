import { CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CardLayout } from "./CardLayout";
import { toSlug, formatDate, type BlogMeta } from "./types";

const PREFIX = "BlogCard";

const classes = {
  link: `${PREFIX}-link`,
};

const StyledCardLayout = styled(CardLayout)(() => ({
  [`& .${classes.link}`]: {
    textDecoration: "none",
    height: "100%",
  },
}));

export const BlogCard = ({ title, caption, date }: BlogMeta) => {
  const path = `/blog/${toSlug(title)}`;

  return (
    <StyledCardLayout>
      <a href={path} className={classes.link}>
        <CardContent style={{ color: "white" }}>
          <Typography variant="h6">
            <strong>{title}</strong>
          </Typography>
          <Typography variant="subtitle2">
            {formatDate(date)}
          </Typography>
          {caption && <Typography>{caption}</Typography>}
        </CardContent>
      </a>
    </StyledCardLayout>
  );
};
