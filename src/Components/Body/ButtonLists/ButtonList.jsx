import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonComponent from "../Button/ButtonCOmponent"
import { useRef, useState, useEffect } from "react";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";

const ButtonList = () => {
const scrollContainer = useRef(null);
const [canScrollLeft, setCanScrollLeft] = useState(false);
const [canScrollRight, setCanScrollRight] = useState(true);

const checkScroll = () => {
  const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
  setCanScrollLeft(scrollLeft > 0);
  setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
};

const handleNext = () => {
  scrollContainer.current.scrollBy({
    left: 150, // Adjust scroll distance
    behavior: "smooth",
  });
}

useEffect(() => {
  // Add scroll event listener to check visibility
  const container = scrollContainer.current;
  container.addEventListener("scroll", checkScroll);

  // Check scroll state on initial render
  checkScroll();

  return () => container.removeEventListener("scroll", checkScroll);
}, []);

const handlePrevious = () => {
  scrollContainer.current.scrollBy({
    left: -150, // Adjust scroll distance
    behavior: "smooth",
  });
}

  return (
    <div className="flex items-center">
      {canScrollLeft && (<button onClick={handlePrevious} className="h-12 w-12 hover:bg-gray-300 rounded-full bg-white p-2">
          <FontAwesomeIcon className="text-gray-400 font-light" icon={faLessThan} />
      </button>)}
      <div ref={scrollContainer} className="flex overflow-x-auto w-full [&::-webkit-scrollbar]:h-0">
        <ButtonComponent btnText={"All"}/>
        <ButtonComponent btnText={"Music"}/>
        <ButtonComponent btnText={"Raga music"}/>
        <ButtonComponent btnText={"Ramayana"}/>
        <ButtonComponent btnText={"Mixes"}/>
        <ButtonComponent btnText={"Tamil Cinema"}/>
        <ButtonComponent btnText={"Mythology"}/>
        <ButtonComponent btnText={"Podcasts"}/>
        <ButtonComponent btnText={"API"}/>
        <ButtonComponent btnText={"puranas"}/>
        <ButtonComponent btnText={"Mantras"}/>
        <ButtonComponent btnText={"Live"}/>
        <ButtonComponent btnText={"Bansuri"}/>
        <ButtonComponent btnText={"Satsung"}/>
        <ButtonComponent btnText={"Skills"}/>
        <ButtonComponent btnText={"Violins"}/>
        <ButtonComponent btnText={"Albums"}/>
        <ButtonComponent btnText={"Recently uploaded"}/>
        <ButtonComponent btnText={"Comedy"}/>
        <ButtonComponent btnText={"watched"}/>
        <ButtonComponent btnText={"New to you"}/>
    </div>
    {canScrollRight && (<button onClick={handleNext} className="h-12 w-12 hover:bg-gray-300 bg-white rounded-full p-2">
        <FontAwesomeIcon className="text-gray-400 font-light" icon={faGreaterThan} />
    </button>)}
    </div> 
  )
}

export default ButtonList