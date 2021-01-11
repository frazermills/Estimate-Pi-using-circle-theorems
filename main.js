function estimatePi(n) {
	let numPointCircle = 0;
	let numPointTotal = 0;

	for (let i = 0; i < n; i++) {
		x = Math.random()
		y = Math.random()
		let distance = x**2 + y**2;
		if (distance <= 1) {
			numPointCircle += 1;
		}
		numPointTotal += 1;
	}
	return 4 * (numPointCircle / numPointTotal);
}