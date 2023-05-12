import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading,setLoading]=useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const toast=useToast();

  const handleSubmit = () => {
    console.log(name,email,password)
    const payload={name,email,password};
    if(name==""&&email==""&&password==""){
      toast({
        title: "Please Enter all Fields",
        status: "info",
        duration: 2000,
        isClosable: true,
        position:"top"
      });
      return;
    }
    setLoading(true);
    axios.post("http://localhost:8080/users/register",payload)
    .then((res)=>{
      toast({
        title: "Registered Successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
        position:"top"
      });
      setLoading(false)
      navigate("/login")
    })
    .catch((err)=>{
      setLoading(false)
      toast({
        title: "Something Went Wrong",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position:"top"
      });
    })
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} w={["32%"]} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"} fontFamily={"cursive"} >
            Register
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isRequired
            >
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                isLoading={loading}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link to="/login" style={{ color: "#027bff" }}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
