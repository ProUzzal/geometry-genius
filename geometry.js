//step one: Add event handler to calculator button 
//get input field
//calculate retrun to handler
//display value


const displayOfCalculation = function (name, area) {
    console.log(area);
    const ol = document.querySelector('#calculaiton-area-parent');
    ol.innerHTML += `<li class='m-3 my-5'>${name} - ${area} cm<sup>2</sup> <span class="p-1 text-white bg-blue-700 rounded hover:bg-blue-200 hover:text-black">Convert
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

// const paralleogramRectangleAreaCount=function(){


//     return 
// }



// Area Calculation of geometry 

const areaCalculatorOfGeometry = function (geometryName) {
    if (geometryName === 'triangle') {
        let base = document.querySelector('.tri-b');
        let height = document.querySelector('.tri-h');
        if (inputValidation(base, height)) {
            return;
        }
        else {
            const triangleArea = .5 * base.value * height.value;
            base.value = '';
            height.value = '';
            return triangleArea;

        }
    }
    //rectangle
    else if (geometryName === 'rectangle') {
        let length = document.querySelector('.rec-l');
        let width = document.querySelector('.rec-w');
        if (inputValidation(length, width)) {
            return;
        }
        else {
            const rectangle = length.value * width.value;
            length.value = '';
            width.value = '';
            return rectangle;

        }
    }
    //paralleogram+rectangle common
    else if (geometryName === 'parallelogram') {
        let base = document.querySelector('.paral-b');
        let height = document.querySelector('.paral-h');
        if (inputValidation(base, height)) {
            return;
        }
        else {
            const parallelogram = base.value * height.value;
            base.value = '';
            height.value = '';
            return parallelogram;

        }
    }
    //rhombos+triangle,pentagon are same
    else if (geometryName === 'rhombus') {
        let diagonalOne = document.querySelector('.rhom-d1');
        let diagonalTwo = document.querySelector('.rhom-d2');
        if (inputValidation(diagonalOne, diagonalOne)) {
            return;
        }
        else {
            const rhombusArea = .5 * diagonalOne.value * diagonalTwo.value;
            diagonalOne.value = '';
            diagonalTwo.value = '';
            return rhombusArea;

        }
    }

    //pentagon
    else if (geometryName === 'pentagon') {
        let perimeter = document.querySelector('.penta-p');
        let apothem = document.querySelector('.penta-a');
        if (inputValidation(perimeter, apothem)) {
            return;
        }
        else {
            const pentagonArea = .5 * perimeter.value * apothem.value;
            perimeter.value = '';
            apothem.value = '';
            return pentagonArea;

        }
    }
    //ellipse
    else if (geometryName === 'ellipse') {
        let aAxis = document.querySelector('.ellip-a');
        let bAxis = document.querySelector('.ellip-b');
        if (inputValidation(aAxis, bAxis)) {
            return;
        }
        else {
            const ellipseArea = (Math.PI* aAxis.value * bAxis.value).toFixed(2);
            aAxis.value = '';
            bAxis.value = '';
            return ellipseArea;

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
    const totalArea = areaCalculatorOfGeometry('rectangle');
    if (totalArea != undefined) displayOfCalculation('Rectangle', totalArea);
})
//paralleogram
document.querySelector('#parallelogram').addEventListener('click', (e) => {
    e.preventDefault();
    const totalArea = areaCalculatorOfGeometry('parallelogram');
    if (totalArea != undefined) displayOfCalculation('Paralleogram', totalArea);
})
//rhombus
document.querySelector('#rhombus').addEventListener('click', (e) => {
    e.preventDefault();
    const totalArea = areaCalculatorOfGeometry('rhombus');
    if (totalArea != undefined) displayOfCalculation('Rhombus', totalArea);
})
//pentagon
document.querySelector('#pentagon').addEventListener('click', (e) => {
    e.preventDefault();
    const totalArea = areaCalculatorOfGeometry('pentagon');
    if (totalArea != undefined) displayOfCalculation('Pentagon', totalArea);
})
//ellipse
document.querySelector('#ellipse').addEventListener('click', (e) => {
    e.preventDefault();
    const totalArea = areaCalculatorOfGeometry('ellipse');
    if (totalArea != undefined) displayOfCalculation('Ellipse', totalArea);
})