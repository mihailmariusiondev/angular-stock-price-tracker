import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sentiment } from '../../models/sentiment';
import { StockTrackerService } from '../../services/stock-tracker.service';

@Component({
  selector: 'app-company-sentiment',
  templateUrl: './company-sentiment.component.html',
  styleUrls: ['./company-sentiment.component.scss']
})
export class CompanySentimentComponent implements OnInit {

  sentiments: Sentiment[] = [];
  symbol: string = '';
  companyName: string = '';
  monthNames: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stockTrackerService: StockTrackerService
  ) { }

  ngOnInit() {
    this.symbol = this.route.snapshot.paramMap.get('symbol') || '';

    this.route.queryParams.subscribe(params => {
      this.companyName = params['companyName'];
    });

    if (this.symbol && !this.companyName) {
      this.stockTrackerService.getCompanyName(this.symbol)
        .subscribe(company => {
          this.companyName = company.description;
        });
    }

    if (this.symbol) {
      this.stockTrackerService.getSentiment(this.symbol)
        .subscribe(sentiment => {
          this.sentiments = sentiment;
        });
    }
  }


  goBack() {
    this.router.navigate(['..']);
  }
}
