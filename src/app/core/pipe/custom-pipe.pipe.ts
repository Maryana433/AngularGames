import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "custom"
})
export class CustomPipe implements PipeTransform {
  transform(input: Array<any>, sep = ","): string {
    return input.toString();
  }
}
