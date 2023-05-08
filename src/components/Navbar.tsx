import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/download (1).svg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
  onSearch: (searchText: string) => void
}

const Navbar = ({onSearch}: Props) => {
  return (
   <HStack  padding='10px'>
     <Image src={logo} paddingBottom={6}/>
     <SearchInput onSearch={onSearch}/>
     <ColorModeSwitch/>
   </HStack>
  )
}

export default Navbar