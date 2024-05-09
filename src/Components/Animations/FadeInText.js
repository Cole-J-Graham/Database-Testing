import { motion } from "framer-motion";
import './FadeInText.css';

const defaultAnimations = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const FadeInText = ({
  text,
  el: Wrapper = "p",
  className,
}) => {
  return (
    <Wrapper className={className}>
        <span className="sr-only">{text}</span>
        <motion.span 
        initial="hidden" 
        animate="visible" 
        transition={{staggerChildren: 0.05}}
        aria-hidden="true"
        >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={defaultAnimations}>{char}</motion.span>
        ))}
        </motion.span>
      </Wrapper>
  );
};

export default FadeInText;