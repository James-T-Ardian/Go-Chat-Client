import { Input, Button, Flex } from '@chakra-ui/react'
import { useState } from 'react'

export type InputSendHandler = (text: string) => React.MouseEventHandler<HTMLButtonElement>

interface InputGroupProps {
  onInputSend: InputSendHandler
  textInputPlaceholder: string
  inputButtonText: string
}
const InputGroup: React.FC<InputGroupProps> = ({ onInputSend, textInputPlaceholder, inputButtonText }: InputGroupProps): JSX.Element => {
  const [inputText, setInputText] = useState('')

  const onTextChange: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(event.currentTarget.value)
  }

  return (
    <>
      <Flex margin='10px 0px'>
        <Input margin= '0px 10px' placeholder={textInputPlaceholder} size='md' color='white' onChange={onTextChange} maxWidth='800px' minWidth='400px' width='35vw'/>
        <Button width='max-content' minWidth='100px' onClick={onInputSend(inputText)}>{inputButtonText}</Button>
      </Flex>
    </>

  )
}

export default InputGroup
