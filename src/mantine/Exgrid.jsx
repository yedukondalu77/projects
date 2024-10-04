// import {Grid} from '@mantine/core';


// function Exgrid(){
//     return(
//         <div>
//             <h2>grid</h2>
//             <Grid style={{ backgroundColor: '#f0f0f0', color: '#000', margin: '20px'}}>
//               <Grid.Col span={4}style={{ backgroundColor: '#f0f0bb', color: '#000', padding: '20px'}}>1</Grid.Col>
//               <Grid.Col span={4}>2</Grid.Col>
//               <Grid.Col span={4}>3</Grid.Col>
//             </Grid>

//             <Grid grow gutter='sm' style={{backgroundColor:"blue",gap:"2px",wrap:'no-wrap', marginBottom:'30px'}}>
//                 <Grid.Col span={4} style={{backgroundColor:"gray"}}>1</Grid.Col>
//                 <Grid.Col span={4} style={{backgroundColor:"orange"}}>2</Grid.Col>
//                 <Grid.Col span={4}>3</Grid.Col>
//                 <Grid.Col span={4}>4</Grid.Col>
//                 <Grid.Col span={4}>5</Grid.Col>
//             </Grid>
            
//             <Grid grow style={{backgroundColor:'gray',margin:'10px'}}>
//             <Grid.Col span={4}>1</Grid.Col>
//             <Grid.Col span={4}>2</Grid.Col>
//             <Grid.Col span={4}>3</Grid.Col>
//             <Grid.Col span={4}>4</Grid.Col>
//             <Grid.Col span={4}>5</Grid.Col>
//             </Grid>


//     <Grid>
//       <Grid.Col span={3} order={2} orderSm={1} orderLg={3}>2</Grid.Col>
//       <Grid.Col span={3} order={3} orderSm={1} orderLg={2}>3</Grid.Col>
//       <Grid.Col span={3} order={1} orderSm={3} orderLg={1}>1</Grid.Col>
//     </Grid>
  
//             </div>
//           );
//         }
       

// export default Exgrid

import { SimpleGrid } from '@mantine/core';

function Exgrid() {
  return (
    <SimpleGrid cols={3} style={{
        width:'500px',backgroundColor:'green'
    }}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  )
}

export default Exgrid