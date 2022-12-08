import { Component, Input } from '@angular/core';
import { Sentiment } from '@stock-tracker/models/insiderSentiment.interface';

@Component({
  selector: 'app-sentiment-item',
  templateUrl: './sentiment-item.component.html',
  styleUrls: ['./sentiment-item.component.scss']
})
export class SentimentItemComponent {
  monthNames: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  private _sentiment!: Sentiment;

  @Input() set sentiment(value: Sentiment) {
    if (value) {
      this._sentiment = value;
    }
  }
  get sentiment(): Sentiment { return this._sentiment; }
}
