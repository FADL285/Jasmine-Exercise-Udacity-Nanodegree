class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  print(): string {
    return `Hello ${this.name}`;
  }
}

const person = new Person('Fadl');
person.print();
