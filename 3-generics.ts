function myFunc(input) {
  return input;
}

const result = myFunc({
  name: "Nisarg",
});

// Input is any but we want it as a type, however it could be many types so we can use generics

function myFunc2<T>(input: T): T {
  return input;
}

const result2 = myFunc2<{
  name: string;
}>({
  name: "Nisarg",
});

const result3 = myFunc2<string[]>(["Nisarg"]);
