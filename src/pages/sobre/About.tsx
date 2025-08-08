import { 
  Heading, 
  Text, 
  VStack, 
  Box, 
  Flex, 
  Image, 
  useColorModeValue,
  SimpleGrid
} from "@chakra-ui/react";
import SectionContainer from "../../components/SectionContainer/SectionContainer";

interface TeamMember {
  role: string;
  description: string;
}

interface ApproachItem {
  title: string;
  description: string;
}

const About = () => {
  const accentColor = "purple.600";
  const textColor = useColorModeValue("gray.700", "gray.300");
  const cardBg = useColorModeValue("white", "gray.800");

  const teamMembers: TeamMember[] = [
    {
      role: "Desenvolvedores",
      description: "Especialistas em front-end, back-end e mobile"
    },
    {
      role: "Designers",
      description: "Focados em UX/UI e experiência do usuário"
    },
    {
      role: "Gestores",
      description: "Garantindo qualidade e entrega no prazo"
    }
  ];

  const approachItems: ApproachItem[] = [
    {
      title: "Desenvolvimento Sob Medida",
      description: "Soluções personalizadas que atendem às necessidades específicas do seu negócio"
    },
    {
      title: "Tecnologia de Ponta",
      description: "Utilizamos React, Node.js, TypeScript e outras tecnologias modernas"
    },
    {
      title: "Metodologia Ágil",
      description: "Processos transparentes com entregas contínuas e resultados rápidos"
    }
  ];

  return (
    <SectionContainer title="Sobre Nós" flexDirection="column">
      <VStack spacing={8} align="stretch" maxW="6xl" mx="auto">
        {/* Hero Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          gap={10}
          mb={8}
        >
          <Box flex={1}>
            <Heading size="xl" mb={6} color={accentColor} lineHeight="1.2">
              Transformando ideias em soluções digitais de excelência
            </Heading>
            <Text fontSize="lg" color={textColor}>
              Na <strong>CodeCraft Solutions</strong>, combinamos expertise técnica com 
              design intuitivo para criar sistemas que impulsionam negócios.
            </Text>
          </Box>
          <Box flex={1}>
            <Image 
              src="/assets/images/programador.jpg" 
              alt="Ilustração de desenvolvimento de software" 
              w="100%"
              maxW="350px"
              borderRadius={20}
              marginLeft={10}
            />
          </Box>
        </Flex>

        {/* Diferenciais */}
        <Box bg={cardBg} p={8} borderRadius="xl" boxShadow="md" mb={8}>
          <Heading size="lg" mb={6} color={accentColor}>
            Nossa Abordagem
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {approachItems.map((item, index) => (
              <Box key={index}>
                <Heading size="md" mb={3} color={accentColor}>
                  <Box as="span" color={accentColor} mr={2}>▹</Box>
                  {item.title}
                </Heading>
                <Text color={textColor}>{item.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Nossa História */}
        <Box mb={8}>
          <Heading size="lg" mb={6} color={accentColor}>
            Nossa História
          </Heading>
          <Text fontSize="lg" mb={4} color={textColor}>
            Fundada em 2020 por engenheiros apaixonados por tecnologia, a 
            <strong> CodeCraft Solutions</strong> surgiu para criar soluções 
            digitais que fazem a diferença.
          </Text>
          <Text fontSize="lg" color={textColor}>
            De um pequeno escritório em Curitiba para clientes em todo o Brasil, 
            mantemos o mesmo compromisso com excelência e inovação.
          </Text>
        </Box>

        {/* Time */}
        <Box bg={cardBg} p={8} borderRadius="xl" boxShadow="md">
          <Heading size="lg" mb={6} color={accentColor}>
            Nosso Time
          </Heading>
          <Text fontSize="lg" mb={6} color={textColor}>
            Nossa equipe multidisciplinar combina experiência técnica com 
            criatividade para resolver problemas complexos.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {teamMembers.map((member, index) => (
              <Box key={index} textAlign="center">
                <Box 
                  bg="purple.100" 
                  w="120px" 
                  h="120px" 
                  borderRadius="full" 
                  mx="auto" 
                  mb={4} 
                />
                <Heading size="md" mb={2} color={accentColor}>
                  {member.role}
                </Heading>
                <Text color={textColor}>{member.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* CTA Final */}
        <Box textAlign="center" mt={12}>
          <Heading size="xl" mb={6} color={accentColor}>
            Pronto para transformar sua ideia em realidade?
          </Heading>
          <Text fontSize="xl" color={textColor}>
            Entre em contato e vamos conversar sobre seu projeto!
          </Text>
        </Box>
      </VStack>
    </SectionContainer>
  );
};

export default About;