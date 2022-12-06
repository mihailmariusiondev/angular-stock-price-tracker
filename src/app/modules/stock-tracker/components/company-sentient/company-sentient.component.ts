import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sentiment } from '../../models/sentiment';
import { StockTrackerService } from '../services/stock-tracker.service';

@Component({
  selector: 'app-company-sentient',
  templateUrl: './company-sentient.component.html',
  styleUrls: ['./company-sentient.component.scss']
})
export class CompanySentientComponent implements OnInit {

  sentiments: Sentiment[] = [];
  symbol: string = '';
  companyName: string = '';
  monthNames: string[] = [  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stockTrackerService: StockTrackerService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.companyName = params['companyName'];
    });
    this.symbol = this.route.snapshot.paramMap.get('symbol') || '';
    if (this.symbol) {
      this.stockTrackerService.getSentiment(this.symbol)
        .subscribe(sentiment => {
          this.sentiments = sentiment;
        });
    }
  }

  goBack() {
    this.router.navigate(['/stock-tracker']);
  }
}
