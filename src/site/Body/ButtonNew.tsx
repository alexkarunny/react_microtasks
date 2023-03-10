import exp from "constants";


type ButtonNewProps = {
  callback: () => void
}

export const ButtonNew = (props: ButtonNewProps) => {
  return (
      <button onClick={props.callback}>++</button>
  )
}