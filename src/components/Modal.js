import { PlusSquareIcon } from '@chakra-ui/icons';
import { Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, 
    useDisclosure, 
    Button, 
    Textarea,
    Image,
    Flex,
    HStack,
    IconButton,
    Tooltip,
    Popover,
    PopoverTrigger,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    Input,
    PopoverContent,
    PopoverBody,
    VStack,
    Tag
  } from '@chakra-ui/react'
import { useContext, useRef, useState } from 'react';
import MovieContext  from '../contexts/MovieContext';

function MovieModal (props) {

    const { createNote, labels } = useContext(MovieContext);

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [noteLabel, setNoteLabel] = useState([])

    const noteRef = useRef();

    const addLabel = (label) => {
      //aniadir solo las labels que no se repitan
      if (noteLabel.includes(label)) {
        return
      }
      setNoteLabel([...noteLabel, label])
    }

    async function handleSubmit (e) {
        e.preventDefault();
        try {
          await createNote(props.title, props.image, noteRef.current.value, noteLabel)
          onClose()
        } catch {
          console.log('error')
        }
    }

    const labelInputRef = useRef();
    

    return (
        <>
          <Button onClick={onOpen} bgColor='yellow.200' color='blackAlpha.700' _hover={{backgroundColor: 'yellow.300'}}>Select</Button>
    
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent align='center'>
              <ModalHeader mt='4%' >{props.title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex direction='column' justify='center' align='center' mb='2%'>
                  <Image src={props.image} alt='image' boxSize='380px' mb='8%' />
                  <Textarea w='95%' placeholder='Writte your notes about the movie' ref={noteRef}/>
                </Flex>
                <HStack spacing={4}>

                  <Popover placement='bottom-start' >
                    {({ isOpen, onClose }) => (
                      <>
                      <Tooltip label='Add label'>
                        <PopoverTrigger>
                          <IconButton aria-label='Add label' icon={<PlusSquareIcon/>}/>
                        </PopoverTrigger>
                      </Tooltip>
                      <PopoverContent>
                        <PopoverArrow/>
                        <PopoverCloseButton/>
                        <PopoverHeader>Add label</PopoverHeader>
                        <PopoverBody>
                          <Input placeholder='New Label' onKeyPress={event => { if (event.key === 'Enter') { addLabel(labelInputRef.current.value); onClose() }}} ref={labelInputRef} />
                          <VStack spacing={2}>
                            {labels ? labels.map((label, index) => (
                              <Button key={index} onClick={() => addLabel(label)}>{label}</Button>
                            )): null}
                          </VStack>
                        </PopoverBody>
                      </PopoverContent>
                      </>
                    )}
                  </Popover>
                  {noteLabel ? noteLabel.map((label, index) => (
                    <Tag size='sm' key={index} variant='solid' colorScheme='yellow'>{label}</Tag>)): null}
                </HStack>
              </ModalBody>
    
              <ModalFooter>
                  <Button colorScheme='green' mr='42%' onClick={handleSubmit}>
                    Add
                  </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}
export default MovieModal;