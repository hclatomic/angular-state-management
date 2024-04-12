
export class User {

    identified: boolean;
    username: string;
    firstname: string;
    lastname: string;
    age: number;
    address: {
        street: string;
        city: string;
    };
    orders: Order[];

    constructor() {
        this.identified = false;
        this.username = '';
        this.firstname = '';
        this.lastname = '';
        this.age = 0;
        this.address = {
            street: '',
            city: ''
        };
        this.orders = [];
    }

}

export class ItemCatalog {
    id: number | null;
    title: string;
    description: string;
    price: number;

    constructor() {
        this.id = null;
        this.title = '';
        this.description = '';
        this.price = 0;

    }
}

export class ItemCart {
    quantity: number;
    product: ItemCatalog;

    constructor() {
        this.quantity = 0;
        this.product = new ItemCatalog();
    }
}

export class Order {
    date: string;
    order: ItemCart[];

    constructor() {
        this.date = '';
        this.order = [];
    }
}

export class AppState {
    user: User;
    catalog: ItemCatalog[];
    cart: ItemCart[];
    ctx: any; // for contextual variables

    constructor() {
        this.user = new User();
        this.cart = [];
        this.catalog = [];
        this.ctx = {};
    }
}


