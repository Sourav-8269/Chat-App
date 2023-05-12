import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = () => {
    console.log(email, password);
    const payload = {email, password };
    if (email == "" && password == "") {
      toast({
        title: "Please Enter all Fields",
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    setLoading(true);
    axios.post("http://localhost:8080/users/login", payload)
      .then((res) => {
        if(res.data.user!=undefined){
          toast({
            title: "Registered Successfully",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
          setLoading(false);
          navigate("/chats");
        }else{
          toast({
            title: res.data,
            status: "info",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast({
          title: "Something Went Wrong",
          status: "info",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} fontFamily={"cursive"} >Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
              isLoading={loading}
              loadingText="Submitting"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
