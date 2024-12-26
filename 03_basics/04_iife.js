// Immediately Invoked Function Expressions

(function chai(){
    console.log(`DB is connected`);
})();

((name) => {
    console.log(`DB is connected Two ${name}`);
})('Nikhil');
