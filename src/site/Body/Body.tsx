import {MapComp} from "./MapComp";
import {Button} from "./Button";
import {useState} from "react";
import {BankFilter} from "./BanlnoteFilter";
import { List } from "./List";


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


export type BanknoteType = {
    banknots: string
    value: number
    number: string
}

export type FilterType = 'All' | "Dollars" | 'Rubles'


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

    const [filter, setFilter] = useState<FilterType>('All')

    let filteredMoney = money;

    const onClickHandler = (filter: FilterType) => {
        setFilter(filter)
    }
    if (filter === "Rubles") {
        filteredMoney = filteredMoney.filter(i => i.banknots === 'RUBLS')
    }
    if (filter === "Dollars") {
        filteredMoney = filteredMoney.filter(i => i.banknots === 'Dollars')
    }

    console.log(filter);
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

            <BankFilter money={filteredMoney} callback={onClickHandler}/>

            <List />

        </div>
    );
}