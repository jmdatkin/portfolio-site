import { motion } from 'framer-motion';

function Animated(props: any) {
    return ( 
          <motion.div className="w-full h-full relative" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            {props.children}
          </motion.div>
     );
}

export default Animated;