import { motion } from "framer-motion";
import { Wrapper } from "../../assets/atoms/Wrapper";
import { Container } from "../../assets/atoms/Container";
import { pageVariants } from "../../assets/variants/pageVariants";

function Home() {
  return (
    <Container
      as={motion.div}
      variants={pageVariants}
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
