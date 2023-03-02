import {Button} from "./Button";
import {BanknoteType, FilterType} from "./Body";

type BankFilterType = {
    money: BanknoteType[]
    callback: (filter: FilterType) => void
}

export const BankFilter = (props: BankFilterType) => {
    return (
        <div>
            <ul>
                {
                    props.money.map((i) => {
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

            <Button title={'All'} callback={() => props.callback('All')}/>
            <Button title={'Rubles'} callback={() => props.callback('Rubles')}/>
            <Button title={"Dollars"} callback={() => props.callback("Dollars")}/>
        </div>
    )
}