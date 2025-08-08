import { 
  Grid,
  GridItem,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Flex, 
  IconButton,
  Box,
  Heading,
  Image,
  useColorModeValue
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { useEffect, useState } from "react";

interface NavLinkItem {
  name: string;
  path: string;
}

const navLinks: NavLinkItem[] = [
  {
    name: "Início",
    path: "/",
  },
  {
    name: "Serviços",
    path: "/Serviços",
  },
  {
    name: "Portfólio",
    path: "/Portifolio",
  },
  {
    name: "Sobre Nós",
    path: "/sobre",
  },
  {
    name: "Tecnologias",
    path: "/Technologies",
  },
  {
    name: "Contato",
    path: "/contato",
  },
];

const Header = () => {
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [headerColor, setHeaderColor] = useState<string>("purple.800");
  const hoverColor = useColorModeValue("purple.200", "purple.100");
  const activeColor = "purple.200";
  const logo = "/assets/images/coruja.png"; // Atualize com o caminho do seu logo

  const activeStyleMobile = {
    color: activeColor,
  };
  
  const activeStyle = {
    borderBottom: `3px solid ${activeColor}`,
  };
  
  const defaultStyle = {
    height: "100%",
    display: "flex",
    alignItems: "center",
  };

  const listenScrollEvent = () => {
    if (window.scrollY > 70) {
      setHeaderColor("rgba(90, 36, 125, 0.9)");
    } else {
      setHeaderColor("purple.800");
    }
  };

  useEffect(() => {
    listenScrollEvent();
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <Flex
        id="header"
        align="center"
        justify="space-between"
        bg={location.pathname === "/" ? headerColor : "purple.800"}
        h={{ base: "70px", lg: "80px" }}
        px={{ base: 4, lg: 8, xl: 16 }}
        zIndex="sticky"
        position="sticky"
        top="0"
        transition="background-color 0.3s ease"
        boxShadow="md"
      >
        <Flex
          as={NavLink}
          to="/"
          align="center"
          h="full"
        >
          <Image src={logo} alt="Logo" h={{ base: "50px", md: "90px"}} marginTop={5} objectFit="contain" />
        </Flex>

        <Flex
          align="center"
          justify="space-between"
          flex={1}
          ml={8}
          display={{ base: "none", lg: "flex" }}
        >
          {navLinks.map((link) => (
            <Box
              key={link.path}
              as={NavLink}
              to={link.path}
              color="white"
              borderBottom="3px solid transparent"
              pb={2}
              mx={2}
              fontWeight="medium"
              _hover={{
                borderColor: hoverColor,
                color: hoverColor,
              }}
              sx={{
                "&.active": activeStyle,
                ...defaultStyle
              }}
            >
              <Heading size="sm" fontWeight="inherit">
                {link.name}
              </Heading>
            </Box>
          ))}

          <Flex ml={4} align="center">
            {/* Substitua por seus componentes SocialMedia e StoreButton */}
            {/* <SocialMedia iconColor="white" hoverColor={hoverColor} />
            <StoreButton ml={4} /> */}
          </Flex>
        </Flex>

        <IconButton
          aria-label="Abrir menu"
          icon={<HiMenu size="24px" />}
          onClick={onOpen}
          variant="ghost"
          color="white"
          _hover={{ color: hoverColor }}
          display={{ lg: "none" }}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="purple.800">
          <DrawerCloseButton color={hoverColor} size="lg" />
          
          <DrawerBody p={4}>
            <Grid templateRows={`repeat(${navLinks.length + 2}, 1fr)`} gap={4} h="100%">
              {navLinks.map((link) => (
                <GridItem
                  key={link.path}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  borderBottom="1px solid"
                  borderColor="purple.700"
                >
                  <Box
                    as={NavLink}
                    to={link.path}
                    w="full"
                    textAlign="center"
                    py={2}
                    _hover={activeStyleMobile}
                    sx={{
                      "&.active": activeStyleMobile,
                    }}
                    onClick={onClose}
                  >
                    <Heading size="sm">{link.name}</Heading>
                  </Box>
                </GridItem>
              ))}
              
              <GridItem display="flex" justifyContent="center" pt={4}>
                {/* <StoreButton /> */}
              </GridItem>
              
              <GridItem display="flex" justifyContent="center" pt={4}>
                {/* <SocialMedia iconColor="white" size="1.5em" /> */}
              </GridItem>
            </Grid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;