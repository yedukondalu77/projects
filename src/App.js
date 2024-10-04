// import { Center, MantineProvider } from '@mantine/core';
// import logo from './logo.svg';
// import Practice from './mantine/Practice';
// import Enter from './mantine/Center';
// import Indemo from './mantine/Prac';
// import Dflex from './mantine/Exflex';
// import Dgrid from './mantine/Exgrid';
// import Navg from './mantine/Appnav';
// import Butex from './mantine/Buttons'

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <MantineProvider>
//       {/* <Practice />
//       <Enter/>
//       <Indemo/> */}
//       {/* <Dflex/>
//       <Dgrid/> */}
//       {/* <Navg/> */}
//       <Butex/>
//       </MantineProvider>
      
//     </div>
//   );
// }

// export default App;


// src/App.js
// src/App.js
import React, { useState } from 'react';
import { Button, MantineProvider, Modal,useMantineTheme } from '@mantine/core';
import Form from './mantine/Form';


const App = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [currentForm, setCurrentForm] = useState('');

  const openModal = (formType) => {
    setCurrentForm(formType);
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
    setCurrentForm('');
  };
  const theme = useMantineTheme();


  return (
    <>
      <div style={{width:'300px',height:'300px',boxShadow:'rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px',margin:'20px',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div style={{display:'flex',flexDirection:'column',width:'200px',height:'200px',flexWrap:'wrap',gap:'10px',margin:'20px'}}>
      <Button onClick={() => openModal('Form One')}>Open Form One</Button>
      <Button onClick={() => openModal('Form Two')}>
        Open Form Two
      </Button>
      <Button onClick={() => openModal('Form Three')}>Open Form Three</Button>
      <Button onClick={() => openModal('Form Four')}>Open Form Four</Button>
      </div>
      </div>



      <Modal opened={modalOpened} onClose={closeModal} title="Registration Form" transitionProps={{ transition: 'fade', duration: 300, timingFunction: 'ease-in-out' }}
              overlayProps={{
                color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
                opacity: 0.55,
                blur: 3,
              }}
      
      >
        <Form type={currentForm} onClose={closeModal} />
        

      </Modal>
    {/* <MantineProvider><Butex/></MantineProvider> */}
    </>
  );
};

export default App;


// import React from 'react';
// import { MantineProvider } from '@mantine/core';
// import RegisterForms from './mantine/Form';

// const App = () => {
//   return (
//     <MantineProvider withGlobalStyles withNormalizeCSS>
//       <RegisterForms />
//     </MantineProvider>
//   );
// };

// export default App;

