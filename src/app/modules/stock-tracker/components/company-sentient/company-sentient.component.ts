import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-sentient',
  templateUrl: './company-sentient.component.html',
  styleUrls: ['./company-sentient.component.scss']
})
export class CompanySentientComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  goBack() {
    this.router.navigate(['/stock-tracker']);
  }
}
