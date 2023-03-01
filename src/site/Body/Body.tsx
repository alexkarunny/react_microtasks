import {MapComp} from "./MapComp";
import {Button} from "./Button";


type BodyType = {
    titleForBody: string
}

export type CarsPropsType = {
    topCars: CarPropsType[]
}

type CarPropsType = {
    manufacturer: string
    model: string
}

const topCars: Array<CarPropsType> = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

export const Body = (props: BodyType) => {

    const Button1 = (subscriber: string, age: number) => {
        console.log(subscriber)
    }

    const Button2 = (subscriber: string) => {
        console.log(subscriber)
    }

    const Button3 = () => {
        console.log('I\'m stupid')
    }

    return (
        <div>
            {props.titleForBody}
            <MapComp topCars={topCars}/>
            <Button title={'First'} callback={() => Button1('First', 21)}/>
            <Button title={'Second'} callback={() => Button2('Second')}/>
            <Button title={'Third'} callback={Button3}/>

        </div>
    );
}