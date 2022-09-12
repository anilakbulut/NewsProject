import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsFilter'
})
export class NewsFilterPipe implements PipeTransform {

  transform(currentNewsToShow: any[],text:string): any[] {
    text = text?.toLowerCase() ||'';

    return text? currentNewsToShow.filter(data => 
      data.content?.toLowerCase().indexOf(text)!==-1 ||
      data.title?.toLowerCase().indexOf(text)!==-1 ||
      data.description?.toLowerCase().indexOf(text)!==-1 
      )
      
      : currentNewsToShow;
  }

}
