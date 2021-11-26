const doSomethingAsync = () => {
	return new Promise(resolve => {
		setTimeout(() => resolve('I did something'), 3000)
	})
}

// doSomething 함수를 async await 형태로 변경하시오
const doSomething = () => {
	doSomethingAsync().then( a =>  console.log(a))
}

console.log('Before')
doSomething()
console.log('After')
