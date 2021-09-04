/**
 * Model for products
 * for filter products by tags
 */

import TagsModel from "./TagsModel";

 export default class ProductsModel {
    name: string;
    img: string;
    description: string;
    tags: Array<TagsModel>;
    declinaisons: string[]

    constructor() {
        this.name = "";
        this.img = "";
        this.description = "";
        this.tags = [];
        this.declinaisons = [];
    }
}