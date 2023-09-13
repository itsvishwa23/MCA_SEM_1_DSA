class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

    toArray() {
        return this.items;
    }

    toString() {
        return this.items.toString();
    }
}
const stack = new Stack();
console.log('stack.isEmpty() => ', stack.isEmpty()); // outputs true

stack.push(12);
stack.push(13);

console.log('stack after push 12 and 13 => ', stack.toString());

console.log('stack.peek() => ', stack.peek()); // outputs 13

stack.push(14);

console.log('stack.size() after push 11 =a> ', stack.size()); // outputs 3
console.log('stack.isEmpty() => ', stack.isEmpty()); // outputs false

stack.push(15);

stack.pop();
stack.pop();

console.log('stack.size() after push 15 and pop twice => ', stack.size());