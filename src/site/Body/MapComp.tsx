import {CarsPropsType} from "./Body";


export const MapComp = (props: CarsPropsType) => {
    return (
        <table>
            {props.topCars.map((item, index) => {
                return (
                    <tr key={index}>
                        <th>{item.manufacturer}</th>
                        <td>{item.model}</td>
                    </tr>
                )
            })}

        </table>
    )
}