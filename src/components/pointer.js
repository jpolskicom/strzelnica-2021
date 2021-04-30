
import { Image } from 'react-konva';
import useImage from 'use-image';

const Pointer = props => {

    const [image] = useImage('/images/cursor.png');

    const position = {
        x:props.x - 25,
        y:props.y - 25
    };

    return (
        <Image image={image} {...position}></Image>
    );
}

export default Pointer;