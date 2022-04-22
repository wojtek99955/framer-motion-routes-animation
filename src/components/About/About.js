import { motion } from "framer-motion";
import { Wrapper } from "../../assets/atoms/Wrapper";
import { Container } from "../../assets/atoms/Container";

function About() {
  const aboutVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };
  return (
    <Container
      as={motion.div}
      variants={aboutVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Wrapper>
        <h1>About us!</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quae
          cum cupiditate voluptatum quia amet consequatur deleniti eos
          blanditiis eum sed quas earum quaerat perspiciatis autem a magnam,
          tenetur vero sapiente quisquam, ipsam facilis repudiandae sequi iusto.
          Corrupti, quas doloribus?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, hic
          vel veniam reprehenderit harum corrupti voluptatum enim ducimus quod
          accusantium officia nesciunt porro libero nam ea maxime consequatur
          placeat cupiditate?
        </p>
      </Wrapper>
    </Container>
  );
}

export default About;
