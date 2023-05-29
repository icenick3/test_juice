import React from 'react';
import {comments, comments2, comments3} from "./commentsArray";
import './Comments.css'

const Comments = () => {


    return (
        <div id="comments">
            <div className="commentsContainer">
                {comments.map(comment =>

                    <div className="comment">
                        <img className="imgComment" src={comment.img} alt=""/>
                        <h2>{comment.name}</h2>
                        <img className="imgStars" src={comment.stars} alt=""/>
                        <p>{comment.comment}</p>
                    </div>)}
            </div>
            <div className="commentsContainer">
                {comments2.map(comment =>

                    <div className="comment">
                        <img className="imgComment" src={comment.img} alt=""/>
                        <h2>{comment.name}</h2>
                        <img className="imgStars" src={comment.stars} alt=""/>
                        <p>{comment.comment}</p>
                    </div>)}
            </div>
            <div className="commentsContainer">
                {comments3.map(comment =>

                    <div className="comment">
                        <img className="imgComment" src={comment.img} alt=""/>
                        <h2>{comment.name}</h2>
                        <img className="imgStars" src={comment.stars} alt=""/>
                        <p>{comment.comment}</p>
                    </div>)}
            </div>
        </div>
    );
};

export default Comments;