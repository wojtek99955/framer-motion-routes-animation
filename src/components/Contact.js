import styled from "styled-components";

const Container = styled.div`
  margin-top: 5rem;
`;
const Wrapper = styled.div`
  max-width: 700px;
  margin: auto;
  h1 {
    margin-bottom: 2rem;
  }
  p {
    width: 80%;

    margin: auto;
  }
`;

function Contact() {
  return (
    <Container>
      <Wrapper>
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
      </Wrapper>
    </Container>
  );
}

export default Contact;
