import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const makeStyle = makeStyles({
    titleSpan: {
        display : 'block',
        color:'white',
        textDecoration : 'none',
        marginBottom : '30px'
    },
    listItem : {
        listStyleType: 'none',
        marginBottom: '10px',
    },
    liLinkClass : {
        fontSize : '0.7em',
        color: 'white',
        textDecoration : 'none',
        whiteSpace: 'pre-wrap',
        opacity: '85%',
        fontWeight: '300'
    },
    ulContainer : {
        display : 'flex',
        justifyContent :'left'
    }
});

export default function FooterList({ title, itemList }) {
    const styles = makeStyle();

    var listArray = itemList.map((item) => {
        return <li className={styles.listItem} ><a className = {styles.liLinkClass} href={item.link} >{item.name}</a></li>
    })

    return (
        <div className = {styles.ulContainer} >
            <ul>
                <li className= {styles.listItem} >
                    <span className={styles.titleSpan} >{title}</span>
                    <ul>
                        {listArray}
                    </ul>
                </li>
            </ul>
        </div>
    );
}