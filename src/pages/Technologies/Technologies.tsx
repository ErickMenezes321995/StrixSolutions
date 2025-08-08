import { Box, Flex, Grid, Heading, Image, Text, Button, VStack, useColorModeValue } from "@chakra-ui/react";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import { Link as RouterLink } from "react-router-dom";

interface TechnologyItem {
  title: string;
  description: string;
  image: string;
  docsLink: string;
}

const technologies: TechnologyItem[] = [
  {
    title: "Front-end Moderno",
    description: "Desenvolvemos interfaces ricas com React, Next.js e TypeScript para performance excepcional.",
    image: "https://www.nicepng.com/png/detail/947-9477723_front-end-development-logos-for-example-html-5.png",
    docsLink: "/tecnologias/frontend"
  },
  {
    title: "Back-end Robusto",
    description: "APIs escaláveis com Node.js, NestJS e bancos de dados como MongoDB e PostgreSQL.",
    image: "https://e7.pngegg.com/pngimages/764/21/png-clipart-technology-front-and-back-ends-front-end-web-development-cascading-style-sheets-technology-technology-front-and-back-ends.png",
    docsLink: "/tecnologias/backend"
  },
  {
    title: "Mobile Híbrido",
    description: "Aplicativos multiplataforma com React Native e Flutter mantendo qualidade nativa.",
    image: "./assets/images/frontend2.png",
    docsLink: "/tecnologias/mobile"
  }
];

const TechnologiesPage = () => {
  const accentColor = "purple.600";
  const textColor = useColorModeValue("gray.700", "gray.300");
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <SectionContainer title="Nossas Tecnologias" flexDirection="column">
      <VStack spacing={8} align="center" textAlign="center" mb={12}>
        <Heading size="xl" color={accentColor}>
          Domínio das Melhores Tecnologias
        </Heading>
        <Text maxW="800px" fontSize="lg" color={textColor}>
          Utilizamos as ferramentas mais modernas do mercado para entregar soluções de alta qualidade.
        </Text>
      </VStack>

      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={8}
        w="100%"
        mb={12}
      >
        {technologies.map((tech) => (
          <TechCard 
            key={tech.title}
            tech={tech}
            accentColor={accentColor}
            textColor={textColor}
            cardBg={cardBg}
          />
        ))}
      </Grid>

      <VStack spacing={6} align="center">
        <Text fontSize="xl" color={textColor} textAlign="center">
          Quer saber como podemos aplicar essas tecnologias no seu projeto?
        </Text>
        <Button
          as={RouterLink}
          to="/contato"
          colorScheme="purple"
          size="lg"
          px={8}
        >
          Fale com nossos especialistas
        </Button>
      </VStack>
    </SectionContainer>
  );
};

interface TechCardProps {
  tech: TechnologyItem;
  accentColor: string;
  textColor: string;
  cardBg: string;
}

const TechCard = ({ tech, accentColor, textColor, cardBg }: TechCardProps) => {
  return (
    <Box
      bg={cardBg}
      borderRadius="xl"
      boxShadow="md"
      overflow="hidden"
      transition="all 0.3s ease"
      _hover={{ 
        transform: "translateY(-5px)",
        boxShadow: "xl"
      }}
    >
      <Image
        src={`${process.env.PUBLIC_URL}/${tech.image}`}
        alt={tech.title}
        h="180px"
        w="100%"
        objectFit="cover"
        borderTopRadius="xl"
      />
      <Box p={6}>
        <Heading size="md" color={accentColor} mb={3}>
          {tech.title}
        </Heading>
        <Text fontSize="md" color={textColor} mb={4}>
          {tech.description}
        </Text>
        <Button
          as={RouterLink}
          to={tech.docsLink}
          colorScheme="purple"
          variant="outline"
          size="sm"
          w="100%"
        >
          Ver Detalhes
        </Button>
      </Box>
    </Box>
  );
};

export default TechnologiesPage;