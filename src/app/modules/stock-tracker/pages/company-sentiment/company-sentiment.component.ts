import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Sentiment } from '../../models/sentiment';
import { StockTrackerService } from '../../services/stock-tracker.service';

@Component({
  selector: 'app-company-sentiment',
  templateUrl: './company-sentiment.component.html',
  styleUrls: ['./company-sentiment.component.scss']
})
export class CompanySentimentComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();
  sentiments: Sentiment[] = [];
  symbol = '';
  companyName = '';
  monthNames: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stockTrackerService: StockTrackerService
  ) { }

  ngOnInit() {
    this.symbol = this.route.snapshot.paramMap.get('symbol') || '';

    this.route.queryParams.pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        this.companyName = params['companyName'];
      });

    if (this.symbol && !this.companyName) {
      this.stockTrackerService.getSymbol(this.symbol).pipe(takeUntil(this.destroy$))
        .subscribe(company => {
          this.companyName = company.description;
        });
    }

    if (this.symbol) {
      this.stockTrackerService.getSentiment(this.symbol).pipe(takeUntil(this.destroy$))
        .subscribe(sentiment => {
          this.sentiments = sentiment;
        });
    }
  }

  goBack() {
    this.router.navigate(['..']);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
