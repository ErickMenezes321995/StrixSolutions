import { Box, Flex, Grid, GridItem, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterService {
  name: string;
}

const Footer = () => {
  const logo = "/assets/images/coruja.png"; // Atualize com o caminho do seu logo
  // Dados para as colunas do footer
  const quickLinks: FooterLink[] = [
    { label: "Sobre Nós", href: "/sobre" },
    { label: "Nossos Serviços", href: "/servicos" },
    { label: "Portfólio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
  ];

  const services: FooterService[] = [
    { name: "Desenvolvimento Web" },
    { name: "Aplicativos Mobile" },
    { name: "Consultoria em TI" },
    { name: "Sistemas Personalizados" },
  ];

  return (
    <Box
      bg="purple.800"
      color="white"
      pt={16}
      pb={8}
      px={{ base: 6, md: 12, lg: 24 }}
    >
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)"
        }}
        gap={10}
        mb={12}
      >
        {/* Coluna 1 - Logo e descrição */}
        <GridItem>
          <VStack align="flex-start" spacing={6}>
            <Image src={logo} alt="Logo" h={{ base: "50px", md: "90px"}} marginTop={5} objectFit="contain" />
            <Text fontSize="sm" opacity={0.8}>
              Transformando ideias em soluções digitais de alta performance.
            </Text>
            <Flex gap={4}>
              <Link href="#" aria-label="LinkedIn" _hover={{ color: "purple.200" }}>
                <Box as={FaLinkedin} boxSize="24px" />
              </Link>
              <Link href="#" aria-label="GitHub" _hover={{ color: "purple.200" }}>
                <Box as={FaGithub} boxSize="24px" />
              </Link>
              <Link href="#" aria-label="Twitter" _hover={{ color: "purple.200" }}>
                <Box as={FaTwitter} boxSize="24px" />
              </Link>
              <Link href="#" aria-label="Email" _hover={{ color: "purple.200" }}>
                <Box as={FaEnvelope} boxSize="24px" />
              </Link>
            </Flex>
          </VStack>
        </GridItem>

        {/* Coluna 2 - Links rápidos */}
        <GridItem>
          <VStack align="flex-start" spacing={4}>
            <Text fontWeight="bold" fontSize="lg" mb={2}>Links Rápidos</Text>
            {quickLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                fontSize="sm" 
                _hover={{ color: "purple.200", textDecoration: "underline" }}
              >
                {link.label}
              </Link>
            ))}
          </VStack>
        </GridItem>

        {/* Coluna 3 - Serviços */}
        <GridItem>
          <VStack align="flex-start" spacing={4}>
            <Text fontWeight="bold" fontSize="lg" mb={2}>Serviços</Text>
            {services.map((service, index) => (
              <Text 
                key={index}
                fontSize="sm" 
                _hover={{ color: "purple.200", cursor: "pointer" }}
              >
                {service.name}
              </Text>
            ))}
          </VStack>
        </GridItem>

        {/* Coluna 4 - Contato */}
        <GridItem>
          <VStack align="flex-start" spacing={4}>
            <Text fontWeight="bold" fontSize="lg" mb={2}>Contato</Text>
            <Text fontSize="sm">
              contato@softwaresolutions.com
            </Text>
            <Text fontSize="sm">
              +55 (41) 99999-9999
            </Text>
            <Text fontSize="sm">
              Curitiba/PR - Brasil
            </Text>
            <Text fontSize="sm" mt={2}>
              Seg-Sex: 9h às 18h
            </Text>
          </VStack>
        </GridItem>
      </Grid>

      {/* Rodapé inferior */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        borderTop="1px solid"
        borderColor="purple.700"
        pt={8}
      >
        <Text fontSize="xs" mb={{ base: 4, md: 0 }}>
          © {new Date().getFullYear()} Software Solutions. Todos os direitos reservados.
        </Text>
        
        <Flex gap={6}>
          <Link 
            href="/politica-de-privacidade" 
            fontSize="xs" 
            _hover={{ color: "purple.200", textDecoration: "underline" }}
          >
            Política de Privacidade
          </Link>
          <Link 
            href="/termos-de-uso" 
            fontSize="xs" 
            _hover={{ color: "purple.200", textDecoration: "underline" }}
          >
            Termos de Uso
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;