import { animate, animation, style } from "@angular/animations";

export const SlideFadeAnimation = animation([
  style({
    transform: 'translateX(-100%)',
    opacity: 0,
    'background-color': 'rgb(201, 157, 242)',
  }),
  animate('250ms ease-out', style({
    tranform:'translateX(0)',
    opacity:1,
    'background-color': 'white'
  })),
])
