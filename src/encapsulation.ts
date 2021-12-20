// public, private, protected



class Developer {
  public isDeveloper: boolean;

  constructor(
    protected name: string,
    public salary: number,
  ) {
    this.isDeveloper = true;
  }

  getInfo() {
    console.log('name', this.name);
    console.log('salary', this.salary);
  }
}

class JuniorDeveloper extends Developer {
  constructor(
    protected name: string,
    public salary: number,
    ) {
    super(name, salary);
}

getName(): string {
  return this.name; // err private,
  }
}

const developer = new JuniorDeveloper('Liuba', 1000);
console.log('name', developer.getName());
