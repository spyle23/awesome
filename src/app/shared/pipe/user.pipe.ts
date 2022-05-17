import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(value: {firstName: string, lastName: string}): string {
    return `${value.firstName.toUpperCase()} ${value.lastName}`;
  }

}
