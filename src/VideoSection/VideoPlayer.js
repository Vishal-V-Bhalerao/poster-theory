import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player'

const useStyle = makeStyles({
    videoDiv: {
        margin: '100px auto',
        writingMode: 'vertical-lr',
        boxShadow : '0 0 1.5rem rgba(105,105,105,.5)',
        padding : '100px'
    }
})

export default function VideoPlayer() {
    const style = useStyle();
    return (
        <div className={style.videoDiv}>
            <ReactPlayer url='https://www.youtube.com/watch?v=uA5XuOIilYc' height ='70vh' width = '60vw'>
            </ReactPlayer>
        </div>
    )
}