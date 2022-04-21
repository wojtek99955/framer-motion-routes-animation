import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  margin-top: 5rem;
  position: relative;
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
  const homeVariants = {
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
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
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
