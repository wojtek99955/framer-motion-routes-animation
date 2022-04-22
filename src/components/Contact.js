import { motion } from "framer-motion";
import styled from "styled-components";
import { Container } from "../assets/atoms/Container";
import { Wrapper } from "../assets/atoms/Wrapper";

const StyledWrapper = styled(Wrapper)`
  textarea {
    margin: 2rem 0;
    width: 100%;
  }
  button {
    background-color: black;
    border: none;
    color: white;
    padding: 0.8rem 1.5rem;
    cursor: pointer;
    display: block;
    margin: auto;
  }
`;

function Contact() {
  const contactVariants = {
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
      variants={contactVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <StyledWrapper>
        <h1>Contact us!</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quae
          cum cupiditate voluptatum quia amet consequatur deleniti eos
          blanditiis eum sed quas earum quaerat perspiciatis autem a magnam,
          tenetur vero sapiente quisquam, ipsam facilis repudiandae sequi iusto.
          Corrupti, quas doloribus?
        </p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Send!</button>
      </StyledWrapper>
    </Container>
  );
}

export default Contact;
