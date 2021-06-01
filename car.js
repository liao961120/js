// Named export
class Car {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }

    addPrice(dollars) {
        this.price += dollars;
        return this
    }
}

export { Car };
