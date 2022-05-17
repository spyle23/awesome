import { animation, sequence, animate, style,  } from "@angular/animations";

export const FlashAnimation = animation([
  sequence([
    animate('{{ time }}', style({
      'background-color': '{{ flashColor }}'
    })),
    animate('{{ time }}', style({
      'background-color': 'white'
    }))
  ]),
])
