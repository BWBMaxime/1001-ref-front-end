/**
 * Model for tags
 * for filter products by tags
 */

export default class TagsModel {
    name: string;
    selected: boolean;

    constructor() {
        this.name = "";
        this.selected = false;
    }
}