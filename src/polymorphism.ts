// one action - multiple implementations

class Animal {
  constructor(
    public name: string,
  ) {}

  run(): void {} // action
}

class Dog extends Animal {
  constructor(
  public name: string,
  ) {
  super(name);
}

run() {
  console.log('wagging his tail');
  }
}

class Lion extends Animal {
  constructor(
  public name: string,
  ) {
  super(name);
}

run() {
  console.log('attacks its prey');
  }
}
