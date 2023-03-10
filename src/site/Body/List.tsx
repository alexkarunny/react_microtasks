import {useState} from "react";
import {FullInput} from "./FullInput";
import {Input} from "./Input";
import {Button} from "./Button";
import {ButtonNew} from "./ButtonNew";




export const List = () => {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState<string>('')


    const addTitle = () => {
        const mes = [...message, {message: title}]
        setMessage(mes)
        setTitle('')
    }

    const addTitleUp = () => {
        const mes = [{message: title}, ...message ]
        setMessage(mes)
        setTitle('')
    }

    const onChange = (title: string) => {
        setTitle(title)
    }

  return    (
        <div>
            {/*<FullInput addTitle={addTitle}/>*/}

            <Input title={title} onChange={onChange}/>
            <ButtonNew callback={addTitle} />
            <Button title={"+++++"} callback={addTitleUp} />
            {message.map((m, i) => <div key={i}>{m.message}</div>)}

        </div>
  )
}