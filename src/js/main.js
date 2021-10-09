function printName(name, func) {
    console.log(name);
    func();
}

printName('Bob', () => {
	console.log('hello from arrow function');
});
