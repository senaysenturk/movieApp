import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { 
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();
  }

  ngOnInit(): void {
  }
  // categories = ["Dram", "Fantastik","Bilim Kurgu","Komedi"];
  categories: Category[] = [
    // {
    //   id: 1, name: "Dram", action: "active"
    // },
    // {
    //   id: 2, name: "Fantastik", action: ""
    // },
    // {
    //   id: 3, name: "Bilim Kurgu", action: ""
    // },
    // {
    //   id: 4, name: "Komedi", action: ""
    // }
  ];
  categoryRepository : CategoryRepository;
}
