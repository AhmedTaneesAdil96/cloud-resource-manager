import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[AppObservableDestroyer]',
})
export class ObservableDestroyerDirective implements OnDestroy {
  protected $destroyer = new Subject();

  ngOnDestroy() {
    this.$destroyer.next('destroy');
    this.$destroyer.complete();
  }
}
