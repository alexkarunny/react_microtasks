import {MapComp} from "./MapComp";
import {Button} from "./Button";
import {useState} from "react";


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


type BanknoteType = {
    banknots: string
    value: number
    number: string
}

export const Body = (props: BodyType) => {

    const [money, setMoney] = useState<BanknoteType[]>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])


    const Button1 = (subscriber: string, age: number) => {
        console.log(subscriber)
    }

    const Button2 = (subscriber: string) => {
        console.log(subscriber)
    }

    const Button3 = () => {
        console.log('I\'m stupid')
    }

    let [a, setA] = useState<number>(0);

    const increaseA = () => {
        setA(++a)
    }

    const decreaseA = () => {
        setA(--a)
    }

    const resetA = () => {
        setA(0)
    }

    return (
        <div>
            {props.titleForBody}
            <MapComp topCars={topCars}/>

            <Button title={'+'} callback={increaseA}/>
            <Button title={'-'} callback={decreaseA}/>
            <Button title={'0'} callback={resetA}/>
            <h1>{a}</h1>

            <ul>
                {
                    money.map((i) => {
                        return (
                            <li key={i.number}>
                                <span>{i.number}</span>
                                <span>{i.banknots}</span>
                                <span>{i.value}</span>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    );
}