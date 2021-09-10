

// // const name = "Oa";

// // // const userName = name && name.length > 1 ? name : "Incognito"
// // // document.writeln(userName);
// // // let  userName;
// // // if (name.length < 3) userName  = "Incognito"; else userName = name;
// // // document.writeln(userName);

// // const a = 1;
// // const ab = a ? a : "$";
// // document.writeln(ab);



// // const waffles = true;
// // const jam = true;
// // const wafflesWithJam = waffles && jam;
// // if(waffles && jam){ // true – и джем и паста есть
// //   document.writeln("На ужин вафельки с варенькой!");
// // } 

// // const pasta = true;
// // const souce = false;
// // if(pasta && souce) { // false – Нет соуса
// //   document.writeln("На ужин будут макарохи с сырным соусом(ладно, это просто майонез со сметаной, я не умею готовить >_<)");
// // }

// // if(wafflesWithJam || pastaWithCheeseSouce){ // true – есть вафельки. 
// //   document.writeln("Уж что-нибудь мы точно покушаем");
// // } 


// const folderA = ["file1", "file2", "file3"];
// const folderB = [];
// // document.write(folderA[1]);

// // while(folderA.length){
// //   folderB.push(folderA.pop());
// // }
// // document.writeln(`Folder A: ${folderA}`); 
// // document.writeln(`Folder B: ${folderB}`); 


// for( let i = 1; i < folderA.length; i++ ) {
//     document.write("hi" + i);
    


// }



// let num1 = Math.trunc(prompt("First number"));
// let num2 = Math.trunc(prompt("Second number"));

// while(isNaN(num1) || isNaN(num2)) {
//     alert("Error");
//     num1 = Math.trunc(prompt("First number"));
//     num2 = Math.trunc(prompt("Second number"));
// }

// const ask = confirm(" duble number pass?")

// let bigger = num1;
// let smaller = num2;

// if (num1 < num2) { bigger = num2; smaller = num1;}

// let result = 0;

// while (smaller <= bigger) {
//     if (ask) {
//         if (smaller % 2 !== 0) { 
//             result += smaller;
//         }
//     } else {
//         result += smaller;
//     }
//     smaller++;

// }

// console.log(result);

// let number = Math.ceil(Math.random() * 59);
// if ( number <= 15) console.log(" 1");
//     else if ( number > 15 && number <= 30) console.log(" 2");
//     else if ( number > 30 && number <= 45) console.log(" 3");
//     else if ( number > 45 && number <= 60) console.log(" 4");


// let a = 0, b = 3, c = 0;

// if (a <= 1 && b >= 3) c = a + b;
//     else c = a - b;
//     console.log(c)


// function getMaxDigit (number) {
//     let digits = Math.max(...number.toString().split(''));  
//     return digits;
// }

// console.log(getMaxDigit(13456789));

// function pow (number, exponent) {
//     let num = number;
//     for (let i = 1; i < exponent; i++) {
//         num = num * number;
//         console.log(num);
//     }
//     return num;
// }
// console.log(pow(4, 6));

// function upperCase (word) {
//      return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
// }

// // console.log(upperCase(prompt("Enter your name")));
// let input = "OLeKsa";

// function upperAllWord(...word) {
//    // word.charAt(0).toUpperCase()
//    let mas = [];
//    for (let i = 0; i < word.length; i++) {
//         mas.push(word && word[i + 1] == " " ? word.charAt().toUpperCase() : word.charAt());
//    }
//     return mas;
// }

// console.log(upperAllWord(...input));

//folderB.push(folderA.pop());

// // // const userName = name && name.length > 1 ? name : "Incognito"

// function toUpper(str) {
//     return str
//         .toLowerCase()
//         .split(' ')
//         .map(function(word) {
//             console.log("First capital letter: "+word[0]);
//             console.log("remain letters: "+ word.substr(1));
//             return word[0].toUpperCase() + word.slice(1);
//         })
//         .join(' ');
//      }

// console.log(toUpper("HeHlO frIend Oleksa sviat"))

                               
//Момо пробач за цю фунцію.
    //  const convertCurrency = (money) => {
    //     let sum = 0
    //     if (money.toUpperCase().endsWith('$') || money.toUpperCase().startsWith('$')) return sum  = (money.replace(/[^0-9]/g, '')) * 25 + "UAH"; 
    //     else if (money.toUpperCase().endsWith('UAH') || money.toUpperCase().startsWith('UAH')) return  sum  = (money.replace(/[^0-9]/g, '')) / 25 + "$";
    // }

    // document.writeln(convertCurrency('87uah'))                   

                                    // const getRandomNumberPassword = (number) => {
                                    //     let pass = 0;
                                    //    for (let i = 0; i <= number; i++){
                                    //     pass =  Math.trunc(Math.random() * 10) ;
                                    //    }
                                    //     return pass;
                                    // }

                                    // document.writeln(getRandomNumberPassword(prompt("enter how long pass u wont")));

                                    // const getRandomPassword = (number) => {
                                    //     let stand = 100000000;
                                    //     let chuslo = 1
                                    //     let quantity = 1
                                    //     for(let i = 1; i <= number; i++); {
                                    //         quantity = chuslo * 10
                                    //     }
                                    //    let pass = Math.trunc(Math.random()*quantity);
                                    //     return pass
                                    // }
                                    // document.writeln(getRandomPassword(4))

    // const getRandomPassword = (number) => {
        
    //     if (number == '') number = 8; 
    //     let pass = Math.trunc((Math.random() * Math.pow(10, number)));
    //     return pass;
    // }

    // document.writeln(getRandomPassword(''))


    const deleteLetters = ( sumbol, word ) => {
        return word = word.split(sumbol).join('');
        //return word = word.replace(sumbol, '');

    }
    document.writeln(deleteLetters('a', 'OleksaSarnaSarna'));