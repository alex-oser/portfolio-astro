import { forwardRef, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Typography, useMediaQuery } from '@mui/material';
import me from '../../assets/me.png';
import sadie from '../../assets/sadie.png';

const PREFIX = 'Profile';

const classes = {
  root: `${PREFIX}-root`,
  textContainer: `${PREFIX}-textContainer`,
  flex: `${PREFIX}-flex`,
  images: `${PREFIX}-images`,
  sadie: `${PREFIX}-sadie`,
  me: `${PREFIX}-me`,
};

const Root = styled('div')({
  [`&.${classes.root}`]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignSelf: 'center',
  },
  [`& .${classes.textContainer}`]: {
    alignSelf: 'center',
    // Take roughly half the row so the heading + tagline wrap aggressively.
    flex: 1,
    minWidth: 0,
    maxWidth: '50%',
  },
  [`& .${classes.flex}`]: {
    display: 'flex',
    alignItems: 'center',
  },
  [`& .${classes.images}`]: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
    minWidth: 0,
    gap: 8,
  },
  // Both images scale down to fit their container instead of overflowing.
  // minWidth: 0 lets the img flex items shrink below their intrinsic width.
  [`& .${classes.sadie}`]: {
    width: 360,
    maxWidth: '100%',
    minWidth: 0,
    height: 'auto',
    objectFit: 'contain',
  },
  // Capped smaller so "me" doesn't dominate, and shrinks with the viewport.
  [`& .${classes.me}`]: {
    width: 420,
    maxWidth: '100%',
    minWidth: 0,
    height: 'auto',
    objectFit: 'contain',
  },
});

export const Profile = forwardRef<HTMLSpanElement>((_props, ref) => {
  return (
    <Typography variant="h5">
      I like to build things, climb things, and throw things for <span ref={ref}>Sadie</span>
    </Typography>
  );
});

export const About = () => {
  const fromRef = useRef<HTMLSpanElement>(null);
  const fromRefMobile = useRef<HTMLSpanElement>(null);

  const smDown = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
  // Below md there isn't room for both, so we drop "me" and keep Sadie.
  const mdDown = useMediaQuery((theme: any) => theme.breakpoints.down('md'));

  return (
    <Root className={classes.root}>
      <div className={classes.flex}>
        <div className={classes.textContainer}>
          <Typography variant="h3">Hi, I'm Alex</Typography>
          {!smDown && <Profile ref={fromRef} />}
        </div>
        <div className={classes.images}>
          <img className={classes.sadie} src={sadie.src} alt="sadie" loading="eager" />
          {!mdDown && <img className={classes.me} src={me.src} alt="me" loading="eager" />}
        </div>
      </div>
      {smDown && <Profile ref={fromRefMobile} />}
    </Root>
  );
};
