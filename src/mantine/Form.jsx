// // src/Form.js
// import React from 'react';
// import { useForm} from '@mantine/form';
// import { TextInput, PasswordInput, Button, Group, Title ,NumberInput,Radio} from '@mantine/core';
// import './Focss.css';

// const Form = ({ type, onClose }) => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // You can handle form submission logic here, like sending data to a server
//     console.log(`${type} submitted!`);
//     onClose();
    
//   };

//   return (
//     <form onSubmit={handleSubmit} className='form-container'>
//       <Title order={3} mb="md" className='form-title'>Register with {type}</Title>
//       {type === 'Form One' && (
//         <>
//           {/* <TextInput required label="Email" placeholder="you@example.com" mb="md" />
//           <PasswordInput required label="Password" placeholder="Your password" mb="md" />
//           <PasswordInput required label="Confirm Password" placeholder="Confirm your password" mb="md" /> */}
//         <TextInput
//           withAsterisk
//           label="Name"
//           placeholder="Enter your Name"
          
//           mb='xs' radius='lg'
          
//         />
//           <TextInput
//           withAsterisk
//           label="Category"
//           placeholder="enter category"

//           mb='xs' radius='lg'
//         />
//       <TextInput
//         withAsterisk
//         mask="+91 (000) 000-00-00"
//         label="phone number"
//         placeholder="Your phone number"
//          mb='xs' radius='lg'
//       />
//           <TextInput
//           withAsterisk
//           label="Email"
//           placeholder="your@email.com"
//            mb='xs' radius='lg'
//         />
//           <TextInput
//           withAsterisk
//           label="Location"
//           placeholder="your location"
//            mb='xs' radius='lg'
//         />
//     <NumberInput
//       placeholder="Your age"
//       label="Your age"
//       withAsterisk
//        mb='xs' radius='lg'
//     />
//       <Radio.Group
//       name="favoriteFramework"
//       label="Gender"
//       withAsterisk
//        mb='xs' radius='lg'
//       style={{color:'blue'}}
//     >
//       <Group mt="xs">
//         <Radio value="male" label="Male" />
//         <Radio value="female" label="Female" />
//         <Radio value="other" label="Other" />
//       </Group>
//     </Radio.Group>

//         <Group position="right" mt="md">
//           <Button type="submit">Submit</Button>
//         </Group>
//         </> 
//       )}
//       {type === 'Form Two' && (
//         <>
//           <TextInput required label="Username" placeholder="Your username" mb="md" />
//           <PasswordInput required label="Password" placeholder="Your password" mb="md" />
//           <PasswordInput required label="Confirm Password" placeholder="Confirm your password" mb="md" />
//         </>
//       )}
//       <Group position="right" mt="md">
//         <Button type="submit" className='button'>Register</Button>
//       </Group>
//     </form>
//   );
// };

// export default Form;


// import React, { useState } from 'react';
// import { Button, Modal, TextInput, Group, Title } from '@mantine/core';

// const RegisterForms = () => {
//   const [opened, setOpened] = useState(false);
//   const [activeForm, setActiveForm] = useState(0);

//   const forms = [
//     { title: 'Form 1', fields: ['Field 1', 'Field 2'] },
//     { title: 'Form 2', fields: ['Field A', 'Field B'] },
//     { title: 'Form 3', fields: ['Field X', 'Field Y'] },
//     { title: 'Form 4', fields: ['Field I', 'Field II'] },
//   ];

//   const openModal = (index) => {
//     setActiveForm(index);
//     setOpened(true);
//   };

//   return (
//     <div>
//       {forms.map((form, index) => (
//         <Button key={index} onClick={() => openModal(index)}>
//           Open {form.title}
//         </Button>
//       ))}

//       <Modal opened={opened} onClose={() => setOpened(false)} title={forms[activeForm].title}>
//         <form>
//           {forms[activeForm].fields.map((field, index) => (
//             <TextInput key={index} label={field} placeholder={`Enter ${field}`} required />
//           ))}
//           <Group position="right" mt="md">
//             <Button type="submit">Submit</Button>
//           </Group>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default RegisterForms;

// import React from 'react';
// import { TextInput, PasswordInput, Button, Group, Title, NumberInput, Radio } from '@mantine/core';
// import { useForm} from '@mantine/form';

// const Form = ({ type, onClose }) => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic here
//     console.log(`${type} submitted!`);
//     onClose();
//   };
//   const form = useForm({
//     initialValues: {
//     name:'',
//     category:'',
//     phone:'',
//     email: '',
//     location:'',
//     age:'',
//     gender:'',
//    termsOfService: false,
//    }
//   })

//   return (
//     <form onSubmit={handleSubmit} className='form-container'>
//       <Title order={3} mb="md" className='form-title'>Register with {type}</Title>

//       {type === 'Form One' && (
//         <>
//           <TextInput
//             withAsterisk
//             label="Name"
//             placeholder="Enter your Name"
//             mb='xs' radius='lg'
//             {...form.getInputProps('name')}
//           />
//           <TextInput
//             withAsterisk
//             label="Category"
//             placeholder="Enter category"
//             mb='xs' radius='lg'
//           />
//           <TextInput
//             withAsterisk
//             mask="+91 (000) 000-00-00"
//             label="Phone number"
//             placeholder="Your phone number"
//             mb='xs' radius='lg'
//           />
//           <TextInput
//             withAsterisk
//             label="Email"
//             placeholder="your@email.com"
//             mb='xs' radius='lg'
//           />
//           <TextInput
//             withAsterisk
//             label="Location"
//             placeholder="Your location"
//             mb='xs' radius='lg'
//           />
//           <NumberInput
//             placeholder="Your age"
//             label="Your age"
//             withAsterisk
//             mb='xs' radius='lg'
//           />
//           <Radio.Group
//             name="gender"
//             label="Gender"
//             withAsterisk
//             mb='xs' radius='lg'
//           >
//             <Group mt="xs">
//               <Radio value="male" label="Male" />
//               <Radio value="female" label="Female" />
//               <Radio value="other" label="Other" />
//             </Group>
//           </Radio.Group>
//         </>
//       )}

//       {type === 'Form Two' && (
//         <>
//           <TextInput required label="Username" placeholder="Your username" mb="md" />
//           <PasswordInput required label="Password" placeholder="Your password" mb="md" />
//           <PasswordInput required label="Confirm Password" placeholder="Confirm your password" mb="md" />
//         </>
//       )}

//       {type === 'Form Three' && (
//         <>
//           <TextInput required label="Company Name" placeholder="Your company name" mb="md" />
//           <TextInput required label="Position" placeholder="Your position" mb="md" />
//           <TextInput required label="Work Email" placeholder="your@company.com" mb="md" />
//           <NumberInput
//             required
//             label="Years of Experience"
//             placeholder="Your years of experience"
//             mb='md'
//           />
//           <TextInput
//             required
//             label="Work Phone"
//             mask="+91 (000) 000-00-00"
//             placeholder="Your work phone number"
//             mb='md'
//           />
//         </>
//       )}

//       {type === 'Form Four' && (
//         <>
//           <TextInput required label="Event Name" placeholder="Name of the event" mb="md" />
//           <TextInput required label="Date" placeholder="Event date" mb="md" />
//           <TextInput required label="Location" placeholder="Event location" mb="md" />
//           <TextInput required label="Organizer Name" placeholder="Your name" mb="md" />
//           <TextInput
//             required
//             label="Contact Email"
//             placeholder="your@email.com"
//             mb="md"
//           />
//         </>
//       )}

//       <Group position="right" mt="md">
//         <Button type="submit">Submit</Button>
//       </Group>
//     </form>
//   );
// };

// export default Form;


import React from 'react';
import { TextInput, PasswordInput, Button, Group, Title, NumberInput, Radio } from '@mantine/core';
import { useForm } from '@mantine/form';


const Form = ({ type, onClose }) => {
  // Initialize the form
  const form = useForm({
    initialValues: {
      name: '',
      category: '',
      phone: '',
      email: '',
      location: '',
      age: '',
      gender: '',
      username: '',
      password: '',
      confirmPassword: '',
      companyName: '',
      position: '',
      workEmail: '',
      yearsOfExperience: '',
      workPhone: '',
      eventName: '',
      eventDate: '',
      eventLocation: '',
      organizerName: '',
      contactEmail: '',
    },
  });

  const handleSubmit = (values) => {
    console.log(`${type} submitted!`, values);
    onClose();
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} className='form-container'>
      <Title order={3} mb="md" className='form-title'>Register with {type}</Title>

      {type === 'Form One' && (
        <>
          <TextInput
            withAsterisk
            label="Name"
            placeholder="Enter your Name"
            mb='xs' radius='md'
            {...form.getInputProps('name')}
          />

          <TextInput
            withAsterisk
            mask="+91 (000) 000-00-00"
            label="Phone number"
            placeholder="Your phone number"
            mb='xs' radius='md'
            {...form.getInputProps('phone')}
          />
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            mb='xs' radius='md'
            {...form.getInputProps('email')}
          />
            <TextInput
            withAsterisk
            label="Category"
            placeholder="Enter category"
            mb='xs' radius='md'
            {...form.getInputProps('category')}
          />
          <TextInput
            withAsterisk
            label="Location"
            placeholder="Your location"
            mb='xs' radius='md'
            {...form.getInputProps('location')}
          />
          <NumberInput
            placeholder="Your age"
            label="Your age"
            withAsterisk
            mb='xs' radius='md'
            {...form.getInputProps('age')}
          />
          <Radio.Group
            name="gender"
            label="Gender"
            withAsterisk
            mb='xs' radius='md'
            {...form.getInputProps('gender')}
          >
            <Group mt="xs">
              <Radio value="male" label="Male" />
              <Radio value="female" label="Female" />
              <Radio value="other" label="Other" />
            </Group>
          </Radio.Group>
        </>
      )}

      {type === 'Form Two' && (
        <>
          <TextInput required label="Username" placeholder="Your username" mb="md" {...form.getInputProps('username')} />
          <PasswordInput required label="Password" placeholder="Your password" mb="md" {...form.getInputProps('password')} />
          <PasswordInput required label="Confirm Password" placeholder="Confirm your password" mb="md" {...form.getInputProps('confirmPassword')} />
        </>
      )}

      {type === 'Form Three' && (
        <>
          <TextInput required label="Company Name" placeholder="Your company name" mb="md" {...form.getInputProps('companyName')} />
          <TextInput required label="Position" placeholder="Your position" mb="md" {...form.getInputProps('position')} />
          <TextInput required label="Work Email" placeholder="your@company.com" mb="md" {...form.getInputProps('workEmail')} />
          <NumberInput required label="Years of Experience" placeholder="Your years of experience" mb='md' {...form.getInputProps('yearsOfExperience')} />
          <TextInput required label="Work Phone" mask="+91 (000) 000-00-00" placeholder="Your work phone number" mb='md' {...form.getInputProps('workPhone')} />
        </>
      )}

      {type === 'Form Four' && (
        <>
          <TextInput required label="Event Name" placeholder="Name of the event" mb="md" {...form.getInputProps('eventName')} />
          <TextInput required label="Date" placeholder="Event date" mb="md" {...form.getInputProps('eventDate')} />
          <TextInput required label="Location" placeholder="Event location" mb="md" {...form.getInputProps('eventLocation')} />
          <TextInput required label="Organizer Name" placeholder="Your name" mb="md" {...form.getInputProps('organizerName')} />
          <TextInput required label="Contact Email" placeholder="your@email.com" mb="md" {...form.getInputProps('contactEmail')} />
        </>
      )}

      <Group position="right" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
};

export default Form;
