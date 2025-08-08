import { useState, useEffect } from "react";
import { Box, Button, Flex, Heading, Text, SimpleGrid, useBreakpointValue, Icon, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";



type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  features: string[];
  price?: string;
};

type Category = {
  id: string;
  name: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "E-commerce Premium",
    description: "Solução completa para vendas online com dashboard analítico.",
    image: "assets/images/ecommerce-project.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "Web App",
    features: [
      "Checkout transparente",
      "Gestão de estoque",
      "Relatórios de vendas"
    ],
    price: "A partir de R$ 12.000"
  },
  {
    id: 2,
    title: "Sistema Médico",
    description: "Plataforma completa para gestão de clínicas e telemedicina.",
    image: "assets/images/medical-system.jpg",
    technologies: ["TypeScript", "React Native", "AWS"],
    category: "Sistema",
    features: [
      "Agendamento online",
      "Prontuário digital",
      "Teleconsulta"
    ],
    price: "Sob consulta"
  },
  {
    id: 3,
    title: "App Financeiro",
    description: "Controle suas finanças com IA para análise de gastos.",
    image: "assets/images/finance-app.jpg",
    technologies: ["Flutter", "Firebase", "Docker"],
    category: "Mobile",
    features: [
      "Categorização automática",
      "Metas financeiras",
      "Sync entre dispositivos"
    ],
    price: "A partir de R$ 8.500"
  }
];

const categories: Category[] = [
  { id: "all", name: "Todos" },
  { id: "Web App", name: "Web" },
  { id: "Mobile", name: "Mobile" },
  { id: "Sistema", name: "Sistemas" }
];

const MatrixEffect = () => {
  const [drops, setDrops] = useState<number[]>([]); // Especificamos que é um array de números
  

  useEffect(() => {
    const columns = Math.floor(window.innerWidth / 20);
    setDrops(Array(columns).fill(1)); // Inicializa com array de números

    const interval = setInterval(() => {
      setDrops(prevDrops => {
        return prevDrops.map(drop => {
          if (drop > 100 || Math.random() < 0.05) {
            return 1;
          }
          return drop + 1;
        });
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  

  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      overflow="hidden"
      zIndex="0"
      opacity="0.7"
    >
      {drops.map((drop, i) => (
        <Text
          key={i}
          position="absolute"
          top={`-20px`}
          left={`${i * 20}px`}
          fontSize="18px"
          color="purple.300"
          fontFamily="monospace"
          style={{
            transform: `translateY(${drop * 10}px)`,
            transition: "transform 0.3s linear",
          }}
        >
          {String.fromCharCode(Math.random() * 128)}
        </Text>
      ))}
    </Box>
  );
};



const Portifolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const isMobile = useBreakpointValue({ base: true, md: false });
  const buttonSize = useBreakpointValue({ base: "md", md: "lg" });
  
  const filteredProjects = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(project => project.category === activeFilter);

  return (
    <Flex flexDirection="column" bg="gray.50" minH="100vh">
      {/* Hero Section Responsiva */}
      <Box
        h={["60vh", "70vh", "80vh"]}
        bgGradient="linear(to-r, purple.900, purple.700)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        position="relative"
        overflow="hidden"
        px={4}
      >
         <MatrixEffect />
        <Box 
          position="absolute"
          inset={0}
          bg="url('https://assets.website-files.com/5e6c01bb5212506d6c119069/5e6c01bb8abd7761fef5344a_hero-pattern.svg')"
          opacity={0.15}
        />
        
        <Box textAlign="center" zIndex={1} maxW="4xl" mx="auto">
          <Text 
            fontSize={{ base: "sm", md: "lg" }}
            fontWeight="semibold"
            letterSpacing="wide"
            color="purple.200"
            mb={2}
          >
            PORTFÓLIO PROFISSIONAL
          </Text>
          <Heading 
            size={isMobile ? "xl" : "2xl"} 
            mb={4} 
            fontWeight="extrabold"
            lineHeight="1.2"
            px={2}
          >
            Soluções Tecnológicas Sob Medida
          </Heading>
          <Text 
            fontSize={{ base: "md", md: "xl" }}
            opacity={0.9}
            maxW="2xl"
            mx="auto"
            mb={8}
            px={isMobile ? 2 : 0}
          >
            Desenvolvemos sistemas que transformam negócios, combinando design elegante com tecnologia de ponta.
          </Text>
          <Button
            as={RouterLink}
            to="/contato"
            colorScheme="whiteAlpha"
            size={buttonSize}
            rightIcon={<Icon as={FiArrowRight} />}
            _hover={{ transform: "translateY(-2px)", bg: "white", color: "purple.700" }}
            transition="all 0.2s"
          >
            {isMobile ? "Orçamento" : "Solicitar Orçamento"}
          </Button>
        </Box>
      </Box>

      {/* Filtros Responsivos */}
      <Box bg="white" py={6} boxShadow="sm" px={2}>
        <Flex 
          justify="center" 
          wrap="wrap" 
          gap={3}
          maxW="7xl"
          mx="auto"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              variant={activeFilter === category.id ? "solid" : "ghost"}
              colorScheme="purple"
              size={isMobile ? "sm" : "md"}
              borderRadius="full"
              px={isMobile ? 4 : 6}
              fontWeight={activeFilter === category.id ? "bold" : "medium"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: activeFilter === category.id ? "none" : "md"
              }}
              transition="all 0.2s"
              flexShrink={0}
            >
              {category.name}
            </Button>
          ))}
        </Flex>
      </Box>

      {/* Grid de Projetos Responsivo */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={{ base: 6, md: 8 }}
        px={{ base: 4, md: 8 }}
        py={{ base: 8, md: 12 }}
        maxW="7xl"
        mx="auto"
      >
        {filteredProjects.map((project) => (
          <Box
            key={project.id}
            bg="white"
            borderRadius="xl"
            overflow="hidden"
            boxShadow={{ base: "md", md: "xl" }}
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-5px)",
              boxShadow: { base: "lg", md: "2xl" }
            }}
            borderTop="4px solid"
            borderColor="purple.500"
          >
            <Box
              h={{ base: "180px", md: "220px" }}
              bgImage={`url(${process.env.PUBLIC_URL}/${project.image})`}
              bgSize="cover"
              bgPosition="center"
              position="relative"
            >
              <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                bgGradient="linear(to-t, blackAlpha.800, transparent)"
                color="white"
                px={{ base: 4, md: 6 }}
                py={{ base: 3, md: 4 }}
              >
                <Text 
                  fontSize="xs" 
                  fontWeight="bold"
                  letterSpacing="wide"
                  color="purple.200"
                >
                  {project.category.toUpperCase()}
                </Text>
                <Heading size={{ base: "md", md: "lg" }} mb={1}>{project.title}</Heading>
              </Box>
            </Box>
            
            <Box p={{ base: 4, md: 6 }}>
              <Text mb={4} color="gray.600" fontSize={{ base: "sm", md: "md" }}>
                {project.description}
              </Text>
              
              <Stack spacing={2} mb={4}>
                {project.features.map((feature, index) => (
                  <Flex key={index} align="center">
                    <Icon as={FiCheckCircle} color="purple.500" mr={2} boxSize={4} />
                    <Text fontSize={{ base: "xs", md: "sm" }}>{feature}</Text>
                  </Flex>
                ))}
              </Stack>
              
              <Flex 
                align="center" 
                justify="space-between" 
                mt="auto"
                direction={{ base: "column", md: "row" }}
                gap={{ base: 3, md: 0 }}
              >
                {project.price && (
                  <Text 
                    fontSize={{ base: "sm", md: "lg" }}
                    fontWeight="bold"
                    color="purple.700"
                    textAlign={{ base: "center", md: "left" }}
                  >
                    {project.price}
                  </Text>
                )}
                <Button
                  as={RouterLink}
                  to={`/portfolio/${project.id}`}
                  colorScheme="purple"
                  size={isMobile ? "sm" : "md"}
                  variant="outline"
                  rightIcon={<Icon as={FiArrowRight} />}
                  _hover={{
                    bg: "purple.600",
                    color: "white"
                  }}
                  width={{ base: "full", md: "auto" }}
                >
                  Detalhes
                </Button>
              </Flex>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      {/* CTA Responsivo */}
      <Box
        bgGradient="linear(to-r, purple.900, purple.700)"
        color="white"
        py={{ base: 12, md: 20 }}
        px={4}
      >
        <Box 
          maxW="5xl" 
          mx="auto" 
          textAlign="center"
        >
          <Heading size={isMobile ? "lg" : "xl"} mb={4}>
            Pronto para transformar seu negócio?
          </Heading>
          <Text 
            fontSize={{ base: "md", md: "xl" }}
            mb={8}
            maxW="3xl"
            mx="auto"
            opacity={0.9}
          >
            Nossas soluções personalizadas criam experiências digitais que encantam seus clientes.
          </Text>
          <Stack 
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify="center"
          >
            <Button
              as={RouterLink}
              to="/contato"
              colorScheme="whiteAlpha"
              size={buttonSize}
              rightIcon={<Icon as={FiArrowRight} />}
              _hover={{ 
                transform: "translateY(-2px)",
                bg: "white",
                color: "purple.700"
              }}
              px={8}
            >
              {isMobile ? "Fale Conosco" : "Fale com Especialista"}
            </Button>
            {!isMobile && (
              <Button
                as={RouterLink}
                to="/portfolio"
                variant="outline"
                colorScheme="whiteAlpha"
                size="lg"
                _hover={{ 
                  transform: "translateY(-2px)",
                  bg: "whiteAlpha.200"
                }}
                px={8}
              >
                Ver Mais Projetos
              </Button>
            )}
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};

export default Portifolio;