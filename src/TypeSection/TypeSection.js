import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Background from '../svg/Background'
import backgroundAnimation from '../resourses/svg/backgroundAnimation.svg'
import TypeCard from './TypeCard/TypeCard';
import TypeInfo from './TypeInfo/TypeInfo';
import leader from '../resourses/leader2.png';
import amaeble from '../resourses/amaeble.png'
import analatic from '../resourses/analatical.png'
import artist from '../resourses/artist.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function TypeGrid() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    const cardDetailsArray = [
        {
            key: 0,
            imageSrc: leader,
            typeName: 'Leader'
        },
        {
            key: 2,
            imageSrc: analatic,
            typeName: 'Analytic'
        },
        {
            key: 1,
            imageSrc: amaeble,
            typeName: 'Amaeble'
        },
        {
            key: 3,
            imageSrc: artist,
            typeName: 'Artist'
        }
    ]
    var subTitle = 'Every person has its unique working style influenced by their core values. work style can be generalised in four type Leader, Amaeble, Analytic and Atrtist'
    return (
        // cardDetailsArray.map((value) => (
        //     <TypeCard imageSrc={value.imageSrc}></TypeCard>

        // ))
        <React.Fragment>
            {/* <Background></Background> */}
            <div
                style={{
                    backgroundImage: `url(${backgroundAnimation})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    height : '140vh'
                }}>
                <TypeInfo title='Four types of Personality' subTitle={subTitle} ></TypeInfo>
                <Grid container justify="center">
                    {cardDetailsArray.map((value) => (
                        <TypeCard typeName={value.typeName} imageSrc={value.imageSrc}></TypeCard>
                    ))}
                </Grid>
            </div>

        </React.Fragment>
    );
}
