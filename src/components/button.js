import { Image, Text } from 'react-konva';
import useImage from 'use-image';

const Button = props => {

    
    const [image] = useImage('/images/button-texture.png');

    const textProps ={
        fill:'#fff',
        fontSize:props.fontSize?props.fontSize:50,
        fontStyle:'italic',
        letterSpacing:5,
        width:360,
        height:200,
        verticalAlign:'middle',
        align:'center',
        text:props.text?props.text:''
    }

    textProps.x = props.x?props.x-(textProps.width/2):0;
    textProps.y = props.y?props.y-(textProps.height/2):0;

    return (
        <>
            <Image image={image} onClick={props.onClick} x={textProps.x} y={textProps.y}></Image>
            <Text {...textProps} onClick={props.onClick}></Text>
        </>
    )
}

export default Button