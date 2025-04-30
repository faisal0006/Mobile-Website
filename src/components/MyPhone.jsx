import { useRef } from 'react'
import { motion , useScroll, useTransform } from 'framer-motion'
import MyPhoneJourney from '../data/myphoneData'
import '../styles/myphone.css'

const PhoneJourney = () => {
  const containerRef = useRef(null)
  
  return (
    <main className="phone">
      <div className="phone-hero">
        <div className="phone-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My Phone Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Exploring my smartphone evolution over the years. From budget-friendly beginnings to premium devices, each phone represents a distinct chapter in my tech experience.
          </motion.p>
        </div>
      </div>
      
      <section className="timeline" ref={containerRef}>
        <div className="container">
          <div className="timeline-line"></div>
          
          {MyPhoneJourney.map((item, index) => (
            <TimelineItem 
              key={index} 
              item={item} 
              index={index} 
              containerRef={containerRef}
            />
          ))}
        </div>
      </section>
      
      <section className="phone-quote">
        <div className="container">
          <div className="quote-content">
            <motion.blockquote
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <p>"Each smartphone represents not just a device, but a chapter in my digital life story."</p>
              <cite>- Md.Faisal</cite>
            </motion.blockquote>
          </div>
        </div>
      </section>
    </main>
  )
}

const TimelineItem = ({ item, index, containerRef }) => {
  const itemRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: itemRef,
    container: containerRef,
    offset: ["start end", "center center"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const x = useTransform(
    scrollYProgress, 
    [0, 0.5], 
    [index % 2 === 0 ? -50 : 50, 0]
  )
  
  return (
    <motion.div 
      ref={itemRef}
      className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
      style={{ opacity, x }}
    >
      <div className="timeline-content">
        <div className="timeline-year">Purchased Year: {item.year}</div>
        <h3>{item.name}</h3>
        <p>{item.dis}</p>
        <div className="price-tag">Purchased Price: ₹{item.price}</div>
        <div className="timeline-image">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="timeline-dot"></div>
      </div>
    </motion.div>
  )
}

export default PhoneJourney
