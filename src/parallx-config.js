//write a hook that will allow us to catch screen resolution changes

import { useLayoutEffect, useState } from "react";

const Adaptive = {
    xs: 'xs',
    s: 's',
    m: 'm',
    l: 'l',
    xl: 'xl',
};

const useAdaptiveTriggers = ({
    onExtraSmallEnter,
    onSmallEnter,
    onMediumEnter,
    onLargeEnter,
    onExtraLargeEnter
}) => {
    const [width, setWidth] = useState(Adaptive.xl);

    useLayoutEffect(() => {
        const handleResize = () => {
            if (window?.innerWidth < 360) {
                onExtraSmallEnter?.();
                return setWidth(Adaptive.xs);
            }
            if (window?.innerWidth < 520) {
                onSmallEnter?.();
                return setWidth(Adaptive.s);
            }
            if (window?.innerWidth < 768) {
                onMediumEnter?.();
                return setWidth(Adaptive.m);
            }
            if (window?.innerWidth < 900) {
                onLargeEnter?.();
                return setWidth(Adaptive.l);
            }
            onExtraLargeEnter?.();
            return setWidth(Adaptive.xl);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [onSmallEnter, onMediumEnter, onLargeEnter, onExtraLargeEnter, onExtraSmallEnter]);

    return width;
};


// console.log(ParallaxConfig[Adaptive.xl].pages)
export default (Adaptive, useAdaptiveTriggers)
