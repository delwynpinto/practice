import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  
	mobileQuery: MediaQueryList;
	private _mobileQueryListener: () => void;
	@ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}

	close() {
		this.sidenav.close();
	}
}
