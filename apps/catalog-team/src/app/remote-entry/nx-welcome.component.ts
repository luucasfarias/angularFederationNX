import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Utils } from '@anymarket-frontend/shared';
import { values } from 'cypress/types/lodash';
import { TreeNode } from 'primeng/api';
import { DataService } from './data.service';

/* eslint-disable */

export interface Category {
  id: number;
  idInClient: string;
  autMarketplaces: [];
  childCount: number;
  children: Category[];
  codeInMarketplace?: number
  definitionPriceScope: string;
  name: string
  parent?: number;
  path: string
  priceFactor: number;
  realPriceFactor: number;
  totalProducts: number;
}

export interface CategoryChild {
  id: number;
  idInClient: string;
  completePath?: string;
  hasAssociations: boolean;
  hasProducts: boolean;
  marketplaces: Marketplace[];
  name: string;
  parentId?: string;
  path: string;
  pathFromRoot: Category[];
}

export interface Marketplace {
  accountIdentifier: string;
  categorysAnymarket?: null;
  codeInMarketPlace: string;
  completePath?: null;
  marketPlace: string;
  percentageAttributes?: null;
  removed?: boolean;
}

@Component({
  selector: 'anymarket-frontend-nx-welcome',
  template: `
    <style>
      html {
        -webkit-text-size-adjust: 100%;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
          'Noto Color Emoji';
        line-height: 1.5;
        tab-size: 4;
        scroll-behavior: smooth;
      }
      body {
        font-family: inherit;
        line-height: inherit;
        margin: 0;
      }
      h1,
      h2,
      p,
      pre {
        margin: 0;
      }
      *,
      ::before,
      ::after {
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: currentColor;
      }
      h1,
      h2 {
        font-size: inherit;
        font-weight: inherit;
      }
      .wrapper {
        width: 100%;
      }
      .container {
        margin-left: auto;
        margin-right: auto;
        max-width: 768px;
        padding-bottom: 3rem;
        padding-left: 1rem;
        padding-right: 1rem;
        color: rgba(55, 65, 81, 1);
        width: 100%;
      }
      #welcome {
        margin-top: 2.5rem;
      }
      #welcome h1 {
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: -0.025em;
        line-height: 1;
      }
      #welcome span {
        display: block;
        font-size: 1.875rem;
        font-weight: 300;
        line-height: 2.25rem;
        margin-bottom: 0.5rem;
      }
    </style>
    <div class="wrapper">
      <div class="container">
        <!--  WELCOME  -->
        <div id="welcome">
          <p-skeleton width="34.5rem" height="2rem" styleClass="mb-2" [hidden]="show"></p-skeleton>
          <anymarket-frontend-title [hidden]="!show" title="Welcome catalog-team 👋"></anymarket-frontend-title> 
          <!-- <anymarket-frontend-button></anymarket-frontend-button> -->

          <br> 
          <!-- <anymarket-frontend-button></anymarket-frontend-button> -->
          <p-skeleton width="100%" height="350px" [hidden]="show"></p-skeleton>
          <p-tree [value]="values" [filter]="true" [hidden]="!show">
          </p-tree>
          <div [hidden]="!show">
            Ano: {{ date }}
          </div>
          
        </div>
      </div>
    </div>

  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  date!: string;

  show = false;
  values: TreeNode[] = [
    {
      "id": 10,
      "label": "Documents",
      "data": "Documents Folder",
      "expandedIcon": "pi pi-folder-open",
      "collapsedIcon": "pi pi-folder",
      "children": [{
        "label": "Work",
        "data": "Work Folder",
        "expandedIcon": "pi pi-folder-open",
        "collapsedIcon": "pi pi-folder",
        "children": [{ "label": "Expenses.doc", "icon": "pi pi-file", "data": "Expenses Document" }, { "label": "Resume.doc", "icon": "pi pi-file", "data": "Resume Document" }]
      },
      {
        "label": "Home",
        "data": "Home Folder",
        "expandedIcon": "pi pi-folder-open",
        "collapsedIcon": "pi pi-folder",
        "children": [{ "label": "Invoices.txt", "icon": "pi pi-file", "data": "Invoices for this month" }]
      }]
    },
    {
      "label": "Pictures",
      "data": "Pictures Folder",
      "expandedIcon": "pi pi-folder-open",
      "collapsedIcon": "pi pi-folder",
      "children": [
        { "label": "barcelona.jpg", "icon": "pi pi-image", "data": "Barcelona Photo" },
        { "label": "logo.jpg", "icon": "pi pi-image", "data": "PrimeFaces Logo" },
        { "label": "primeui.png", "icon": "pi pi-image", "data": "PrimeUI Logo" }]
    },
    {
      "label": "Movies",
      "data": "Movies Folder",
      "expandedIcon": "pi pi-folder-open",
      "collapsedIcon": "pi pi-folder",
      "children": [{
        "label": "Al Pacino",
        "data": "Pacino Movies",
        "children": [{ "label": "Scarface", "icon": "pi pi-video", "data": "Scarface Movie" }, { "label": "Serpico", "icon": "pi pi-video", "data": "Serpico Movie" }]
      },
      {
        "label": "Robert De Niro",
        "data": "De Niro Movies",
        "children": [{ "label": "Goodfellas", "icon": "pi pi-video", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "pi pi-video", "data": "Untouchables Movie" }]
      }]
    }
  ];

  // files!: TreeNode[] = this.values;

  constructor(private dataService: DataService) { }



  ngOnInit(): void {
    setTimeout(() => {
      this.show = true;
      this.date = Utils.getDate();
    }, 1000);
  }
}
