import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PhoneHistoryData from '../data/phoneHistory';


const TimelineItem = ({ item, index, containerRef }) => {
  const itemRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: itemRef,
    container: containerRef,
    offset: ["start end", "center center"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [index % 2 === 0 ? -50 : 50, 0]
  );
  
  return (
    <motion.div
      ref={itemRef}
      className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
      style={{ opacity, x }}
    >
      <div className="timeline-content">
        <div className="timeline-year">{item.year}</div>
        <h3>{item.name}</h3>
        <div className="price-tag">Model: {item.model}</div>
        <p>{item.description}</p>
        <div className="timeline-image">
          <img src={item.imageUrl} alt={item.name} />
        </div>
      </div>
      <div className="timeline-dot"></div>
    </motion.div>
  );
};

const PhoneHistory = () => {
  const containerRef = useRef(null);
  
  return (
    <div className="relative">
      <style jsx>{`
        .timeline {
          padding: 3rem 0;
          position: relative;
          overflow: hidden;
          height: 100%;
          overflow-y: auto;
          background-color: #0f172a; /* Dark bluish background color */
          color: #e2e8f0;
        }

        .container {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .timeline-line {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, #60a5fa, #60a5fa, transparent);
          z-index: 1;
          animation: pulseLine 4s infinite;
        }

        @keyframes pulseLine {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }

        .timeline-item {
          margin-bottom: 3rem;
          position: relative;
          width: 50%;
        }

        .timeline-item.left {
          padding-right: 2rem;
          align-self: flex-start;
          margin-left: 0;
          margin-right: auto;
        }

        .timeline-item.right {
          padding-left: 2rem;
          align-self: flex-end;
          margin-left: auto;
          margin-right: 0;
        }

        .timeline-content {
          background-color: #1e293b; /* Dark blue content background */
          padding: 1.5rem;
          border-radius: 0.75rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
          position: relative;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: center;
          backdrop-filter: blur(8px);
          color: #e2e8f0; /* Light text for dark background */
        }

        .timeline-content:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(96, 165, 250, 0.3);
        }

        .timeline-year {
          display: inline-block;
          padding: 0.25rem 1rem;
          background: linear-gradient(135deg, #60a5fa, #3b82f6);
          color: white;
          font-weight: 700;
          border-radius: 9999px;
          margin-bottom: 0.75rem;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
          box-shadow: 0 3px 10px rgba(59, 130, 246, 0.3);
        }

        .timeline-content h3 {
          font-size: 1.75rem;
          margin-bottom: 0.75rem;
          color: #f8fafc; /* Light color for headings */
          font-weight: 700;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .timeline-content h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #60a5fa, transparent);
          transition: width 0.6s ease;
        }

        .timeline-content:hover h3::after {
          width: 100%;
        }

        .timeline-content p {
          margin-bottom: 1rem;
          color: #cbd5e1; /* Light gray for paragraph text */
          line-height: 1.6;
          transition: color 0.3s ease;
        }

        .timeline-content:hover p {
          color: #f1f5f9; /* Lighter text on hover */
        }

        .price-tag {
          display: inline-block;
          font-weight: 600;
          color: #60a5fa; /* Blue for price tags */
          margin-bottom: 1rem;
          font-size: 1.1rem;
          position: relative;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .timeline-content:hover .price-tag {
          background-color: #3b82f6;
          color: white;
          transform: scale(1.05);
          box-shadow: 0 3px 10px rgba(59, 130, 246, 0.3);
        }

        .timeline-image {
          width: 100%;
          border-radius: 0.5rem;
          overflow: hidden;
          margin-top: 0.75rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          transition: all 0.5s ease;
          transform: perspective(1000px) rotateX(0);
        }

        .timeline-content:hover .timeline-image {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
          transform: perspective(1000px) rotateX(5deg);
        }

        .timeline-image img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.7s ease, filter 0.7s ease;
        }

        .timeline-content:hover .timeline-image img {
          transform: scale(1.05);
        }

        .timeline-dot {
          position: absolute;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: radial-gradient(circle, #60a5fa, #3b82f6);
          top: 30px;
          box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.2);
          z-index: 2;
          transition: all 0.5s ease;
        }

        .timeline-dot::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
          background-color: #f8fafc;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .timeline-item.left .timeline-dot {
          right: -12px;
        }

        .timeline-item.right .timeline-dot {
          left: -12px;
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
            transform: none;
          }
          
          .timeline-item {
            width: auto;
            padding-left: 2rem;
            margin-left: 20px !important;
            margin-right: 0 !important;
          }
          
          .timeline-item.left,
          .timeline-item.right {
            padding-right: 0;
            padding-left: 2rem;
          }
          
          .timeline-item.left .timeline-dot,
          .timeline-item.right .timeline-dot {
            left: -12px;
            right: auto;
          }
        }
      `}</style>

      <main className="phone">
        <section className="timeline" ref={containerRef}>
          <div className="container">
            <div className="timeline-line"></div>
            
            {PhoneHistoryData.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index}
                containerRef={containerRef}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default PhoneHistory;
