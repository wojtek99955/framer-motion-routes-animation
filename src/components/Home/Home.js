import { motion } from "framer-motion";
import { Wrapper } from "../../assets/atoms/Wrapper";
import { Container } from "../../assets/atoms/Container";

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
