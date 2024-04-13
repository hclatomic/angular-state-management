
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

export class Ctx { //contextual variables
    openCheckOut: boolean;
    buyInProgress: boolean;
    buyCompleted: boolean;
    numberOfCartItems: string; // surprisingly PrimeNg needs a string, not a number
    totalCartPrice: number;
    url: string;

    constructor() {
        this.openCheckOut = false;
        this.buyInProgress = false;
        this.buyCompleted = false;
        this.numberOfCartItems = '0';
        this.totalCartPrice = 0;
        this.url = '/';
    }
}

export class AppState {
    user: User;
    catalog: ItemCatalog[];
    cart: ItemCart[];
    ctx: Ctx;

    constructor() {
        this.user = new User();
        this.cart = [];
        this.catalog = [];
        this.ctx = new Ctx();
    }
}


