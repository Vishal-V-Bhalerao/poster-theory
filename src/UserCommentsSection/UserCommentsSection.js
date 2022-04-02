import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CommentCard from './CommentCard';
import TypeInfo from '../TypeSection/TypeInfo/TypeInfo';
import backgroundAnimation from '../resourses/svg/backgroundAnimation.svg'
const useStyle = makeStyles({
    CommentContainerDiv: {
        width: '90vw',
        alignSelf: 'center',
        margin: 'auto',
        borderRadius: '2px',
        height: '70vh',
        padding: '30px',
    },
    commentHolder: {
        display: 'flex',
        justifyContent: 'center'
    }
})

export default function UserCommentsSection() {
    const style = useStyle();
    return (
        <React.Fragment>
            <div
             style={{
                backgroundImage: `url(${backgroundAnimation})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                height : '140vh',
            }}>
                <TypeInfo title="What People Are Saying" subTitle="" ></TypeInfo>
                <div className={style.CommentContainerDiv}>
                    <div className={style.commentHolder}>
                        <CommentCard></CommentCard>
                        <CommentCard></CommentCard>
                    </div>
                    <div className={style.commentHolder}>
                        <CommentCard></CommentCard>
                        <CommentCard></CommentCard>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}