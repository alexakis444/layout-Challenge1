
//1
for (var i = 0; i <= 20; i++) {
		if( i % 2 === 0) {
console.log(i + " is even");
} else {
console.log(i + " is odd");
}

}


//2
for (var i = 0; i < 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
result = "fizzBuzz";
} else if (i % 3 === 0) {
result = "fizz";
} else if (i % 5 === 0) {
result = "buzz";
}
else {
	result= i;
}
console.log(result);
}


//3

for (let i=99; i >= 1; i--) {
	console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down, pass it around, " + (i-1) + " bottles of beer on the wall.");
}



