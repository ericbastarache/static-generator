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

  defaultNav () {
    this.codeVal = `<nav class="navbar navbar-generator navbar-default" role="navigation">
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

  redNav () {

    this.codeVal = `<nav class="navbar navbar-generator navbar-red" role="navigation">
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

  inverseNav () {

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

  blueNav () {

    this.codeVal = `<nav class="navbar navbar-generator navbar-blue" role="navigation">
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

  greenNav () {

    this.codeVal = `<nav class="navbar navbar-generator navbar-green" role="navigation">
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

  orangeNav () {

    this.codeVal = `<nav class="navbar navbar-generator navbar-orange" role="navigation">
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

  purpleNav () {

    this.codeVal = `<nav class="navbar navbar-generator navbar-purple" role="navigation">
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
}
