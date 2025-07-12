import {
  Box,
  VStack,
  Heading,
  Input,
  Textarea,
  Button,
  Text,
} from "@chakra-ui/react";
import { Alert } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSubmit } from "../customHooks/useSubmit";
import { onlyLetters } from "../utils/inputValidation";
import { useAlertContext } from "../context/alertContext";

export const ContactMeSection = () => {
  const { submit, isLoading, response } = useSubmit();
  const { onOpen } = useAlertContext();

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, "Only letters are allowed")
      .required("First name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    comment: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      comment: "",
    },
    validationSchema,
    onSubmit: async (values, actions) => {
      const result = await submit("contact", values);

      if (result.type === "success") {
        onOpen({
          type: "success",
          message: `Thanks for your message, ${values.firstName}!`,
        });
        actions.resetForm();
      } else {
        onOpen({
          type: "error",
          message: "Oops! Something went wrong.",
        });
      }
    },
  });

  return (
    <Box
      id="contactme-section"
      bg="gray.100"
      minH="100vh"
      py={10}
      px={{ base: 4, md: 12 }}
    >
      <Heading mb={8} textAlign="center" color="teal.600">
        Contact Me
      </Heading>

      <form>
        <VStack spacing={6} align="stretch">
          {/* First Name */}
          <Box>
            <Text mb={2} fontWeight="medium">
              First Name
            </Text>
            <Input
              placeholder="Your name"
              {...formik.getFieldProps("firstName")}
              onKeyDown={onlyLetters}
              aria-describedby="firstName-error"
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <Text color="red.500" fontSize="sm">
                {formik.errors.firstName}
              </Text>
            )}
          </Box>

          {/* Email Address */}
          <Box>
            <Text mb={2} fontWeight="medium">
              Email Address
            </Text>
            <Input
              type="email"
              placeholder="you@example.com"
              {...formik.getFieldProps("email")}
              aria-describedby="email-error"
            />
            {formik.touched.email && formik.errors.email && (
              <Text color="red.500" fontSize="sm">
                {formik.errors.email}
              </Text>
            )}
          </Box>

          {/* Message */}
          <Box>
            <Text mb={2} fontWeight="medium">
              Message
            </Text>
            <Textarea
              rows={5}
              placeholder="Write your message here..."
              {...formik.getFieldProps("comment")}
            />
            {formik.touched.comment && formik.errors.comment && (
              <Text color="red.500" fontSize="sm">
                {formik.errors.comment}
              </Text>
            )}
          </Box>

          {/* Submit */}
          <Button
            type="submit"
            colorScheme="teal"
            alignSelf="flex-end"
            isLoading={isLoading}
          >
            Submit
          </Button>

          {response && (
            <Alert.Root
              status={response.type}
              variant="subtle"
              colorPalette={response.type === "success" ? "green" : "red"}
              borderRadius="md"
              mt={4}
            >
              <Alert.Indicator />
              <Alert.Content>
                <Alert.Title>
                  {response.type === "success" ? "Success" : "Error"}
                </Alert.Title>
                <Alert.Description>{response.message}</Alert.Description>
              </Alert.Content>
            </Alert.Root>
          )}
        </VStack>
      </form>
    </Box>
  );
};
