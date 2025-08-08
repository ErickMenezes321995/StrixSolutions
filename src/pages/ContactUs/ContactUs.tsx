import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Text,
  Textarea,
  useToast,
  VStack,
  FormControl,
  FormErrorMessage,
  useColorModeValue
} from "@chakra-ui/react";
import { useState } from "react";
import { Field, Form } from "react-final-form";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import { validation } from "./validation";
import axios from "axios";

interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const contactEmail = "contato@suasoftwarehouse.com";
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const accentColor = "purple.600";

  const handleSubmitForm = async (values: ContactFormValues, form: any) => {
    setLoading(true);
    try {
      // Descomente quando tiver seu endpoint
      // await axios.post("https://api.suasoftwarehouse.com/contact", values);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top"
      });
      form.restart();
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar sua mensagem.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionContainer title="Fale Conosco" flexDirection={{ base: "column", lg: "row" }}>
      {/* Seção de Informações */}
      <Flex 
        width={{ base: "100%", lg: "50%" }} 
        flexDirection="column"
        pr={{ base: 0, lg: 8 }}
        mb={{ base: 8, lg: 0 }}
      >
        <Box 
          bg={cardBg}
          p={8}
          borderRadius="xl"
          boxShadow="md"
          height="100%"
        >
          <VStack spacing={6} align="flex-start">
            <Heading size="lg" color={accentColor}>
              Vamos conversar sobre seu projeto
            </Heading>
            
            <Text fontSize="lg" color={textColor}>
              Tem uma ideia ou projeto em mente? Entre em contato conosco.
            </Text>
            
            <Box>
              <Text fontWeight="bold" mb={2}>Email:</Text>
              <Link
                color={accentColor}
                fontWeight="600"
                href={`mailto:${contactEmail}`}
                fontSize="lg"
              >
                {contactEmail}
              </Link>
            </Box>
            
            {/* <Box>
              <Text fontWeight="bold" mb={2}>Redes Sociais:</Text>
              <SocialMedia iconColor={accentColor} />
            </Box> */}
            
            <Box>
              <Text fontWeight="bold" mb={2}>Horário Comercial:</Text>
              <Text>Segunda a Sexta, 9h às 18h</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
      
      {/* Seção do Formulário */}
      <Flex 
        width={{ base: "100%", lg: "50%" }}
        pl={{ base: 0, lg: 8 }}
      >
        <Box 
          bg={cardBg}
          p={8}
          borderRadius="xl"
          boxShadow="md"
          width="100%"
        >
          <Form<ContactFormValues>
            onSubmit={handleSubmitForm}
            validate={validation}
            render={({ handleSubmit, invalid }) => (
              <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <VStack spacing={4}>
                  <Flex width="100%" gap={4} direction={{ base: "column", sm: "row" }}>
                    <Field name="firstName">
                      {({ input, meta }) => (
                        <FormControl 
                          isInvalid={meta.error && meta.touched}
                          flex={1}
                        >
                          <Input
                            {...input}
                            placeholder="Nome"
                            size="lg"
                            focusBorderColor={accentColor}
                          />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    
                    <Field name="lastName">
                      {({ input, meta }) => (
                        <FormControl 
                          isInvalid={meta.error && meta.touched}
                          flex={1}
                        >
                          <Input
                            {...input}
                            placeholder="Sobrenome"
                            size="lg"
                            focusBorderColor={accentColor}
                          />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Flex>
                  
                  <Field name="email">
                    {({ input, meta }) => (
                      <FormControl isInvalid={meta.error && meta.touched} width="100%">
                        <Input
                          {...input}
                          placeholder="Email"
                          type="email"
                          size="lg"
                          focusBorderColor={accentColor}
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  
                  <Field name="message">
                    {({ input, meta }) => (
                      <FormControl isInvalid={meta.error && meta.touched} width="100%">
                        <Textarea
                          {...input}
                          placeholder="Conte-nos sobre seu projeto"
                          size="lg"
                          rows={6}
                          focusBorderColor={accentColor}
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  
                  <Button
                    type="submit"
                    colorScheme="purple"
                    size="lg"
                    width="100%"
                    mt={4}
                    isLoading={loading}
                    isDisabled={invalid}
                    loadingText="Enviando..."
                  >
                    Enviar Mensagem
                  </Button>
                </VStack>
              </form>
            )}
          />
        </Box>
      </Flex>
    </SectionContainer>
  );
};

export default ContactUs;