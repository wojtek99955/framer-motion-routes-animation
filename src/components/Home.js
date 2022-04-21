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

function Home() {
  return (
    <Container>
      <Wrapper>
        <h1>Welcome to Animated Routes Website!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          velit suscipit voluptas aspernatur odio esse repellendus distinctio
          corrupti impedit? Eius aperiam quibusdam, dignissimos debitis sunt sed
          consectetur magnam molestias repellendus dolor illo numquam
          praesentium nisi?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto veniam
          numquam sequi accusantium tempora porro voluptatem officiis aspernatur
          fugiat repellat.
        </p>
      </Wrapper>
    </Container>
  );
}

export default Home;
