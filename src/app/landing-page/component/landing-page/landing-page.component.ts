import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  // faHeart = faHeart;
  constructor(private router: Router) {}
  ngOnInit(): void {}

  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }
}
