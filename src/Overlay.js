import { Logo } from '@pmndrs/branding'
import { motion, AnimatePresence } from 'framer-motion'
import { AiFillCamera, AiOutlineArrowLeft, AiOutlineHighlight, AiOutlineShopping } from 'react-icons/ai'
import { useSnapshot } from 'valtio'
import { state } from './store'
import { ColorPicker } from './colorPicker'
import  RangeSlider  from './slider'
import { useState } from 'react'

export function Overlay() {
  const snap = useSnapshot(state)
  const transition = { type: 'spring', duration: 0.8 }
  const config = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } }
  }
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      {/* <motion.header initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={transition}>
        <Logo width="40" height="40" />
        <motion.div animate={{ x: snap.intro ? 0 : 100, opacity: snap.intro ? 1 : 0 }} transition={transition}>
          <AiOutlineShopping size="3em" />
        </motion.div>
      </motion.header> */}
      <AnimatePresence>
         (
          <motion.section key="custom" {...config}>
            <Customizer />
          </motion.section>
        )
      </AnimatePresence>
    </div>
  )
}

function Customizer() {
const [pickColor, setPickColor] = useState(true)
  const snap = useSnapshot(state)
  function onColorChange(color) {
    state.color = color.hex
    // console.log(color.hex)
console.log(state.color)
  }
  function onScaleChange(value) {
    state.scale = 2 - value/50;
  }
  function onRotationChangeX(value) {
    state.rotationX = 2 - value/50;
  }
  function onRotationChangeY(value) {
    state.rotationY = 2 - value / 50;
  }
  function onRotationChangeZ(value) {
    state.rotationZ = 2 - value / 50;
  }

  function handleChangeDesign() {
    // state.intro = false
      //udate the backend using following command 
    // fetch("url", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     color: state.color,
    //     scale: state.scale,
    //     rotationX: state.rotationX,
    //     rotationY: state.rotationY,
    //     rotationZ: state.rotationZ
    //   }),
    // })
    // .then(function (response) {
    //   return response.json();
    // }).then(function (response) {
    //   console.log("Success:", response);
    //   console.log(response);
    // }).catch(function (error) {
    //   console.log(error);
    // })
  }

  return (
    <div className="customizer">
  {pickColor? <div className="scale">
        <RangeSlider  handleChange={onScaleChange}></RangeSlider>
      </div>:""}
      {pickColor ? <div className="rotation">
        <RangeSlider handleChange={onRotationChangeX}></RangeSlider>
        <RangeSlider handleChange={onRotationChangeY}></RangeSlider>
        <RangeSlider handleChange={onRotationChangeZ}></RangeSlider>
      </div>:""}
  {pickColor? "": <ColorPicker onChange={onColorChange}></ColorPicker>}
  <button onClick={() => setPickColor(!pickColor)}>Pick Color</button>
      <button
        className="reset"
      onClick={() => {
        state.scale = 1
        state.rotationX = 0
        state.rotationY = 0
        state.rotationZ = 0
      }}
      >
        Reset
      </button>
      <button
        className="share"
        style={{ background: snap.color }}
        onClick={handleChangeDesign}
        >
        Update Design
      </button>

    </div>
  )
}
