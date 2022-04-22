import { motion } from "framer-motion";
import { Wrapper } from "../../assets/atoms/Wrapper";
import { Container } from "../../assets/atoms/Container";
import { pageVariants } from "../../assets/variants/pageVariants";

function About() {
  return (
    <Container
      as={motion.div}
      variants={pageVariants}
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
