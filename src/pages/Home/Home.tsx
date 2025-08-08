import { useState, useEffect } from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
// import { sponsors } from "../Sponsors/Sponsors";

// No topo do arquivo (ou em um arquivo separado de constantes)
const technologies = [
  {
    name: "React",
    logoPath: "https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png"
  },
  {
    name: "Node.js",
    logoPath: "https://www.liblogo.com/img-logo/no6273w13b-node-js-logo-what-does-it-take-to-support-node-js-esm-the-guild-blog.png"
  },
  {
    name: "TypeScript",
    logoPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
  },
  {
    name: "MongoDB",
    logoPath: "https://logowik.com/content/uploads/images/mongodb9740.logowik.com.webp"
  },
  {
    name: "AWS",
    logoPath: "https://logospng.org/download/amazon-web-services/logo-amazon-web-services-1024.png"
  },
  {
    name: "Docker",
    logoPath: "https://download.logo.wine/logo/Docker_(software)/Docker_(software)-Logo.wine.png"
  }
];

const partners = [
  {
    name: "Microsoft",
    logoPath: "https://www.freepnglogos.com/uploads/microsoft-windows-logo-png-images-30.png"
  },
  {
    name: "Google Cloud",
    logoPath: "https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Symbol.png"
  },
  {
    name: "AWS",
    logoPath: "https://logospng.org/download/amazon-web-services/logo-amazon-web-services-1024.png"
  }
];



// Componente MatrixEffect com tipagem correta
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


// Dados dos serviços
const services = [
  {
    title: "Sistemas Sob Medida",
    description: "Soluções personalizadas para automação de negócios.",
    image: "assets/images/custom-software.jpg",
  },
  {
    title: "Aplicativos Web/Mobile",
    description: "Plataformas modernas com React, Node.js e MongoDB.",
    image: "assets/images/web-app.jpg",
  },
  {
    title: "Consultoria em TI",
    description: "Otimização de processos e infraestrutura de TI.",
    image: "assets/images/consulting.jpg",
  },
];

const Home = () => {
  const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => setShowFullText(!showFullText);

  return (
    <Flex flexDirection="column" bg="gray.50">
      {/* === Hero Section (Banner Roxo com Efeito Matrix) === */}
      <Box
        position="relative"
        h={["40vh", "60vh", "70vh"]}
        bgGradient="linear(to-r, purple.800, purple.600)"
        backgroundSize="cover"
        backgroundPosition="center"
        marginTop="85px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        overflow="hidden"
      >
        {/* Efeito Matrix */}
        <MatrixEffect />
        
        {/* Conteúdo do Hero */}
        <Box 
          textAlign="center" 
          px={4}
          position="relative"
          zIndex="1"
        >
          <Heading size="2xl" mb={4} fontWeight="bold" textShadow="0 0 10px rgba(0,0,0,0.5)">
            Soluções em Tecnologia Sob Medida
          </Heading>
          <Text fontSize="xl" opacity="0.9" textShadow="0 0 5px rgba(0,0,0,0.5)">
            Desenvolvemos sistemas que impulsionam seu negócio.
          </Text>
          <Button 
            colorScheme="purple" 
            size="lg" 
            mt={6}
            bg="purple.600"
            _hover={{ bg: "purple.700" }}
          >
            Fale Conosco
          </Button>
        </Box>
      </Box>

      {/* === Sobre a Software House === */}
      <Flex as="section" align="center" flexDirection="column" p={{ base: 4, md: 6 }} bg="white">
        <Heading 
          size={{ base: "md", sm: "lg", md: "lg", lg: "lg" }} 
          color="purple.700" 
          textAlign="center"
        >
          Quem Somos?
        </Heading>

        <Box width={{ base: "100%", sm: "100%", md: "80%" }}>
          <Text
            mt="1.5em"
            mb="1em"
            textAlign="center"
            color="gray.700"
            fontSize={{ base: "sm", sm: "md" }}
            noOfLines={{ base: showFullText ? undefined : 4, md: undefined }}
          >
            Somos uma Software House especializada em desenvolvimento de sistemas personalizados. 
            Combinamos tecnologia de ponta com uma abordagem centrada no cliente para entregar 
            soluções escaláveis e de alto desempenho.
          </Text>

          <Box textAlign="center" marginTop="-15px">
            <Button 
              size="sm" 
              variant="link" 
              colorScheme="purple"
              onClick={toggleText}
            >
              {showFullText ? "Ler menos" : "Ler mais"}
            </Button>
          </Box>
        </Box>

        <Button
          as={RouterLink}
          to="/sobre"
          marginTop="15px"
          _hover={{ textDecoration: "none", bg: "purple.700" }}
          width={{ base: "100%", sm: "100%", md: "unset" }}
          bg="purple.600"
          color="white"
        >
          Conheça Nossa Equipe
        </Button>
      </Flex>

      {/* === Seção de Serviços (Cards Roxos) === */}
      <Flex
        wrap="wrap"
        justify="center"
        gap={6}
        px={{ base: 4, md: 10 }}
        py={{ base: 6, md: 12 }}
        bg="gray.50"
      >
        {services.map((service, index) => (
          <Box
            key={index}
            backgroundImage={process.env.PUBLIC_URL + "/" + service.image}
            backgroundSize="cover"
            backgroundPosition="center"
            borderRadius="xl"
            boxShadow="lg"
            w={{ base: "100%", md: "30%" }}
            minH="320px"
            color="white"
            position="relative"
            overflow="hidden"
          >
            <Flex
              direction="column"
              justify="flex-end"
              h="100%"
              p={6}
              bg="rgba(90, 36, 125, 0.7)" // Overlay roxo
              backdropFilter="blur(2px)"
            >
              <Heading fontSize="xl" mb={2}>
                {service.title}
              </Heading>
              <Text fontSize="sm" mb={3}>
                {service.description}
              </Text>
              <Button
                colorScheme="purple"
                size="sm"
                alignSelf="start"
                bg="purple.600"
                _hover={{ bg: "purple.700" }}
              >
                Saiba Mais
              </Button>
            </Flex>
          </Box>
        ))}
      </Flex>

      {/* === Seção de Parceiros === */}
    <Flex
        as="section"
        bg="white"
        flexDirection="column"
        align="center"
        px={{ base: 4, sm: 6 }}
        py={16}
      >
        <Box textAlign="center" maxW="4xl" mx="auto">
          <Heading 
            size="xl" 
            mb={6} 
            color="purple.700"
            fontWeight="semibold"
            lineHeight="1.2"
          >
            Tecnologias que Dominamos
          </Heading>
          
          <Text 
            fontSize="lg" 
            color="gray.600" 
            mb={10}
            px={{ base: 0, md: 8 }}
          >
            Trabalhamos com as melhores ferramentas e frameworks do mercado para entregar soluções de alta qualidade
          </Text>

          <Flex
            wrap="wrap"
            justify="center"
            gap={{ base: 6, md: 10 }}
            w="100%"
          >
            {technologies.map((tech) => (
              <Box
                key={tech.name}
                p={4}
                bg="white"
                borderRadius="lg"
                boxShadow="md"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "xl"
                }}
                textAlign="center"
                minW={{ base: "120px", md: "150px" }}
              >
                <Image
                  src={`${process.env.PUBLIC_URL}${tech.logoPath}`}
                  h="50px"
                  w="auto"
                  mx="auto"
                  mb={3}
                  objectFit="contain"
                  alt={tech.name}
                />
                <Text 
                  fontSize="sm" 
                  fontWeight="medium"
                  color="purple.600"
                >
                  {tech.name}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>

        <Box mt={16} textAlign="center">
          <Heading 
            size="lg" 
            mb={6} 
            color="purple.700"
          >
            Parceiros Estratégicos
          </Heading>
          
          <Flex
            wrap="wrap"
            justify="center"
            align="center"
            gap={{ base: 6, md: 10 }}
            w="100%"
            maxW="4xl"
            mx="auto"
          >
            {partners.map((partner) => (
              <Box
                key={partner.name}
                p={4}
                bg="white"
                borderRadius="md"
                transition="all 0.3s ease"
                _hover={{
                  transform: "scale(1.05)"
                }}
              >
                <Image
                  src={`${process.env.PUBLIC_URL}${partner.logoPath}`}
                  h={{ base: "40px", md: "50px" }}
                  w="auto"
                  maxW="150px"
                  objectFit="contain"
                  alt={partner.name}
                />
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;