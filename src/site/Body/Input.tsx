import {ChangeEvent} from "react";

type InputPropsType = {
    title: string
    onChange: (title: string) => void
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      props.onChange(e.currentTarget.value)
    }

  return (
      <div>
          <input value={props.title} onChange={onChangeHandler}/>
      </div>
  )
}