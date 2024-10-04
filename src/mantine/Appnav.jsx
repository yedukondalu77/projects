// import { useState } from 'react';
// import {
//     AppShell,
//     Navbar,
//     Header,
//     Footer,
//     Aside,
//     Text,
//     MediaQuery,
//     Burger,
//     useMantineTheme,
//   } from '@mantine/core';
  
//   export default function AppShellDemo() {
//     const theme = useMantineTheme();
//     const [opened, setOpened] = useState(false);
//     return (
//       <AppShell
//         styles={{
//           main: {
//             background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
//           },
//         }}
//         navbarOffsetBreakpoint="sm"
//         asideOffsetBreakpoint="sm"
//         navbar={
//           <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
//             <Text>Application navbar</Text>
//           </Navbar>
//         }
//         aside={
//           <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
//             <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
//               <Text>Application sidebar</Text>
//             </Aside>
//           </MediaQuery>
//         }
//         footer={
//           <Footer height={60} p="md">
//             Application footer
//           </Footer>
//         }
//         header={
//           <Header height={{ base: 50, md: 70 }} p="md">
//             <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
//               <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
//                 <Burger
//                   opened={opened}
//                   onClick={() => setOpened((o) => !o)}
//                   size="sm"
//                   color={theme.colors.gray[6]}
//                   mr="xl"
//                 />
//               </MediaQuery>
  
//               <Text>Application header</Text>
//             </div>
//           </Header>
//         }
//       >
//         <Text>Resize app to see responsive navbar in action</Text>
//       </AppShell>
//     );
//   }
// import {AppShell, Navbar,Header, } from "@mantine/core";

// function AppShellDemo(){
//     return(
//         <AppShell header={<Header/>} navbar={<Navbar/>}hidden>
//             app content
//         </AppShell>
//     )
// }

// export default AppShellDemo


// import{Navbar,boxShadow} from '@mantine/core';


// export default function AppShellDemo(){
//     return(
//         <Navbar height={500} p='xs' width={{base:400}} style={{backgroundColor:'orange'}}>
//             <Navbar.Section>nav:jai</Navbar.Section>
//             <Navbar.Section grow mt='md'>growed:lava</Navbar.Section>
//             <Navbar.Section style={{boxShadow:'0,0,10,black'}}>footer:kusa</Navbar.Section>
//         </Navbar>
//     )
// }

// import { Navbar} from "@mantine/core";

// export default function AppShellDemo(){
// return(
//     <Navbar width={{
//         sm:300, lg:400,base:100
//     }} style={{backgroundColor:"yellow"}}>
//         app content
//     </Navbar>
// )
// }


