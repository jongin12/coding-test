class First {
  constructor(first) {
    this.first = first;
  }
}

const firstInstance = new First("first");
console.log(firstInstance);

console.log(firstInstance instanceof First);

console.log(firstInstance.first);
const { first } = firstInstance;
