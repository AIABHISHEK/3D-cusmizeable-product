import { useState } from 'react';
import React  from 'react';
import { SketchPicker, SliderPicker } from 'react-color';

export function ColorPicker(props) {
    
const [currColor, setCurrColor] = useState("#ffff");
    function handleColorChange(color) {
        // console.log('color changed', color);
        props.onChange(color);
        setCurrColor(color);
    }
    return <SketchPicker color={currColor} onChange={handleColorChange} />;
}