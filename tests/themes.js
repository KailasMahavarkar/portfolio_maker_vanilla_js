// const themesSelected = {
//     'light': themes['light'],
//     'dark': themes['dark'],
//     'night': themes['night'],
//     'retro': themes['retro'],
// }

// // ['aqua', 'black', 'bumblebee', 'cmyk', 'corporate', 'cupcake', 'cyberpunk', 'dark', 'dracula', 'emerald', 'fantasy', 'forest', 'garden', 'halloween', 'light', 'lofi', 'luxury', 'pastel', 'retro', 'synthwave', 'valentine', 'wireframe', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee', 'winter']
// // console.log(themesSelected)

// // loop through themesSelected
// // and print it

// // loop through themesSelected
// const multiDone = []
// for (let i = 0; i < Object.keys(themesSelected).length; i++) {

//     // get theme name
//     const themeName = Object.keys(themesSelected)[i]

//     const single = Object.keys(themesSelected)[i]
//     let singleDone = ``

//     // loop through single and print key and value
//     for (let j = 0; j < Object.keys(themesSelected[single]).length; j++) {
//         const key = Object.keys(themesSelected[single])[j];
//         const value = Object.values(themesSelected[single])[j];
//         singleDone += `--${themeName}-${key}: "${value}";\n`
//     }

//     multiDone.push(singleDone);

//     // console.log(themesSelected[single])
//     // console.log(Object.keys(themesSelected)[i])
// }

// for (let i = 0; i < multiDone.length; i++) {
//     console.log("theme -->", Object.keys(themesSelected)[i])
//     console.log(multiDone[i])
// }



// const themesSelected = {
//     'light': themes['light'],
//     'dark': themes['dark'],
//     'night': themes['night'],
//     'retro': themes['retro'],
// }

// // ['aqua', 'black', 'bumblebee', 'cmyk', 'corporate', 'cupcake', 'cyberpunk', 'dark', 'dracula', 'emerald', 'fantasy', 'forest', 'garden', 'halloween', 'light', 'lofi', 'luxury', 'pastel', 'retro', 'synthwave', 'valentine', 'wireframe', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee', 'winter']
// // console.log(themesSelected)

// // loop through themesSelected
// // and print it

// // loop through themesSelected
// const multiDone = []
// for (let i = 0; i < Object.keys(themesSelected).length; i++) {

//     // get theme name
//     const themeName = Object.keys(themesSelected)[i]

//     const single = Object.keys(themesSelected)[i]
//     let singleDone = ``

//     // loop through single and print key and value
//     for (let j = 0; j < Object.keys(themesSelected[single]).length; j++) {
//         const key = Object.keys(themesSelected[single])[j];
//         const value = Object.values(themesSelected[single])[j];
//         singleDone += `--${key}: ${value};\n`
//     }

//     multiDone.push(singleDone);

//     // console.log(themesSelected[single])
//     // console.log(Object.keys(themesSelected)[i])
// }

// for (let i = 0; i < multiDone.length; i++) {
//     console.log("theme -->", Object.keys(themesSelected)[i])
//     console.log(multiDone[i])
// }