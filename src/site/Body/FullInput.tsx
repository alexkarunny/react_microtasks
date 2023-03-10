import {ChangeEvent, useState} from "react";

type FullInputPropsType = {
    addTitle: (title: string) => void
}

export const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState<string>('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value)
    }

    const onClickHandler = () => {
        props.addTitle(title)
        setTitle('')
    }

  return (
      <div>
          <input onChange={onChangeInputHandler} value={title} />
          <button onClick={() => onClickHandler()}>+</button>
      </div>
  )
}