import DeclinaisonsModel from "./DeclinaisonsModel";

/**
 * Model for products
 * for filter products by tags
 */

 export default class ProductsModel {
    name: string;
    img: string;
    description: string;
    tags: string[];
    declinaisons: DeclinaisonsModel[];

    constructor() {
        this.name = "";
        this.img = "";
        this.description = "";
        this.tags = [];
        this.declinaisons = [];
    }
}