import { Category } from "./category";

export class CategoryRepository{
    private categories: Category[];

    constructor(){
        this.categories = [
            {
                id: 1, name: "Dram", action: "active"
              },
              {
                id: 2, name: "Fantastik", action: ""
              },
              {
                id: 3, name: "Bilim Kurgu", action: ""
              },
              {
                id: 4, name: "Komedi", action: ""
              },
              {
                id: 4, name: "Macera", action: ""
              }
        ];
    }
    getCategories(): Category[]{
        return this.categories;
    }
}