import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  codeVal = ``;
  constructor() { }

  ngOnInit() {
    this.codeVal = `<nav class="navbar navbar-generator navbar-inverse" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand">Minimal Static Bootstrap Template Generator</a>
        </div>
      </div><!-- /.container-fluid -->
    </nav>
  `;
  }

  addContainerFluid () {
    this.codeVal += `\n<div class="container-fluid">
      <div class="row">
        <div class="col-xs- col-sm- col-md- col-lg-"></div>
      </div>
    </div>
    `;
  }

  addContainer () {
    this.codeVal += `\n<div class="container">
        <div class="row">
          <div class="col-xs- col-sm- col-md- col-lg-">

          </div>
        </div>
    </div>`;
  }
}
