// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    return cats.push(name);
}
function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    return cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
}
function appendCat(name){
    const allcats = [...cats, name];
    return allcats;
}
function prependCat(name) {
    const allcats = [name, ...cats]
    return allcats;
}
function removeLastCat(name) {
    const allcats = cats.slice(0, -1)
    return allcats;
}
function removeFirstCat() {
    const allcats = cats.slice(1)
    return allcats;
}