import { BellIcon, SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Tooltip,Text, Heading,Flex,Menu,MenuList,MenuItem,MenuButton,Avatar,Center,MenuDivider,Stack, useDisclosure,
    useColorModeValue,
    useColorMode} from '@chakra-ui/react'
import React from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Drawer = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} display="flex" justifyContent="space-between" alignItems="center" p="6px 12px" >
            <Tooltip label="Search Users" hasArrow placement='bottom-end' >
                <Button variant="ghost">
                    <SearchIcon/>
                    <Text p={2} display={{base:"none",md:"flex"}} >Search User</Text>    
                </Button>
            </Tooltip>
            <Heading fontSize={"2xl"} textAlign={"center"} fontFamily={"cursive"} >
            Chat App
          </Heading>
          <Flex alignItems={'center'}>
          
            <Stack direction={'row'} spacing={{base:"1",md:"7"}}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button><BellIcon/></Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <MenuDivider />
                  {/* <br /> */}
                  <Center>
                    <p>Email</p>
                  </Center>
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Box>
    </>
  )
}

export default Drawer