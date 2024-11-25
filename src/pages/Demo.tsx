
import { Button } from "@/components/ui/button"
import { HStack } from "@chakra-ui/react"
export default function Demo(){
    return(
        <div>
        <HStack>
      <Button bgColor="pink.500">Click me</Button>
      <Button>Click me</Button>
    </HStack>
        </div>
    )
}