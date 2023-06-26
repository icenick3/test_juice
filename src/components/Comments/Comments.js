import React from 'react';
import {comments, comments2, comments3} from "./commentsArray";
import './Comments.css'

const Comments = () => {


    return (
        <div className="comBlock">
            <h1 className="revo">Our Customer Reviews</h1>
                {/*<div  id="stars2"><img id="rait" src="https://loveriq.online/sweep/za1/raiting.png" alt=""/>8 Reviews</div>*/}
            <div  id="comments">
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
                    {comments3.map(comment =>

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
            </div>
        </div>
    );
};

export default Comments;