const fs = require("fs");


// function testAsync() {
    const files = ['a.json', 'b.json'];
    // files.map(files, fs.readFile, function (err, data) {
    //     for(let file of files) {
    //         console.log( file.toString() );
    //     }
    // });
// }

const s = fs.readdirSync('../')

const json = s.filter((e)=> e.slice(-2) == "on")
 return console.log(json)

files.forEach((name, i)=>{
    const temp = []
const rad = []
    fs.readFile(name, async(err, file)=>{
        const a = JSON.parse(file);
    
         await   a.forEach(e => {
                console.log(name);
                temp.push(e[0]);
                rad.push(e[1]);
            });
    
         const tempTotal =  temp.reduce((partialSum, a) => partialSum + a, 0)/temp.length;
            const radTotal = rad.reduce((partialSum, a) => partialSum + a, 0)/rad.length;  
            const averages = [tempTotal, radTotal]
            
            fs.writeFile(
                `../output/${name}`,
            
                JSON.stringify(averages),
            
                function (err) {
                    if (err) {
                        console.error("Crap happens");
                    }
                }
            );
    })
})

// testAsync()






// fs.readFile("./auto.test11.16\ copy.json",async(err, file)=>{
//     const a = JSON.parse(file);

//      await   a.forEach(e => {
//             console.log(typeof e[0]);
//             temp.push(e[0]);
//             rad.push(e[1]);
//         });

//      const tempTotal =  temp.reduce((partialSum, a) => partialSum + a, 0)/temp.length;
//         const radTotal = rad.reduce((partialSum, a) => partialSum + a, 0)/rad.length;

    



       
// })




