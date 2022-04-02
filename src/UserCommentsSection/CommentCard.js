import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import artist from '../resourses/artist.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        padding: '25px 20px',
        margin: '20px 30px',
    },
    details: {
        display: 'flex',
    },
    content: {
        flex: '1 0 auto',
        width : '0%'
    },
    cover: {
        width: 151,
        height:150,
        flex: '0 1 auto',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    paragraph :{
        fontSize: '0.8em',
        '&::before': {
            content: "hi",
            color: '#CFD8DC',
            background: 'none',
            fontSize: '110px',
            margin: 0,
            padding: 0,
            position: 'absolute',
            left: '-65px',
            top: '-45px',
          }
    },
    userName :{
        float : 'right',
        marginTop : '30px'
    }
}));

export default function CommentCard() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardMedia
                    className={classes.cover}
                    image= {artist}
                    title="Live from space album cover"
                />
                <CardContent className={classes.content}>
                    <p className= {classes.paragraph}>
                    This test change my life. I never thought such
                    simple test help me understand my self,
                    what i love and what to do in future.
                     After thest i found that i am artist type person
                    </p>
                    <Typography className={classes.userName} variant="subtitle1" color="textSecondary">
                       - Mac Miller
                    </Typography>
                </CardContent>
                {/* <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div> */}
            </div>

        </Card>
    );
}
