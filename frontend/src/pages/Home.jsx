import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import header_image from "../assets/header_image.png";
import CreateProjectButton from "../components/CreateProjectButton";
import StaticNavbar from "../components/StaticNavbar";
import BackToHome from "../components/BackToHome";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <>
      <Logo padLeft={4} />
      <StaticNavbar />
      <Container maxW={"6xl"}>
        <BackToHome />
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          pb={1}
          pt={5}
        >
          <Heading
            fontWeight={650}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            color={"var(--primary-color)"}
            lineHeight={{ sm: "110%", lg: "1%" }}
          >
            Create a New Project
          </Heading>
          <Flex w={"full"} justifyContent={"center"} alignItems={"center"}>
            <Image
              src={header_image}
              alt="header"
              height={{ sm: "13rem", lg: "19rem" }}
              mt={1}
            />
          </Flex>
          <Text color={"gray.500"} maxW={"5xl"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem maxime dicta optio animi totam officiis. Minus
            accusantium consequuntur, blanditiis repellat repudiandae cum
            distinctio inventore tempora atque autem reprehenderit adipisci rem
            nobis, nemo commodi amet doloremque fugit mollitia provident qui
            quae!
          </Text>
          <Stack spacing={6} direction={"row"}>
            <CreateProjectButton />
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
