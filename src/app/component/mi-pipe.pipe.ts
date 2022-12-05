import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipe'
})
export class MiPipePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return args[0] === 'Ruiz' ? value.toUpperCase() : value.toLocaleLowerCase();
  }

}
