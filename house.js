// Default export
export default class {
    constructor(city, price) {
        this.city = city;
        this.price = price;
    }

    migrate(city) {
        this.city = city;
        return this;
    }
}

