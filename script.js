let result = document.getElementById('result')
console.log(result)

function calculate(num){
    result.value += num
}

function getResult() {
    try {
        result.value = eval(result.value)
        console.log(result)
    } catch (error) {
        result.value = "Error"
    }
    
}

function reset(){
    result.value = ""
}