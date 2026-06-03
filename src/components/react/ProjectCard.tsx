import { CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CardLayout } from './CardLayout';
import { ProjectStatus } from './ProjectStatus';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { toSlug, type ProjectMeta } from './types';

const PREFIX = 'ProjectCard';

const classes = {
  layout: `${PREFIX}-layout`,
  link: `${PREFIX}-link`,
  icon: `${PREFIX}-icon`,
};

const StyledCardLayout = styled(CardLayout)({
  [`&.${classes.layout}`]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  [`& .${classes.link}`]: {
    textDecoration: 'none',
    height: '100%',
  },
  [`& .${classes.icon}`]: {
    alignItems: 'center',
  },
});

const linkStyle = { display: 'flex ' };
const GitHubLink = ({ url }: { url: string }) => (
  <a
    target="_blank"
    rel="noopener"
    href={url}
    onClick={(e) => e.stopPropagation()}
    aria-label="GitHub repo"
    style={linkStyle}
  >
    <GitHubIcon color="primary" />
  </a>
);

const SiteLink = ({ url }: { url: string }) => (
  <a
    target="_blank"
    rel="noopener"
    href={url}
    onClick={(e) => e.stopPropagation()}
    aria-label="Live site link"
    style={linkStyle}
  >
    <LanguageIcon color="primary" />
  </a>
);

export const ProjectCard = ({ frontmatter }: { frontmatter: ProjectMeta }) => {
  const { title, status, caption, link, repo } = frontmatter;

  const path = `/projects/${toSlug(title)}`;
  return (
    <StyledCardLayout className={classes.layout}>
      <a href={path} className={classes.link}>
        <CardContent style={{ color: 'white' }}>
          <div style={{ display: 'flex' }}>
            <Typography variant="h6">
              <strong>{title}</strong>
            </Typography>
            <ProjectStatus status={status} />
          </div>
          <Typography>{caption}</Typography>
        </CardContent>
      </a>
      <CardActions>
        {repo && <GitHubLink url={repo} />}
        {link && <SiteLink url={link} />}
      </CardActions>
    </StyledCardLayout>
  );
};
