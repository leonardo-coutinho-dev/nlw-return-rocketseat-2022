interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  const {text} = props;
  return <button className="bg-[#8257e6] px-2 h-10 text-neutral-50 hover:bg-violet-700 transition-colors">{text ?? "Default Value"}</button>
}

function App() {
  return (
    <div className="div-container">
      <Button text="texto1"/>
      <Button text="texto2"/>
      <Button />
    </div>
  )
}

export default App
