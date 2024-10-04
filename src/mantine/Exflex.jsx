import {Flex, Button} from '@mantine/core';

function Deflex(){
    return(
        <Flex
        mih={50}
        bg="rgba(0,0,0,0.5)"
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"

        >
            <Button style={{backgroundColor:"red"}}>Button1</Button>
            <Button>Button2</Button>
            <Button>Button3</Button>
        </Flex>
    );
}

export default Deflex