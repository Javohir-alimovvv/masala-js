// 1# 20
// {
//     function centerNum(arr) {
//         const leng = arr.length;

//         if (leng % 2 === 1) {
//             return arr[Math.floor(leng / 2)]
//         }
//         const center1 = arr[leng / 2 - 1]
//         const center2 = arr[leng / 2]
//         return (center1 + center2) / 2
//     }
//     console.log(centerNum([1, 2, 3, 4, 5]));
//     console.log(centerNum([1, 2, 3, 4,]));
// }


// 2#   21.

// {
//     function tub(num) {
//         if (num === 2) {
//             return `${num} tub son`;

//         }
//         if (num <= 1) {
//             `${num} tub son emas`

//         }
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % 2 === 0) {
//                 `${num} tub son emas`

//             }
//         }
//         return `${num} tub son`;

//     }
//     console.log(tub(2));

// }


// 4#   23.

// {
//     function mukammalSon(num) {
//         if (num <= 0) {
//             return "Iltimos, musbat son kiriting";
//         }
//         let sum = 0;
//         for (let i = 1; i < num; i++) {
//             if (num % i === 0) {
//                 sum += i;
//             }
//         }
//         if (sum === num) {
//             return `${num} mukammal son`;
//         } else {
//             return `${num} mukammal emas`;
//         }
//     }
//     console.log(mukammalSon(6));
//     console.log(mukammalSon(28));
//     console.log(mukammalSon(30));

// }



// 5#   24.

// {
//     function xona(num) {
//         const xonalar = String(num).replace('-', '').length
//         console.log(`${num} ${xonalar}    --->   xonali son`);

//     }
//     xona(2)
//     xona(20)
//     xona(200)
//     xona(2000)
//     xona(20000)
// }



// 6#   25.

// {
//     function harf(str) {
//         let count = 0;
//         for (let char of String(str)) {
//             if (char === 'a') {
//                 count++
//             }
//         }
//         console.log(`${str} da ---> ${count} ta a harfi bor`);

//     }
//     harf("salom")
//     harf("dunyo")
// }



// 7#   26.

// {
//     function aHarfiSoni(matn) {
//         const suzlar = matn.split(" ");
//         const natija = [];

//         for (let suz of suzlar) {
//             const suzlar = suz.includes('a');
//             if (suzlar) {
//                 natija.push(suz);
//             }
//         }

//         console.log(`${natija.length} ta suzda a harfi bor`);
//     }

//     aHarfiSoni("salom dunyo")
//     aHarfiSoni("salom salom salom")

// }



// 8#   27.

// {
//     function num(value) {
//         if (typeof value === 'number') {
//             return "number";
//         } else if (typeof value === 'string') {
//             return "string";
//         } else {
//             return 0;
//         }
//     }

//     console.log(num(123));
//     console.log(num("hello"));
//     console.log(num(true));
// }



// 9#   28.

// {
//     function rev(str) {
//         const teskari = String(str).split('').reverse().join('')
//         console.log(teskari);

//     }
//     rev("hello")
// }



// 10#   29.

// {
//     function sonSoni(matn) {
//         let count = 0;
//         for (let char of matn) {
//             if (char >= '0' && char <= '9') {
//                 count++;
//             }
//         }
//         console.log(`${count} ta raqam bor.`);
//     }

//     sonSoni("hello world 123");
//     sonSoni("Salom, dunyo!");
//     sonSoni("hello world 124563");
// }
