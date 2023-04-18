import { useEffect, useRef, useState } from 'react';

function useIntersectionObserver(options, threshold = 0) {
    const ref = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [animationTriggered, setAnimationTriggered] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (!animationTriggered && entry.isIntersecting) {
                setIsIntersecting(true);
                setAnimationTriggered(true);
            }
        }, { ...options, threshold });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options, threshold, animationTriggered]);

    return [ref, isIntersecting];
}

export default useIntersectionObserver;
