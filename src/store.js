import { proxy } from 'valtio'

const state = proxy({
  
  colors: ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934'],
  decals: ['react', 'three2', 'pmndrs'],
  color: '#80C670',
  decal: 'three2',
  scale: 1,
  rotationX: 0,
  rotationY: 0,
  rotationZ: 0,
  pick: true
})

export { state }
