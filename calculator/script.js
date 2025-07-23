const containerEle=document.querySelectorAll('button')
const inputEle=document.getElementById('inputBox')
for(let i=0;i<containerEle.length;i++){
    containerEle[i].addEventListener("click",()=>{
        const containerValue=containerEle[i].textContent
        if(containerValue==="AC"){
            clearResult()
        }
 else if(containerValue==="="){
            calculateResult()
        }
        else if(containerValue==="DEL"){
            substring()
        }
            else{
            appendValue(containerValue)
        }
    })
}
function clearResult(){
    inputEle.value=""
}
function calculateResult(){
    inputEle.value=eval(inputEle.value)
}
function appendValue(containerValue){
    inputEle.value+=containerValue
}
function substring(){
    inputEle.value=inputEle.value.substring(0,inputEle.value.length-1)
}
