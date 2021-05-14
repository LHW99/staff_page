import React,{useState}from 'react'
import data from './data'

const Review = () => {
  const [reviews,setReviews] = useState(data)
  const [showReview,setShowReview] = useState(1)

  const forwardReview = () => {
    if(showReview === data.length){
      return setShowReview(1);
    }
    return setShowReview(showReview + 1);
  };

  const backReview = () => {
    if(showReview === 1){
      return setShowReview(data.length);
    }
    return setShowReview(showReview - 1);
  };

  const randomReview = () => {
    let ranRev = Math.ceil(Math.random()*4)
    return setShowReview(ranRev)
  };

  return (
    <article className="review">
      {reviews.map((review)=>{
        const {id, name, job, image, text} = review;
        if(id === showReview){
        return (
          <>
            <div className="img-container"> 
              <img src={image} alt={name} className="person-img"/>
            </div>
            <h2>{name}</h2>
            <h3>{job}</h3>
            <h4>{text}</h4>
          </>
        )}
      })}
      <button className="btn" onClick={()=>backReview()} className="prev-btn"> Back </button>
      <button className="btn" onClick={()=>forwardReview()} className="next-btn"> Next </button>
      <br></br>
      <button className="btn" onClick={()=>randomReview()} className="random-btn">Surprise Me!</button>
    </article>
  )
};

export default Review;