const checkButton = document.getElementById('check-btn');
const inputField = document.getElementById('text-input');
const resultDiv = document.getElementById('result');


function isPalindrome(text) {
    const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    return cleanedText === cleanedText.split('').reverse().join('');
}

checkButton.addEventListener('click', () => {
    const userInput = inputField.value;

    if (userInput) {
     
        const isPalindromeText = isPalindrome(userInput);

  
        resultDiv.textContent = isPalindromeText
            ? `${userInput} is a palindrome.`
            : `${userInput} is not a palindrome.`;
        resultDiv.classList.remove('hidden');
    } else {
       
       alert("Please input a value");
    }
});
