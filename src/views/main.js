import './main.scss';

import {useState,useEffect,useReducer,useRef} from 'react'

import { getRandomInt } from '../helpers'

import {useCursor} from '../hooks/useCursor'
import {useScreen} from '../hooks/useScreen'

import { Stage, Layer } from 'react-konva';

import Button from '../components/button.js'
import Logo from '../components/logo.js'
import BeerCan from '../components/beer-can.js'
import Gun from '../components/gun.js'
import Table from '../components/table.js'
import Background from '../components/background.js'


function MainView(){


    const screenSize = useScreen();
    const cursorPosition = useCursor();

    const mainStage = useRef()

    const beersLabels = [
        'beer-can-elemeles',
        'beer-can-siuryszczyny',
        'beer-can-impissed'
    ];
    
    const [startGame,setStartGame] = useState(false);

    const [beers,setBeer] = useReducer((state, action) => {
        switch (action.type) {
            case 'PUSH':
                return [
                    ...action.payload
                ];
                break;
            case 'SHOT':
                let data = [...state];
                data[action.id].shooted = true;
                return data
                break;
            default:
                return state
                break;
        }
    },[]);



    const generateBeers = (x) => {
        var beersTempArr = [];
        for (let i = 0; i < x; i++) {

            beersTempArr.push({
                x:getRandomInt(0,screenSize.width*.8),
                y:getRandomInt(screenSize.height/3.4,screenSize.height/2.6),
                width: 68,
                height: 150,
                key:i,
                points:getRandomInt(4,7),
                label:beersLabels[Math.floor(Math.random() * beersLabels.length)],
                shooted: false
            });

        }
        setBeer({type:'PUSH',payload:beersTempArr});
    }

    useEffect(() => {

        generateBeers(20);

        mainStage.current.to({
            shadowBlur: 10,
            duration: 10
        })

    },[startGame]);


    return (
        <div className="v-main">
            <Stage width={screenSize.width} height={screenSize.height} ref={mainStage}>
                {   startGame == true &&
                    <Layer onMouseEnter={e => {e.target.getStage().container().style.cursor = "url(images/cursor.cur) 25 25 ,auto";}}>
                        <Background width={screenSize.width+(screenSize.width*.3)} x={-cursorPosition.x/15} y={-cursorPosition.y/15}></Background>
                        <Table width={screenSize.width} y={screenSize.height}></Table>
                        { beers.map((beer,id) => {
                            return (<BeerCan {...beer} onClick={() => { console.log('shoot'); setBeer({type:'SHOT',id:id}) }}></BeerCan>)
                        }) }
                        <Gun x={cursorPosition.x-600} y={(screenSize.height*.1)+cursorPosition.y*.9}></Gun>
                    </Layer>
                }
                { startGame == false &&
                    <Layer width={screenSize.width} height={screenSize.height}>
                        <Logo x={screenSize.width/2} y={screenSize.height/4} width={350} height={123}></Logo>
                        <Button text={'GRAJ!'} onClick={() => {setStartGame(true);} } x={screenSize.width/2} y={screenSize.height/2}></Button>
                    </Layer>
                }
            </Stage>
        </div>
    );
}

export default MainView;