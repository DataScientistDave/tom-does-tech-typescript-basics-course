interface MyNewInterface {
  propertyOne: string;
  propertyTwo?: number;
  propertyThree?: boolean;
}

// Partial makes everything optional, therefore doesn't complain
const obj: Partial<MyNewInterface> = {};

// Property one is the only one required as others are omitted
const objTwo: Omit<MyNewInterface, "propertyTwo" | "propertyThree"> = {
  propertyOne: "hello",
};
