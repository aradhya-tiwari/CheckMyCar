function Add<T>(num1: T, num2: T): T {
    let sum: any
    if (num1 == Number && num2 == Number) {
        sum = num1 + num2
    }
    else {
        sum = "hu"
    }
    return sum
}