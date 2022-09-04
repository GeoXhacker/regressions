const fs = require("fs");

    const files = ['a.json', 'b.json'];

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




