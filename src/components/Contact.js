import { motion } from "framer-motion";
import styled from "styled-components";
import { Container } from "../assets/atoms/Container";
import { Wrapper } from "../assets/atoms/Wrapper";
import { pageVariants } from "../assets/variants/pageVariants";

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
  return (
    <Container
      as={motion.div}
      variants={pageVariants}
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
