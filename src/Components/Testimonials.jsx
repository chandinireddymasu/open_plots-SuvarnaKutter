import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonials.css';

const testimonials = [
  {
    name: 'RAJESH KUMAR',
    text: 'Excellent customer service! SK Group guided me through the entire process seamlessly.',
    rating: 5,
  },
  {
    name: 'PRIYA SHARMA',
    text: 'A very professional and dedicated team. I am satisfied with my investment in SK projects.',
    rating: 5,
  },
  {
    name: 'ANIL VERMA',
    text: 'SK Group’s professionalism and commitment to excellence are commendable.',
    rating: 4,
  },
  {
    name: 'SNEHA RAI',
    text: 'The entire investment process was transparent and smooth. Highly recommended!',
    rating: 5,
  }
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2>TESTIMONIALS</h2>
      <p className="subtitle">What Our Clients Say</p>
      <Carousel>
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div className="testimonial-card fade-in">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-name">— {testimonial.name}</p>
              <div className="stars">
                {'★'.repeat(testimonial.rating)}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default TestimonialsSection;
