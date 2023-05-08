import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/download (1).svg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const Navbar = () => {
  return (
   <HStack  padding='10px'>
     <Image src={logo} paddingBottom={6}/>
     <SearchInput/>
     <ColorModeSwitch/>
   </HStack>
  )
}

export default Navbar