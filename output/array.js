const fs = require("fs");
const s = fs.readdirSync('./')
const json = s.filter((e)=> e.slice(-2) == "on")
const rad = []


json.forEach((name, i)=>{
    const temp = []

  if(name.slice(-6) === "6.json"){

    rad.push(name)   

    }

    const c = rad.sort((a,b)=>{
        a.slice(5,-7) - b.slice(5,-7)
    })
    return console.log(c)




    // fs.readFile(name, async(err, file)=>{
    //     const a = JSON.parse(file);
    
    //      await   a.forEach(e => {
    //             console.log(name);
    //             Array.push
    //         });
    
    //      const tempTotal =  temp.reduce((partialSum, a) => partialSum + a, 0)/temp.length;
    //         const radTotal = rad.reduce((partialSum, a) => partialSum + a, 0)/rad.length;  
    //         const averages = [tempTotal, radTotal]
    //         if(!isNaN(tempTotal) && !isNaN(radTotal)){
    //             fs.writeFile(
    //                 `./${name}`,
                
    //                 JSON.stringify(averages),
                
    //                 function (err) {
    //                     if (err) {
    //                         console.error("Crap happens");
    //                     }
    //                 }
    //             );
    //         }
         
    // })
})