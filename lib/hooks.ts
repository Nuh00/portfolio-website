import { useActiveSectionContext } from "@/app/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

type useSectionInViewProps = {
  sectionName: SectionName;
};

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold // This is the percentage of the element that must be in the viewport for the inView variable to be true
  }); // This is a hook that returns a ref and a boolean value that tells us if the ref is in the viewport
  const { setActive, timeOfLastClick } = useActiveSectionContext(); // This is a custom hook that returns the active link and a function to set the active link
  // The ref is used to determine if the element is in the viewport
  // The inView variable is used to determine if the element is in the viewport
  // THis is called the Intersection Observer API and it must be downloaded from npm

  // console.log(inView); // This will log true or false depending on if the element is in the viewport
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActive(sectionName); // This will set the active link to "About" when the element is in the viewport
    }
  }, [inView, setActive, timeOfLastClick, sectionName]); // This will run the useEffect hook when the inView variable changes


    return {ref, inView}
}
