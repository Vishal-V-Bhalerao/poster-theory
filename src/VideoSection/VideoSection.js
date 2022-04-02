import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from './VideoPlayer'
import backgroundAnimation from '../resourses/svg/rightBackgroundAnimation.svg'
import './video-section.css'
import TypeInfo from '../TypeSection/TypeInfo/TypeInfo';
const useStyle = makeStyles({

}) 

export default function VideoSection() {
    const style = useStyle();
    const subTitle = "Simple video guide thats walk you through Test as well as result analysis "
    return(
        <div className="videosection"
        style={{
            backgroundImage: `url(${backgroundAnimation})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height : '140vh',
            backgroundPosition :'right'
        }}>
           <TypeInfo title='Exam Walkthrough' subTitle={subTitle} ></TypeInfo>
            <VideoPlayer></VideoPlayer>
        </div>
    )
}