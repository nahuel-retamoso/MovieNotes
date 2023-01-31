import { Text, Flex } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import MovieContext from "../../contexts/MovieContext";
import { useContext } from "react";

function SideItems ({name}) {

    const { setSideSelect } = useContext(MovieContext);

    return (
        <Flex w='100%' h='9%' align={'center'} _active={{boxShadow: 'inner'}} _hover={{bg:'yellow.200'}} onClick={() => setSideSelect(name)}>
            <ChevronRightIcon ml='10%'/>
            <Text color='blackAlpha.900' ml='10%'>{name}</Text>
        </Flex>
    )
}

export default SideItems;