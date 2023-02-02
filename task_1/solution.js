function addInCartMessage(title, price) {
     let productName = title;
     let productPrice = price;
     let message;
     message = productName;
     message += ' ';
     message += 'за';
     message += productPrice;
     message += ' ';
     message += 'теперь в корзине!';

     console.log (message);
        
    

    return message;
}

function addInCartCountChange(value) {

     let oldValue = value;
     let newValue;
     newValue = oldValue + 1;
     newValue += 1;

    

    return newValue;
}

function addInCartSumChange(sum, delta) {
     let oldSum = sum;
     let difference = delta;
     let newSum = oldSum + difference;
     newSum += '₽';
     newSumText = `${newSum} ₽`;

    

    return newSumText;
}

