import Button from "./Button"

const Header = ({titulo}) => {
  return (
    <div className="header">
        <h1>{titulo} </h1>
        <Button titulo="Agregar"/>
    </div>
  )
}

export default Header