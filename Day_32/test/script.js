let grade = "D";
let result;
switch (grade) {
	case "A": {
		result = 10;
		break;
	}
	case "B": {
		result = 9;
		break;
	}
	case "C": {
		result = 8;
		break;
	}
	default:
		result = 0;
        break;
}
console.log(result);