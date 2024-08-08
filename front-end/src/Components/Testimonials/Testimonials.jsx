import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "My cat started giving me high-fives after I found this site. Coincidence? I think not.",
    author: "William Butcher",
  },
  {
    quote:
      "I stayed up all night binge-shopping. My credit card company thinks my identity was stolen. Totally worth it!",
    author: "Cherry Darling",
  },
  {
    quote:
      "This site is more addictive than my morning coffee. And I REALLY love coffee.",
    author: "Richard Suka",
  },
];

const Testimonials = () => {
  return (
    <div className="testimontaltoptext">
      <h2>TESTIMONIALS</h2>

      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <p className="quote">&ldquo;{testimonial.quote}&rdquo;</p>
            <p className="author">&mdash; {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
