function Stack() {
    this.items = [];
    this.stackCount = 0;

    Stack.prototype.push = function (item) {
        this.items[this.stackCount] = item;
        console.log(`${item} added to ${this.stackCount}`);
        this.stackCount += 1;
    }

    Stack.prototype.pop = function () {
        if (this.stackCount == 0) {
            return 'Empty Stack'
        }

        let item = this.items[this.stackCount - 1];
        this.stackCount -= 1;
        console.log(`${item} removed from ${this.stackCount}`);
    }

    Stack.prototype.peek = function () {
        if (this.stackCount == 0) {
            return 'Empty Stack'
        }

        let item = this.items[this.stackCount - 1];
        console.log(`Top item is ${item} `);
    }

    Stack.prototype.count = function () {

        if (this.stackCount == 0) {
            return 'Empty Stack'
        }
        console.log(`Top item is ${this.stackCount} `);
    }

}

const stack = new Stack()
console.log(stack);