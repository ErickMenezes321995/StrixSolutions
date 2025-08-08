import { useState, useEffect } from "react";
import { Box, Button, Flex, Heading, Text, SimpleGrid, useBreakpointValue, Icon, Stack, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FiArrowRight, FiCheckCircle, FiCode, FiSmartphone, FiServer, FiCloud } from "react-icons/fi";
// import MatrixEffect from "../../components/MatrixEffect"; // Componente que já criamos anteriormente

type ServiceItem = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  category: string;
  price?: string;
  image?: string;
};

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Desenvolvimento Web Premium",
    description: "Sites e aplicações web de alto desempenho com tecnologias modernas.",
    icon: FiCode,
    features: [
      "Design responsivo e acessível",
      "Otimização para SEO",
      "Integração com APIs",
      "Performance máxima"
    ],
    category: "Web",
    price: "A partir de R$ 5.000",
    image: "assets/images/web-service.jpg"
  },
  {
    id: 2,
    title: "Aplicativos Mobile",
    description: "Aplicativos nativos e híbridos para iOS e Android.",
    icon: FiSmartphone,
    features: [
      "Desenvolvimento nativo/híbrido",
      "Integração com serviços",
      "Publicação nas lojas",
      "Manutenção contínua"
    ],
    category: "Mobile",
    price: "A partir de R$ 8.000",
    image: "assets/images/mobile-service.jpg"
  },
  {
    id: 3,
    title: "Sistemas Corporativos",
    description: "Soluções personalizadas para automação de negócios.",
    icon: FiServer,
    features: [
      "Gestão de processos",
      "Relatórios personalizados",
      "Integração com ERPs",
      "Treinamento da equipe"
    ],
    category: "Sistema",
    price: "Sob consulta",
    image: "assets/images/enterprise-service.jpg"
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description: "Infraestrutura escalável e segura na nuvem.",
    icon: FiCloud,
    features: [
      "Migração para nuvem",
      "Arquitetura escalável",
      "Monitoramento 24/7",
      "Otimização de custos"
    ],
    category: "Infra",
    price: "Sob consulta",
    image: "assets/images/cloud-service.jpg"
  }
];

const categories = [
  { id: "all", name: "Todos" },
  { id: "Web", name: "Web" },
  { id: "Mobile", name: "Mobile" },
  { id: "Sistema", name: "Sistemas" },
  { id: "Infra", name: "Infraestrutura" }
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



const ServicesPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const isMobile = useBreakpointValue({ base: true, md: false });
  const buttonSize = useBreakpointValue({ base: "md", md: "lg" });
  
  const filteredServices = activeFilter === "all" 
    ? services 
    : services.filter(service => service.category === activeFilter);

  return (
    <Flex flexDirection="column" bg="gray.50" minH="100vh">
      {/* Hero Section com Matrix Effect */}
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
          opacity={0.1}
        />
        
        <Box textAlign="center" zIndex={1} maxW="4xl" mx="auto">
          <Text 
            fontSize={{ base: "sm", md: "lg" }}
            fontWeight="semibold"
            letterSpacing="wide"
            color="purple.200"
            mb={2}
            textShadow="0 1px 3px rgba(0,0,0,0.3)"
          >
            NOSSOS SERVIÇOS
          </Text>
          <Heading 
            size={isMobile ? "xl" : "2xl"} 
            mb={4} 
            fontWeight="extrabold"
            lineHeight="1.2"
            px={2}
            textShadow="0 2px 4px rgba(0,0,0,0.4)"
          >
            Soluções Tecnológicas Completas
          </Heading>
          <Text 
            fontSize={{ base: "md", md: "xl" }}
            opacity={0.9}
            maxW="2xl"
            mx="auto"
            mb={8}
            px={isMobile ? 2 : 0}
            textShadow="0 1px 2px rgba(0,0,0,0.3)"
          >
            Da concepção à implementação, oferecemos serviços completos para transformar suas ideias em realidade digital.
          </Text>
          <Button
            as={RouterLink}
            to="/contato"
            colorScheme="whiteAlpha"
            size={buttonSize}
            rightIcon={<Icon as={FiArrowRight} />}
            _hover={{ transform: "translateY(-2px)", bg: "white", color: "purple.700" }}
            transition="all 0.2s"
            zIndex="1"
          >
            {isMobile ? "Fale Conosco" : "Solicitar Consultoria"}
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

      {/* Grid de Serviços Premium */}
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 6, md: 8 }}
        px={{ base: 4, md: 8 }}
        py={{ base: 8, md: 12 }}
        maxW="7xl"
        mx="auto"
      >
        {filteredServices.map((service) => (
          <Box
            key={service.id}
            bg="white"
            borderRadius="2xl"
            overflow="hidden"
            boxShadow={{ base: "md", md: "xl" }}
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-5px)",
              boxShadow: { base: "lg", md: "2xl" }
            }}
            borderTop="4px solid"
            borderColor="purple.500"
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            minH={{ md: "300px" }}
          >
            {service.image && (
              <Box
                flex={{ md: 1 }}
                h={{ base: "200px", md: "auto" }}
                bgImage={`url(${process.env.PUBLIC_URL}/${service.image})`}
                bgSize="cover"
                bgPosition="center"
                position="relative"
              >
                <Box
                  position="absolute"
                  top="4"
                  left="4"
                  bg="purple.600"
                  color="white"
                  p={2}
                  borderRadius="md"
                >
                  <Icon as={service.icon} boxSize={6} />
                </Box>
              </Box>
            )}
            
            <Box flex={{ md: 1 }} p={{ base: 6, md: 8 }}>
              <Flex align="center" mb={4}>
                {!service.image && (
                  <Icon 
                    as={service.icon} 
                    boxSize={8} 
                    color="purple.500" 
                    mr={3} 
                  />
                )}
                <Heading size="lg" color="purple.700">
                  {service.title}
                </Heading>
              </Flex>
              
              <Text mb={6} color="gray.600">
                {service.description}
              </Text>
              
              <Stack spacing={3} mb={6}>
                {service.features.map((feature, index) => (
                  <Flex key={index} align="center">
                    <Icon as={FiCheckCircle} color="purple.500" mr={3} />
                    <Text fontSize="sm">{feature}</Text>
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
                {service.price && (
                  <Text 
                    fontSize="lg" 
                    fontWeight="bold"
                    color="purple.700"
                  >
                    {service.price}
                  </Text>
                )}
                <Button
                  as={RouterLink}
                  to={`/servicos/${service.id}`}
                  colorScheme="purple"
                  size="sm"
                  rightIcon={<Icon as={FiArrowRight} />}
                  _hover={{
                    bg: "purple.600",
                    color: "white"
                  }}
                >
                  Detalhes do Serviço
                </Button>
              </Flex>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      {/* Seção de Diferenciais */}
      <Box bg="purple.50" py={16} px={{ base: 4, md: 8 }}>
        <Box maxW="7xl" mx="auto">
          <Heading 
            textAlign="center" 
            size="xl" 
            mb={12}
            color="purple.700"
          >
            Nossos Diferenciais
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box bg="white" p={8} borderRadius="xl" boxShadow="md">
              <Flex align="center" mb={4}>
                <Box bg="purple.100" p={3} borderRadius="md" mr={4}>
                  <Icon as={FiCheckCircle} boxSize={6} color="purple.600" />
                </Box>
                <Heading size="md">Garantia de Qualidade</Heading>
              </Flex>
              <Text color="gray.600">
                Todos nossos projetos passam por rigorosos testes de qualidade e performance.
              </Text>
            </Box>
            
            <Box bg="white" p={8} borderRadius="xl" boxShadow="md">
              <Flex align="center" mb={4}>
                <Box bg="purple.100" p={3} borderRadius="md" mr={4}>
                  <Icon as={FiServer} boxSize={6} color="purple.600" />
                </Box>
                <Heading size="md">Suporte 24/7</Heading>
              </Flex>
              <Text color="gray.600">
                Equipe especializada disponível para suporte emergencial a qualquer momento.
              </Text>
            </Box>
            
            <Box bg="white" p={8} borderRadius="xl" boxShadow="md">
              <Flex align="center" mb={4}>
                <Box bg="purple.100" p={3} borderRadius="md" mr={4}>
                  <Icon as={FiCloud} boxSize={6} color="purple.600" />
                </Box>
                <Heading size="md">Tecnologia de Ponta</Heading>
              </Flex>
              <Text color="gray.600">
                Utilizamos apenas as tecnologias mais modernas e comprovadas no mercado.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      {/* CTA Final */}
      <Box
        bgGradient="linear(to-r, purple.900, purple.700)"
        color="white"
        py={16}
        px={4}
      >
        <Box 
          maxW="4xl" 
          mx="auto" 
          textAlign="center"
        >
          <Heading size={isMobile ? "lg" : "xl"} mb={6}>
            Pronto para levar seu negócio para o próximo nível?
          </Heading>
          <Text 
            fontSize={{ base: "md", md: "xl" }}
            mb={8}
            opacity={0.9}
          >
            Entre em contato agora mesmo e vamos conversar sobre como podemos ajudar.
          </Text>
          <Stack 
            direction={{ base: "column", sm: "row" }}
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
              Solicitar Orçamento
            </Button>
            <Button
              as={RouterLink}
              to="/portfolio"
              variant="outline"
              colorScheme="whiteAlpha"
              size={buttonSize}
              _hover={{ 
                transform: "translateY(-2px)",
                bg: "whiteAlpha.200"
              }}
              px={8}
            >
              Ver Portfólio
            </Button>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};

export default ServicesPage;