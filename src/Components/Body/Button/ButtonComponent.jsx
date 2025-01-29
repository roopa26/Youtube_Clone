
const ButtonComponent = ({btnText}) => {
  return (
    <button 
    className="w-fit bg-gray-100 hover:bg-gray-300 p-2 h-fit active:bg-black active:text-white text-black mx-2 text-nowrap text-center font-semibold rounded-lg">
      {btnText}
    </button>
  )
}

export default ButtonComponent