import { Image, Text } from 'react-konva';
import useImage from 'use-image';

const Gun = props => {
    const [image] = useImage('/images/gun.png');

    return (
        <Image image={image} {...props}></Image>
    )

}

export default Gun;