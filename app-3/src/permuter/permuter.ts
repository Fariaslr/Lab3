class Permuter <T> {
    private _items : T[];

    constructor(data : T[]) {
        this._items = [...data];
    }

    get items () { 
        return this._items
    };

    permute (i : number, j : number) : boolean {
        if (i <  0 || i > this.items.length) return false;
        if (j <  0 || j > this.items.length) return false;

        const aux = {...this._items[i]}
        this.items[i] = {...this._items[j]}
        this.items[j] = {...aux}

        return true
    }

};

export {Permuter}