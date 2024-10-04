// import { ActionIcon, Group } from '@mantine/core';
// import { IoSettingsOutline } from "react-icons/io5";



// export default function Buttons() {
//   return (
//     <>
//     <Group>
//       <ActionIcon variant="transparent" style={{color:"blue"}}><IoSettingsOutline size="1rem" /></ActionIcon>
//       <ActionIcon variant="subtle"><IoSettingsOutline size="1rem" /></ActionIcon>
//       <ActionIcon variant="default"><IoSettingsOutline size="1rem" /></ActionIcon>
//       <ActionIcon variant="outline"><IoSettingsOutline size="1rem" /></ActionIcon>
//       <ActionIcon variant="filled"><IoSettingsOutline size="1rem" /></ActionIcon>
//       <ActionIcon variant="light"><IoSettingsOutline size="1rem" /></ActionIcon> 
//       </Group>
//     </> 
    
//   );
// }


// import { Button } from '@mantine/core';

// export default function Buttons() {
//   return (
//     <Button color="orange" radius="md" size="md" uppercase m='lg'>
//       Settings
//     </Button>
//   );
// }


// import { CloseButton, Group } from '@mantine/core';

// export default function Buttons() {
//   return (
//     <Group position="center">
//       <CloseButton aria-label="Close modal" />
//       <CloseButton title="Close popover" size="xl" iconSize={20} color='red' />
//     </Group>
//   );
// }

// import { CopyButton, Button } from '@mantine/core';

// export default function Buttons() {
//   return (
//     <CopyButton value="https://mantine.dev">
//       {({ copied, copy }) => (
//         <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
//           {copied ? 'Copied url' : 'Copy url'}
//         </Button>
//       )}
//     </CopyButton>
//   );
// }

// import { useState } from 'react';
// import { Chip } from '@mantine/core';

// export default function Buttons() {
//   const [checked, setChecked] = useState(false);

//   return (
//     <Chip checked={checked} onChange={() => setChecked((v) => !v)} className='chip' variant='outlined'>
//       My chip
//     </Chip>
//   );
// }


// import { Chip,Group } from '@mantine/core';

// export default function Buttons() {
//   return (
//     <>
//       <Chip.Group>
//         <Group position="center" m='md'>
//           <Chip value="1">Single chip</Chip>
//           <Chip value="2">Can be selected</Chip>
//           <Chip value="3">At a time</Chip>
//         </Group>
//       </Chip.Group>

//       <Chip.Group multiple>
//         <Group position="center" mt="md" m='md'>
//           <Chip value="1">Multiple chips</Chip>
//           <Chip value="2">Can be selected</Chip>
//           <Chip value="3">At a time</Chip>
//         </Group>
//       </Chip.Group>
//     </>
//   );
// }

// import { useState } from 'react';
// import { Chip } from '@mantine/core';

// export default function Multiple() {
//     // array of strings value when multiple is true
//     const [value, setValue] = useState(['react']);
  
//     return (
//       <Chip.Group multiple value={value} onChange={setValue}>
//         <Chip value="react">React</Chip>
//         <Chip value="ng">Angular</Chip>
//         <Chip value="svelte">Svelte</Chip>
//         <Chip value="vue">Vue</Chip>
//       </Chip.Group>
//     );
//   }
  

// import { Input, Tooltip } from '@mantine/core';
// import { BsTwitter } from "react-icons/bs";
// import { CgDanger } from "react-icons/cg";


// export default function Buttons() {
//   return (
//     <Input
//       icon={<BsTwitter size="1.2rem" color="skyblue" style={{opacity:1}}/>}
//       placeholder="Your twitter"
//       rightSection={
//         <Tooltip label="This is public" position="top-end" withArrow>
//           <div>
//             <CgDanger size="1rem" style={{ display: 'block', opacity: 0.5 }} />
//           </div>
//         </Tooltip>
//       }
//     />
//   );
// }

// import { MultiSelect } from '@mantine/core';

// const data = [
//   { value: 'react', label: 'React' },
//   { value: 'ng', label: 'Angular' },
//   { value: 'svelte', label: 'Svelte' },
//   { value: 'vue', label: 'Vue' },
//   { value: 'riot', label: 'Riot' },
//   { value: 'next', label: 'Next.js' },
//   { value: 'blitz', label: 'Blitz.js' },
// ];

// export default function Buttons() {
//   return (
//     <MultiSelect
//       data={data}
//       label="Your favorite frameworks/libraries"
//       placeholder="Pick all that you like"
//     />
//   );
// }

// import { useState } from 'react';
// import { MultiSelect } from '@mantine/core';

// export default function Buttons() {
//   const [value, setValue] = useState([]);
//   return <MultiSelect value={value} onChange={setValue} data={[   { value: 'react', label: 'React' }]} />;
// }


// 

// 

// import { Group, Pagination } from '@mantine/core';
// import {
//   TbArrowBarToRight,
//   TbArrowBarToLeft,
//   TbArrowLeft,
//   TbArrowRight,
//   TbColumns,
// } from 'react-icons/tb'

// export default function Buttons() {
//   return (
//     <>
//       {/* Regular pagination */}
//       <Pagination
//         total={10}
//         position="center"
//         withEdges
//         nextIcon={TbArrowRight}
//         previousIcon={TbArrowLeft}
//         firstIcon={TbArrowBarToLeft}
//         lastIcon={TbArrowBarToRight}
//         dotsIcon={TbColumns}
//       />

//       {/* Compound pagination */}
//       <Pagination.Root total={10}>
//         <Group spacing={7} position="center" mt="xl">
//           <Pagination.First icon={TbArrowBarToLeft} />
//           <Pagination.Previous icon={TbArrowLeft} />
//           <Pagination.Items dotsIcon={TbColumns} />
//           <Pagination.Next icon={TbArrowRight} />
//           <Pagination.Last icon={TbArrowBarToRight} />
//         </Group>
//       </Pagination.Root>
//     </>
//   );
// }

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';
import { Card,Checkbox,Box,TextInput,NumberInput,Radio} from '@mantine/core';
import { useForm} from '@mantine/form';




export default function Buttons() {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
    name:'',
    category:'',
    phone:'',
    email: '',
    location:'',
    age:'',
    gender:'',
   termsOfService: false,
   },

    validate: {
    email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
   });

  return (
    <>
      <Modal opened={opened} onClose={close} title="Registration" size="sm">
        {/* Modal content */
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Box maw={300} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Name"
          placeholder="Enter your Name"
          {...form.getInputProps('name')}
          mb='xs' radius='lg'
          
        />
          <TextInput
          withAsterisk
          label="Category"
          placeholder="enter category"
          {...form.getInputProps('category')}
          mb='xs' radius='lg'
        />
      <TextInput
        withAsterisk
        mask="+91 (000) 000-00-00"
        label="phone number"
        placeholder="Your phone number"
        {...form.getInputProps('phone')} mb='xs' radius='lg'
      />
          <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')} mb='xs' radius='lg'
        />
          <TextInput
          withAsterisk
          label="Location"
          placeholder="your location"
          {...form.getInputProps('location')} mb='xs' radius='lg'
        />
    <NumberInput
      placeholder="Your age"
      label="Your age"
      withAsterisk
      {...form.getInputProps('age')} mb='xs' radius='lg'
    />
      <Radio.Group
      name="favoriteFramework"
      label="Gender"
      withAsterisk
      {...form.getInputProps('gender')} mb='xs' radius='lg'
      style={{color:'blue'}}
    >
      <Group mt="xs">
        <Radio value="male" label="Male" />
        <Radio value="female" label="Female" />
        <Radio value="other" label="Other" />
      </Group>
    </Radio.Group>

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>

        
      </Card>
  
        }
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>
    </>
  );
}