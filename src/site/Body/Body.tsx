import {MapComp} from "./MapComp";


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
    return (
        <div>
            {props.titleForBody}
            <MapComp topCars={topCars}/>
        </div>
    );
}