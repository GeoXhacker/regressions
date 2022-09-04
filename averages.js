const fs = require("fs");
const temp = []
const rad = []

function testAsync() {
    const files = ['file1.json', 'file2.json', 'file3.json'];
    async.map(files, fs.readFile, function (err, data) {
        for(let file of files) {
            console.log( file.toString() );
        }
    });
}





fs.readFile("./auto.test11.16\ copy.json",async(err, file)=>{
    const a = JSON.parse(file);

     await   a.forEach(e => {
            console.log(typeof e[0]);
            temp.push(e[0]);
            rad.push(e[1]);
        });

     const tempTotal =  temp.reduce((partialSum, a) => partialSum + a, 0)/temp.length;
        const radTotal = rad.reduce((partialSum, a) => partialSum + a, 0)/rad.length;

    



       
})




