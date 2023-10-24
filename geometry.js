//step one: Add event handler to calculator button 
//get input field
//calculate retrun to handler
//display value


const displayOfCalculation = function (name, area) {




}


//input validation;
const inputValidationFunc = function (first, second) {
    if (isNaN(first.value.trim()) || isNaN(second.value.trim()) || first.value.length < 1 || second.value.length < 1) {
        alert('You have must input valid number');
        first.value = '';
        second.value = '';
    }
}




// Area Calculation of geometry 

const areaCalculatorOfGeometry = function (geometryName) {
    if (geometryName === 'triangle') {
        console.log('got the funciton');
        let base = document.querySelector('.tri-b');
        let height = document.querySelector('.tri-h');
        inputValidationFunc(base, height);





        base.value = '';
        height.value = '';
    }

}












//eventHandler

document.querySelector('#triangle').addEventListener('click', (e) => {
    e.preventDefault();
    const totalArea = areaCalculatorOfGeometry('triangle');
    displayOfCalculation('Triagle', totalArea);
})