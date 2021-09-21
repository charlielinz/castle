import { useEffect, useRef } from "react";

const InvisibleHorizon = ({ setIsIntersecting }) => {
  const divRef = useRef(null);

  useEffect(() => {
    const div = divRef.current;
    const callback = (entries) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
      });
    };
    const obvserver = new IntersectionObserver(callback);
    obvserver.observe(div);
    const cleanup = () => {
      obvserver.disconnect();
    };
    return cleanup;
  }, []);

  return <div ref={divRef}></div>;
};

export default InvisibleHorizon;
