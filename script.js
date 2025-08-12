// Part 1: Variables and Conditionals
function checkUserEligibility() {
    var userName = document.getElementById('userName').value;
    var userAge = parseInt(document.getElementById('userAge').value);
    var resultElement = document.getElementById('eligibilityResult');
    
    if (!userName || isNaN(userAge)) {
        resultElement.innerHTML = '<p style="color: red;">Please enter both name and age!</p>';
        return;
    }
    
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var birthYear = currentYear - userAge;
    
    if (userAge >= 18) {
        resultElement.innerHTML = `
            <p style="color: green;">🎉 Welcome ${userName}!</p>
            <p>You are ${userAge} years old (born around ${birthYear}) and eligible to participate.</p>
        `;
    } else if (userAge >= 13) {
        resultElement.innerHTML = `
            <p style="color: orange;">⚠️ Hello ${userName}!</p>
            <p>You are ${userAge} years old and can participate with parental consent.</p>
        `;
    } else {
        resultElement.innerHTML = `
            <p style="color: red;">❌ Sorry ${userName}!</p>
            <p>You are ${userAge} years old and not yet eligible to participate.</p>
        `;
    }
}

// Part 2: Custom Functions
function calculateResult() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;
    var resultElement = document.getElementById('calcResult');
    
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerHTML = '<p style="color: red;">Please enter valid numbers!</p>';
        return;
    }
    
    var result;
    switch(operation) {
        case 'add':
            result = addNumbers(num1, num2);
            break;
        case 'subtract':
            result = subtractNumbers(num1, num2);
            break;
        case 'multiply':
            result = multiplyNumbers(num1, num2);
            break;
        case 'divide':
            result = divideNumbers(num1, num2);
            break;
        default:
            result = 'Invalid operation';
    }
    
    resultElement.innerHTML = `<p style="color: blue;">Result: ${num1} ${getOperationSymbol(operation)} ${num2} = ${result}</p>`;
}

function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    if (b === 0) {
        return 'Cannot divide by zero!';
    }
    return (a / b).toFixed(2);
}

function getOperationSymbol(operation) {
    switch(operation) {
        case 'add': return '+';
        case 'subtract': return '-';
        case 'multiply': return '×';
        case 'divide': return '÷';
        default: return '';
    }
}

function formatText() {
    var textInput = document.getElementById('textInput').value;
    var formatType = document.getElementById('formatType').value;
    var resultElement = document.getElementById('formatResult');
    
    if (!textInput) {
        resultElement.innerHTML = '<p style="color: red;">Please enter some text!</p>';
        return;
    }
    
    var formattedText;
    switch(formatType) {
        case 'uppercase':
            formattedText = textInput.toUpperCase();
            break;
        case 'lowercase':
            formattedText = textInput.toLowerCase();
            break;
        case 'capitalize':
            formattedText = capitalizeWords(textInput);
            break;
        default:
            formattedText = textInput;
    }
    
    resultElement.innerHTML = `<p style="color: purple;">Formatted text: "${formattedText}"</p>`;
}

function capitalizeWords(str) {
    return str.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

// Part 3: Loop Examples
function generateSequence() {
    var startNum = parseInt(document.getElementById('startNum').value);
    var endNum = parseInt(document.getElementById('endNum').value);
    var resultElement = document.getElementById('sequenceResult');
    
    if (isNaN(startNum) || isNaN(endNum)) {
        resultElement.innerHTML = '<p style="color: red;">Please enter valid numbers!</p>';
        return;
    }
    
    var sequence = [];
    if (startNum <= endNum) {
        for (var i = startNum; i <= endNum; i++) {
            sequence.push(i);
        }
    } else {
        for (var i = startNum; i >= endNum; i--) {
            sequence.push(i);
        }
    }
    
    resultElement.innerHTML = `
        <p style="color: green;">Generated sequence:</p>
        <p><strong>${sequence.join(', ')}</strong></p>
        <p>Total numbers: ${sequence.length}</p>
    `;
}

function processArray() {
    var arrayInput = document.getElementById('arrayInput').value;
    var resultElement = document.getElementById('arrayResult');
    
    if (!arrayInput) {
        resultElement.innerHTML = '<p style="color: red;">Please enter numbers separated by commas!</p>';
        return;
    }
    
    var numbers = arrayInput.split(',').map(function(item) {
        return parseFloat(item.trim());
    });
    
    var validNumbers = [];
    var invalidItems = [];
    
    numbers.forEach(function(num) {
        if (!isNaN(num)) {
            validNumbers.push(num);
        } else {
            invalidItems.push(num);
        }
    });
    
    if (validNumbers.length === 0) {
        resultElement.innerHTML = '<p style="color: red;">No valid numbers found!</p>';
        return;
    }
    
    var sum = 0;
    var max = validNumbers[0];
    var min = validNumbers[0];
    
    validNumbers.forEach(function(num) {
        sum += num;
        if (num > max) max = num;
        if (num < min) min = num;
    });
    
    var average = sum / validNumbers.length;
    
    var resultHTML = `
        <p style="color: blue;">Array Analysis:</p>
        <p><strong>Valid Numbers:</strong> [${validNumbers.join(', ')}]</p>
        <p><strong>Sum:</strong> ${sum}</p>
        <p><strong>Average:</strong> ${average.toFixed(2)}</p>
        <p><strong>Maximum:</strong> ${max}</p>
        <p><strong>Minimum:</strong> ${min}</p>
    `;
    
    if (invalidItems.length > 0) {
        resultHTML += `<p style="color: orange;"><strong>Invalid items ignored:</strong> [${invalidItems.join(', ')}]</p>`;
    }
    
    resultElement.innerHTML = resultHTML;
}

// Part 4: DOM Manipulation
var addItemBtn = document.getElementById('addItemBtn');
var toggleThemeBtn = document.getElementById('toggleTheme');
var highlightTextBtn = document.getElementById('highlightText');
var clickBtn = document.getElementById('clickBtn');
var clickCount = 0;

addItemBtn.addEventListener('click', function() {
    var newItem = document.getElementById('newItem').value;
    var list = document.getElementById('dynamicList');
    
    if (!newItem.trim()) {
        alert('Please enter an item!');
        return;
    }
    
    var li = document.createElement('li');
    li.textContent = newItem;
    
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        list.removeChild(li);
    };
    
    li.appendChild(deleteBtn);
    list.appendChild(li);
    
    document.getElementById('newItem').value = '';
});

toggleThemeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        this.textContent = 'Toggle Light Theme';
    } else {
        this.textContent = 'Toggle Dark Theme';
    }
});

highlightTextBtn.addEventListener('click', function() {
    var headers = document.querySelectorAll('h1, h2, h3');
    
    headers.forEach(function(header) {
        header.classList.toggle('highlighted');
    });
    
    setTimeout(function() {
        headers.forEach(function(header) {
            header.classList.remove('highlighted');
        });
    }, 3000);
});

clickBtn.addEventListener('click', function() {
    clickCount++;
    document.getElementById('clickCount').textContent = clickCount;
    
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 100);
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript Fundamentals Assignment Loaded Successfully!');
    
    var inputs = document.querySelectorAll('input');
    inputs.forEach(function(input) {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#667eea';
            this.style.boxShadow = '0 0 5px rgba(102, 126, 234, 0.3)';
        });
        
        input.addEventListener('blur', function() {
            this.style.borderColor = '#ddd';
            this.style.boxShadow = 'none';
        });
    });
});