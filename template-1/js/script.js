const workexp = document.getElementById('work-exp');
const workexp_data = [
	{
		"role": "Software Developer",
		"company": "Key Information Technology, Dubai",
		"start": "11/16",
		"end": "10/19",
		"description": "Led the development and design of the company website."
	},
	{
		"role": "Summer Intern",
		"company": "Oracle Corporation, Dubai",
		"start": "08/16",
		"end": "08/16",
		"description": "Led the development and design of the company website."
	},
	{
		"role": "Software Engineering Intern",
		"company": "Aufait Systems, Dubai",
		"start": "02/16",
		"end": "04/16",
		"description": "Led the development and design of the company website."
	},
	{
		"role": "Web Development Intern",
		"company": "Tradeasia International, Dubai",
		"start": "11/16",
		"end": "10/19",
		"description": "Led the development and design of the company website."
	}
];

for(let i=0; i<workexp_data.length; i++) {
	let role = workexp_data[i].role;
	let company = workexp_data[i].company;
	let start = workexp_data[i].start;
	let end = workexp_data[i].end;
	let description = workexp_data[i].description;
}