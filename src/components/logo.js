import { Image, Text } from 'react-konva';
import useImage from 'use-image';

const Gun = props => {
    const [image] = useImage('/images/logo.png');

    const logoProps ={
        ...props
    }

    logoProps.x = props.x?props.x-(logoProps.width/2):0;
    logoProps.y = props.y?props.y-(logoProps.height/2):0;

    return (
        <Image image={image} {...logoProps}></Image>
    )

}

export default Gun;