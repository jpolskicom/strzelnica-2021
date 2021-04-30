import { Image, Text } from 'react-konva';
import useImage from 'use-image';
import {useRef} from 'react';
import { getRandomInt } from '../helpers'


const BeerCan = props => {

    const beerCanItem = useRef();
    const beerCanText = useRef();

    const [canImage] = useImage(`/images/${props.label}.png`);

    const handleShot = () => {

        props.onClick();

        beerCanItem.current.to({
            rotation:getRandomInt(0,2) == 1?getRandomInt(90,70):getRandomInt(-90,-70),
            offsetY:props.height/2,
            offsetX:props.width/2,
            duration: 0.1
        });

        beerCanText.current.to({
            y:-500,
            scaleY:4,
            scaleX:4,
            duration: 1
        })

    }

    const beerCanTextProps = {
        width: props.width,
        height: props.height,  
        verticalAlign:'middle',
        align:'center',
        fill:'#fff',
        text:props.points+'%',
        x:props.x,
        y:props.y,
        onClick:handleShot
    };

    return (
        <>
            <Image image={canImage} {...props} ref={beerCanItem}></Image>
            <Text {...beerCanTextProps} ref={beerCanText}></Text>
        </>
    )
}

export default BeerCan;