import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonComponent from "../Button/ButtonComponent"
import { useRef, useState, useEffect } from "react";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import {BUTTON_ARRAY} from '../../../utils/Constants'

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
    <div className="flex w-full items-center bg-white static lg:fixed lg:top-16 border-t-gray-300 h-16">
      {canScrollLeft && (<button onClick={handlePrevious} className="h-12 w-12 hover:bg-gray-300 rounded-full bg-white p-2">
          <FontAwesomeIcon className="text-gray-400 font-light" icon={faLessThan} />
      </button>)}
      <div ref={scrollContainer} className="flex w-auto lg:w-[80%] md:w-[73%] overflow-x-auto [&::-webkit-scrollbar]:h-0">
        {BUTTON_ARRAY.map((item) => <ButtonComponent key={item} btnText={item}/>)}
    </div>
    {canScrollRight && (<button onClick={handleNext} className="h-12 w-12 hover:bg-gray-300 bg-white rounded-full p-2">
        <FontAwesomeIcon className="text-gray-400 font-light" icon={faGreaterThan} />
    </button>)}
    </div> 
  )
}

export default ButtonList