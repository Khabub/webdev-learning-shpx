import { useRef, useState, useEffect, useMemo } from "react";
import { animComponent } from "./store/components-list";

const Fade = ({ children }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      setIsVisible(entry.isIntersecting);
    });

    // entry.isIntersecting && setIsVisible(true);
  };

  const options = useMemo(() => {
    return {
      threshold: 0,
    };
  }, []);

  useEffect(() => {
    let observerRefValue = null;
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
      observerRefValue = containerRef.current;
    }

    /* return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    }; */
  }, [containerRef, options]);

  const items = animComponent.map((val, i) => (
    <div key={i} className={isVisible ? ["animComponent"] : ""}>
      {isVisible && val.component}
    </div>
  ));

  return (
    <div ref={containerRef}>
      {items}
      {children}
    </div>
  );
};

export default Fade;
