import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const myLocalStyle = makeStyles({
    infoDiv: {
        margin: '50px'
    },
    headerDiv: {
    },
    ParaDiv: {
        width: "700px",
        margin: "50px auto"
    },
    alginMiddle: {
        textAlign: 'center',
        fontWeight: 300

    },
    paraStyle: {
        fontWeight: 300
    }
});

export default function TypeInfo(props) {
    const styles = myLocalStyle();
    return (
        <div className={styles.infoDiv} >
            <div className={styles.headerDiv}>
                <h1 
                 style={{ color : props.color ? props.color : '#555'}}
                className={styles.alginMiddle}>{props.title}</h1> 
            </div>
            <div className={styles.ParaDiv}>
                <p className={styles.alginMiddle}> {props.subTitle}</p>
            </div>
        </div>

    )
}