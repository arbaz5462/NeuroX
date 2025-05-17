import React from 'react';
import './ReviewsSection.css';

const ReviewsSection = () => {
  const dummyReviews = [
    {
      name: "User 1",
      img: "https://via.placeholder.com/80",
      desc: "This platform is game-changing. The assessment felt natural and accurate."
    },
    {
      name: "User 2",
      img: "https://via.placeholder.com/80",
      desc: "Impressed with how quickly I got my results. Very professional experience!"
    },
    {
      name: "User 3",
      img: "https://via.placeholder.com/80",
      desc: "As someone who's always been anxious about health checks, this was easy and reassuring."
    }
  ];

  return (
    <section id="reviews" className="reviews-section">
      <h2 className="reviews-title"> “Here’s What People Are Saying”</h2>
      <div className="reviews-grid">
        {dummyReviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img src={review.img} alt={`${review.name} profile`} className="review-img" />
            <p className="review-desc">{review.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
