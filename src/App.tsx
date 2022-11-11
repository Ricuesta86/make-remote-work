import { Center, Circle, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'

function App() {

  return (
      <Stack direction={{ base: "column", sm: "row" }} spacing="24px">
        <Center w="40px" h="40px" bg="yellow.200" textAlign={"center"} >
          1
        </Center>
        <Circle size={"40px"} bg="tomato">
          2
        </Circle>
        <Center w="40px" h="40px" bg="pink.100">
          3
        </Center>
      </Stack>
  )
}

export default App
