//step one: Add event handler to calculator button 
//get input field
//calculate retrun to handler
//display value


const displayOfCalculation = function (name, area) {
    console.log(area);
    const ol = document.querySelector('#calculaiton-area-parent');
    ol.innerHTML += `<li>${name} - ${area} cm<sup>2</sup> <span class="p-1 text-white bg-blue-700 rounded hover:bg-blue-200 hover:text-black">Convert
                     to M2</span><i class="cursor-pointer hover:text-red-900 fa-solid fa-trash"></i>
                    </li>`

}


//input validation;
const inputValidation = function (first, second) {
    if (isNaN(first.value.trim()) || isNaN(second.value.trim()) || first.value.length < 1 || second.value.length < 1) {
        alert('You have must input valid number');
        first.value = '';
        second.value = '';
        return true;
    }


}




// Area Calculation of geometry 

const areaCalculatorOfGeometry = function (geometryName) {
    if (geometryName === 'triangle') {
        let base = document.querySelector('.tri-b');
        let height = document.querySelector('.tri-h');
        if (inputValidation(base, height)) {
            console.log('undefined deticted');
            return;
        }
        else {
            console.log('-', base.value, height.value);
            const triangleArea = .5 * base.value * height.value;
            base.value = '';
            height.value = '';
            return triangleArea;

        }


    }

}












//eventHandler
//triangle
document.querySelector('#triangle').addEventListener('click', (e) => {
    e.preventDefault();
    const totalArea = areaCalculatorOfGeometry('triangle');
    if (totalArea != undefined) displayOfCalculation('Triagle', totalArea);
})
//rectangle
document.querySelector('#rectangle').addEventListener('click', (e) => {
    e.preventDefault();
    const totalArea = areaCalculatorOfGeometry('triangle');
    if (totalArea != undefined) displayOfCalculation('Triagle', totalArea);
})
//paralleogram
document.querySelector('#triangle').addEventListener('click', (e) => {
    e.preventDefault();
    const totalArea = areaCalculatorOfGeometry('triangle');
    if (totalArea != undefined) displayOfCalculation('Triagle', totalArea);
})
//rectangle
document.querySelector('#triangle').addEventListener('click', (e) => {
    e.preventDefault();
    const totalArea = areaCalculatorOfGeometry('triangle');
    if (totalArea != undefined) displayOfCalculation('Triagle', totalArea);
})
//rectangle
document.querySelector('#triangle').addEventListener('click', (e) => {
    e.preventDefault();
    const totalArea = areaCalculatorOfGeometry('triangle');
    if (totalArea != undefined) displayOfCalculation('Triagle', totalArea);
})