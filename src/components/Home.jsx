import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    textTransform: "uppercase",
    p: "4",
    size: "4xl"
}


const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Container maxW={'container.xl'} minH={'100vh'} p="16">
                <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} margin={"auto"}>Services</Heading>
                <Stack h="full" p={"4"} alignItems={"center"} direction={["column", "row"]}>
                    <Image src={img5} h={['40', '400']} filter={"hue-rotate(-130deg)"} />
                    <Text letterSpacing={"widest"} lineHeight={"190%"} p={['4', '16']} textAlign={'center'}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, non hic libero laborum nemo eius voluptatibus reprehenderit nobis minima voluptatum deserunt inventore quis quae minus alias a? Eveniet mollitia exercitationem aut maiores ipsum autem deleniti illum tenetur? Est architecto atque excepturi quis voluptates molestiae minus dolorum, deserunt animi reiciendis, doloremque officiis, eveniet sunt quasi? Ex, fugiat mollitia quo earum sapiente dolores delectus quis ratione sint vitae harum veritatis illo quam placeat exercitationem dicta aliquam quidem consequatur optio corporis molestias, laboriosam a minus non?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
};

const MyCarousel = () => {
    return (
        <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false} >
            <Box w="full" h={"100vh"} objectFit={'cover'} >
                <Image src={img1} />
                <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                    Watch the Future
                </Heading>
            </Box >
            <Box w={"full"} h={"100vh"}  >
                <Image src={img2} />
                <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                    Future is Gaming
                </Heading>
            </Box >
            <Box w={"full"} h={"100vh"}  >
                <Image src={img3} />
                <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                    Gaming on Console
                </Heading>
            </Box >
            <Box w={"full"} h={"100vh"}  >
                <Image src={img4} />
                <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                    Night life is cool
                </Heading>
            </Box >

        </Carousel>
    )

}

export default Home