import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sentiment } from '../../models/sentiment';
import { StockTrackerService } from '../services/stock-tracker.service';

@Component({
  selector: 'app-company-sentient',
  templateUrl: './company-sentient.component.html',
  styleUrls: ['./company-sentient.component.scss']
})
export class CompanySentientComponent implements OnInit{

  sentiment: Sentiment[] = [];
  symbol: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stockTrackerService: StockTrackerService
  ) { }

  ngOnInit() {
    this.symbol = this.route.snapshot.paramMap.get('symbol') || '';
    if(this.symbol){
      this.stockTrackerService.getSentiment(this.symbol)
        .subscribe(sentiment => {
          this.sentiment = sentiment;
        });
    }
  }

  goBack() {
    this.router.navigate(['/stock-tracker']);
  }
}
