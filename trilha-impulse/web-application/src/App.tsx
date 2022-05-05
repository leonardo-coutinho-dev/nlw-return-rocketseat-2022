interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  const {text} = props;
  return <button>{text ?? "Default Value"}</button>
}

function App() {
  return (
    <>
      <Button text="texto1"/>
      <Button text="texto2"/>
      <Button />
    </>
  )
}

export default App
