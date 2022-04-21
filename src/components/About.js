import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div`
  max-width: 700px;
  margin: auto;
  h1 {
    text-align: center;
  }
  p {
    width: 80%;
    margin: auto;
  }
`;

function About() {
  return (
    <Container>
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
