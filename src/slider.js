import 'toolcool-range-slider';
import { useRef, useEffect } from 'react';
import { useSnapshot } from 'valtio'
import { state } from './store'

const RangeSlider = (props) => {
    const rangeSliderRef = useRef();
    useEffect(() => {
        const slider = rangeSliderRef.current;

        const onChange = (e) => {
            const value = Math.round(e.detail.value);
            console.log(value);
            props.handleChange(value);
        };

        slider?.addEventListener('change', onChange);

        return () => {
            slider?.removeEventListener('change', onChange);
        };
    }, []);
    const snap = useSnapshot(state)
    return (
        <toolcool-range-slider
        pointer-bg="#b677d6"
        pointer-bg-hover="#763098"
        pointer-bg-focus="#763098" slider-bg="black" value={50} type="vertical"  ref={rangeSliderRef} />
    )
};

export default RangeSlider;