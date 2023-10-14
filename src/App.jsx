import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme.js';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import SidebarNav from './components/SidebarNav';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <SidebarNav />
      <main>
        <Home />
        <AboutMe />
        <Experience />
        {/* Other components will go here */}
      </main>
    </ChakraProvider>
  );
}

export default App;
