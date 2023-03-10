import { Input } from '@/components/Form/Input'
import { Flex,  Button, Stack } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
        <Flex as="form" width="100%" maxWidth={360} bg="gray.800" padding="8" borderRadius={8} flexDir="column">
          <Stack spacing="4">

            
              <Input type="email" name="email" label="E-mail"/>
              <Input type="password" name="password" label="Senha"/>
                <Button type="submit" mt="6" colorScheme="pink" >Entrar</Button>
             

          </Stack>

        </Flex>

      </Flex>


    </>
  )
}
