import { Image, Text } from 'react-konva';
import useImage from 'use-image';

const Background = props => {
    const [image] = useImage('/images/bg.png');

    return (
        <Image image={image} {...props}></Image>
    )

}

export default Background;