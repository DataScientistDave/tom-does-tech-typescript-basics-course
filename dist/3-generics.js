function myFunc(input) {
    return input;
}
var result = myFunc({
    name: "Nisarg"
});
// Input is any but we want it as a type, however it could be many types so we can use generics
function myFunc2(input) {
    return input;
}
var result2 = myFunc2({
    name: "Nisarg"
});
var result3 = myFunc2(["Nisarg"]);
