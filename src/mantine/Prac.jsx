// import { Container } from '@mantine/core';

// function Demo1() {
//   return (
//     <>
//       <Container>
//         Default container
//       </Container>

//       <Container size="xs" px="xs">
//         xs container with xs horizontal padding
//       </Container>

//       <Container size="30rem" px={0}>
//         30rem container with 0 horizontal padding
//       </Container>
//     </>
//   );
// }
import { MantineProvider, Container } from '@mantine/core';

function Demo1() {
  return (
    <MantineProvider
      theme={{
        components: {
          Container: {
            defaultProps: {
              sizes: {
                xs: 540,
                sm: 720,
                md: 960,
                lg: 1140,
                xl: 1320,
              },
            },
          },
        },
      }}
    >
      <Container size="xs">Your app</Container>
    </MantineProvider>
  );
}

export default Demo1