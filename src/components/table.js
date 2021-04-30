import { Image, Text } from 'react-konva';
import useImage from 'use-image';
import {useRef,useEffect,useState} from 'react';

const Table = props => {

        const tableRef = useRef();
        const [tableProps,setTableProps] = useState({...props});

        const [image] = useImage('/images/table.png');

        useEffect(() => {
            setTableProps({
               ...tableProps,
               y:(props.y*0.95)-tableRef.current.getHeight()
            })
        },[image])



        return (
            <Image image={image} {...tableProps} ref={tableRef}></Image>
        );
}

export default Table