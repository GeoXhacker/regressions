var XLSX = require("xlsx");
var fs = require("fs");
const moment = require("moment");

var workbook = XLSX.readFile("Gulu.xlsx");
console.log(workbook.SheetNames);

const gulu = workbook.Sheets["Gulu"];

const json = XLSX.utils.sheet_to_json(gulu, { raw: false });


const a = [];
const c = [];
const d = [];
const f = [];
const g = [];
const h = [];
// const i = [];
const j = [];
const k = [];
const l = [];
const m = [];
const n = [];
const o = [];

json.forEach((e, i) => {
	const b = [];
	const date = moment(e.Date, ["DD-MM-YYYY", "MM-DD-YYYY"]).toDate();

	if (
		date.getFullYear() === 2016 &&
		date.getMonth() === 10 &&
		e["Global Radiation (W/m²)"] !== "0"
	) {
		
		if (
			Number(e["Temperature (°C)"]) &&
			Number(e["Global Radiation (W/m²)"]) 
		) {
			b.push(Number(e["Temperature (°C)"]));
			b.push(Number(e["Global Radiation (W/m²)"]));
			a.push(b);
		
		} 

		
	}

	if (
		date.getFullYear() === 2016 &&
		date.getMonth() === 1 &&
		e["Global Radiation (W/m²)"] !== "0"
	) {
		if (
			Number(e["Temperature (°C)"]) &&
			Number(e["Global Radiation (W/m²)"]) 
		) {
			b.push(Number(e["Temperature (°C)"]));
			b.push(Number(e["Global Radiation (W/m²)"]));
			c.push(b);
		
		} 
	}

	if (
		date.getFullYear() === 2016 &&
		date.getMonth() === 2 &&
		e["Global Radiation (W/m²)"] !== "0"
	) {
		if (
			!isNaN(Number(e["Temperature (°C)"])) &&
			!isNaN(Number(e["Global Radiation (W/m²)"]))
		) {
			if (
				Number(e["Temperature (°C)"]) &&
				Number(e["Global Radiation (W/m²)"]) 
			) {
				b.push(Number(e["Temperature (°C)"]));
				b.push(Number(e["Global Radiation (W/m²)"]));
				d.push(b);
			
			} 
		}

		// console.log(b)
	}

	if (
		date.getFullYear() === 2016 &&
		date.getMonth() === 3 &&
		e["Global Radiation (W/m²)"] !== "0"
	) {
		if (
			Number(e["Temperature (°C)"]) &&
			Number(e["Global Radiation (W/m²)"]) 
		) {
			b.push(Number(e["Temperature (°C)"]));
			b.push(Number(e["Global Radiation (W/m²)"]));
			f.push(b);
		
		} 
	}

	if (
		date.getFullYear() === 2016 &&
		date.getMonth() === 4 &&
		e["Global Radiation (W/m²)"] !== "0"
	) {
		if (
			Number(e["Temperature (°C)"]) &&
			Number(e["Global Radiation (W/m²)"]) 
		) {
			b.push(Number(e["Temperature (°C)"]));
			b.push(Number(e["Global Radiation (W/m²)"]));
			g.push(b);
		
		} 
	}

	if (
		date.getFullYear() === 2016 &&
		date.getMonth() === 5 &&
		e["Global Radiation (W/m²)"] !== "0"
	) {
			if (
			Number(e["Temperature (°C)"]) &&
			Number(e["Global Radiation (W/m²)"]) 
		) {
			b.push(Number(e["Temperature (°C)"]));
			b.push(Number(e["Global Radiation (W/m²)"]));
			h.push(b);
		} 
	}

	if (
		date.getFullYear() === 2016 &&
		date.getMonth() === 6 &&
		e["Global Radiation (W/m²)"] !== "0"
	) {
		if (
			Number(e["Temperature (°C)"]) &&
			Number(e["Global Radiation (W/m²)"]) 
		) {
			b.push(Number(e["Temperature (°C)"]));
			b.push(Number(e["Global Radiation (W/m²)"]));
			o.push(b);
		
		} 
	}

	if (
		date.getFullYear() === 2016 &&
		date.getMonth() === 7 &&
		e["Global Radiation (W/m²)"] !== "0"
	) {
		if (
			Number(e["Temperature (°C)"]) &&
			Number(e["Global Radiation (W/m²)"]) 
		) {
			b.push(Number(e["Temperature (°C)"]));
			b.push(Number(e["Global Radiation (W/m²)"]));
			j.push(b);
		
		} 
	}

	if (
		date.getFullYear() === 2016 &&
		date.getMonth() === 8 &&
		e["Global Radiation (W/m²)"] !== "0"
	) {
			if (
			Number(e["Temperature (°C)"]) &&
			Number(e["Global Radiation (W/m²)"]) 
		) {
			b.push(Number(e["Temperature (°C)"]));
			b.push(Number(e["Global Radiation (W/m²)"]));
			k.push(b);
		
		} 
	}

	if (
		date.getFullYear() === 2016 &&
		date.getMonth() === 9 &&
		e["Global Radiation (W/m²)"] !== "0"
	) {
		if (
			Number(e["Temperature (°C)"]) &&
			Number(e["Global Radiation (W/m²)"]) 
		) {
			b.push(Number(e["Temperature (°C)"]));
			b.push(Number(e["Global Radiation (W/m²)"]));
			l.push(b);
		
		} 
	}

	if (
		date.getFullYear() === 2016 &&
		date.getMonth() === 10 &&
		e["Global Radiation (W/m²)"] !== "0"
	) {
		if (
			Number(e["Temperature (°C)"]) &&
			Number(e["Global Radiation (W/m²)"]) 
		) {
			b.push(Number(e["Temperature (°C)"]));
			b.push(Number(e["Global Radiation (W/m²)"]));
			m.push(b);
		
		} 
	}

	if (
		date.getFullYear() === 2016 &&
		date.getMonth() === 11 &&
		e["Global Radiation (W/m²)"] !== "0"
	) {
		if (
			Number(e["Temperature (°C)"]) &&
			Number(e["Global Radiation (W/m²)"]) 
		) {
			b.push(Number(e["Temperature (°C)"]));
			b.push(Number(e["Global Radiation (W/m²)"]));
			n.push(b);
		
		} 
	}
});


console.log("iterations done... now saving");

fs.writeFile(
	"./auto.1.16.json",

	JSON.stringify(a),

	function (err) {
		if (err) {
			console.error("Crap happens");
		}
	}
);

fs.writeFile(
	"./auto.2.16.json",

	JSON.stringify(c),

	function (err) {
		if (err) {
			console.error("Crap happens");
		}
	}
);

fs.writeFile(
	"./auto.3.16.json",

	JSON.stringify(d),

	function (err) {
		if (err) {
			console.error("Crap happens");
		}
	}
);
fs.writeFile(
	"./auto.4.16.json",

	JSON.stringify(f),

	function (err) {
		if (err) {
			console.error("Crap happens");
		}
	}
);
fs.writeFile(
	"./auto.5.16.json",

	JSON.stringify(g),

	function (err) {
		if (err) {
			console.error("Crap happens");
		}
	}
);
fs.writeFile(
	"./auto.6.16.json",

	JSON.stringify(h),

	function (err) {
		if (err) {
			console.error("Crap happens");
		}
	}
);
fs.writeFile(
	"./auto.7.16.json",

	JSON.stringify(o),

	function (err) {
		if (err) {
			console.error("Crap happens");
		}
	}
);
fs.writeFile(
	"./auto.8.16.json",

	JSON.stringify(j),

	function (err) {
		if (err) {
			console.error("Crap happens");
		}
	}
);
fs.writeFile(
	"./auto.9.16.json",

	JSON.stringify(k),

	function (err) {
		if (err) {
			console.error("Crap happens");
		}
	}
);
fs.writeFile(
	"./auto.10.16.json",

	JSON.stringify(l),

	function (err) {
		if (err) {
			console.error("Crap happens");
		}
	}
);
fs.writeFile(
	"./auto.11.16.json",

	JSON.stringify(m),

	function (err) {
		if (err) {
			console.error("Crap happens");
		}
	}
);
fs.writeFile(
	"./auto.12.16.json",

	JSON.stringify(n),

	function (err) {
		if (err) {
			console.error("Crap happens");
		}
	}
);
