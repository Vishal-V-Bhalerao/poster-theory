import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FooterList from './FooterList';
import logoDark from '../resourses/PosterTheoryDark.png'
import TypeInfo from '../TypeSection/TypeInfo/TypeInfo';
const FooterListArray = [
    {
        title: 'EXPLORE',
        itemList: [
            { name: "Home", link: '#' },
            { name: "Accessment Test", link: '#' },
            { name: "Resourses", link: '#' },
            { name: "About Us", link: '#' },
            { name: "Contact Us", link: '#' }

        ]
    },
    {
        title: 'VISIT',
        itemList: [
            { name: "Gajanan Nagar, lane 1 \nPimple gurav, Pune-411027 ", link: '#' },
            { name: "9028553570 \nvishal.pitts@gmail.com ", link: '#' },
        ]
    },
    {
        title: 'FOLLOW US',
        itemList: [
            { name: "Instagram", link: '#' },
            { name: "Facebook", link: '#' },
            { name: "LinkedIn", link: '#' },
        ]
    },
    {
        title: 'LEGAL',
        itemList: [
            { name: "Terms", link: '#' },
            { name: "Privacy", link: '#' },
        ]
    },

]
const useStyle = makeStyles({
    preFooter: {
        height: '35%',
        backgroundColor: '#18181A',
        padding: '1px'
    },
    mainFooter: {
        display: 'flex',
        height: '60%'
    },
    infoFooterDiv: {
        flexGrow: 2,
        height: '100%'
    },
    listFooterDiv: {
        flexGrow: 1,
        height: '100%',
        paddingTop: '40px'
    },
    akatsuki: {
        display: 'inline-block',
        float: 'right',
        fontSize: '0.5em',
        paddingTop: '10px',
        marginRight: '5px'
    },
    logoDiv: {
        backgroundImage: `url(${logoDark})`,
        height: '195px',
        width: '200px',
        backgroundSize: 'cover',
        display: 'inline-block',
        marginLeft: '3vw',
        marginTop: '50px',

    },
    buttonParent: {
        display: 'flex',
        justifyContent: 'center',
    },
    footerButton: {
        color: 'white',
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontSize: '80%',
        display: 'inline-block',
        padding: '15px 18px 15px 18px',
        border: '2px solid white',
        /*underline effect*/
        transition: 'background-color 0.5s, color 0.5s',
        '&:hover': {
            backgroundColor: 'white',
            color: 'black',
        }
    }


})

export default function FooterSection() {
    const style = useStyle();
    const subTitle = "Simple video guide thats walk you through Test as well as result analysis ";

    const FooterNodes = FooterListArray.map(ul => {
        return (
            <div className={style.listFooterDiv}>
                <FooterList title={ul.title} itemList={ul.itemList} ></FooterList>
            </div>
        )
    })

    return (
        <div
            style={{
                height: '100vh',
                backgroundColor: '#000000'
            }}>
            <div className={style.preFooter}>
                <TypeInfo title='Start Your Excam Now' color="white" subTitle={subTitle} ></TypeInfo>
                <div className={style.buttonParent} >
                    <a className={style.footerButton} href="www.google.com">Start Test</a>
                </div>
            </div>
            <div className={style.mainFooter}>
                <div className={style.infoFooterDiv} >
                    <div className={style.logoDiv} ></div>
                </div>
                {FooterNodes}
            </div>
            <div><span className={style.akatsuki} >@2020 Akatsuki. All Rights Reserved</span></div>
        </div>
    )
}