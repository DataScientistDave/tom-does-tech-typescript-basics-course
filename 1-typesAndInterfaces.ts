interface MyInterface {
  // ? means optional
  property1?: string;
  property2: number;
  propery3: boolean;
}

// return type is also myinterface
function myFunction(input: MyInterface): MyInterface {
  return input;
}

// if function doesn't return anything then function type is void
function myFunction2(input: MyInterface): void {}

// If function is async then can specify return type as Promise with a generic
async function myFunction3(input: MyInterface): Promise<MyInterface> {
  return input;
}

// We can extend interfaces
interface MyInterfaceTwo extends MyInterface {
  property4: string;
}

function myFunction4(input: MyInterfaceTwo): MyInterface {
  return input;
}
myFunction4({
  property2: 2,
  propery3: true,
  property4: "hello",
});

// extending many interfaces
interface MyInterfaceThree {
  property5?: boolean;
}

interface MyInterfaceFour
  extends MyInterface,
    MyInterfaceTwo,
    MyInterfaceThree {
  property6: "string";
}

// Types
type MyType = {
  property1: string;
};

function myFunction5(input: MyType): MyType {
  return input;
}

// Can't extend types, have to do it like this
type MyTypeTwo = {
  property2: boolean;
} & MyType;

function myFunction6(input: MyTypeTwo): MyTypeTwo {
  return input;
}

myFunction6({
  property1: "hello",
  property2: true,
});

// Enumerators
enum MyEnum {
  enumOne = "myEnumOne",
  enumTwo = "myEnumTwo",
}

type myTypeThree = {
  property3: MyEnum;
};

function myFunction7(input: myTypeThree): myTypeThree {
  return input;
}

// property 3 has to be enumOne or enumTwo
myFunction7({
  property3: MyEnum.enumOne,
});
