import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params, RouterOutlet} from '@angular/router';
import {map, Observable, Subject, takeUntil} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  title: string = 'calendar';

  /**
   * Destroy subject for route subscription
   */
  private readonly destroy$: Subject<void> = new Subject<void>();

  public routeParam$: Observable<Params> = this.route.params.pipe(
    takeUntil(this.destroy$),
    map(params => params['param'])
  );

  constructor(private route: ActivatedRoute) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
