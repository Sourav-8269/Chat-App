import { SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Tooltip,Text} from '@chakra-ui/react'
import React from 'react'

const Drawer = () => {
  return (
    <>
        <Box>
            <Tooltip label="Search Users" hasArrow placement='bottom-end' >
                <Button variant="ghost">
                    <SearchIcon/>
                    <Text p={2} display={{base:"none",md:"flex"}} >Search User</Text>    
                </Button>
            </Tooltip>
        </Box>
    </>
  )
}

export default Drawer