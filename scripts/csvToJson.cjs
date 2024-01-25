const fs = require('fs');

const csvFilePath = 'data/trips.csv';
const jsonFilePath = 'json/travelData.json';

const csv = fs.readFileSync(csvFilePath, 'utf-8');

const lines = csv.split('\n');
const headers = lines[0].split(',');
const jsonData = [];

for (let i = 1; i < lines.length; i++) {
    const data = lines[i].split(',');
    const entry = {};

    for (let j = 0; j < headers.length; j++) {
        entry[headers[j]] = data[j];
    }

    jsonData.push(entry);
}

const travelData = { travels: jsonData };

const jsonContent = JSON.stringify(travelData, null, 2);
fs.writeFileSync(jsonFilePath, jsonContent);

console.log('CSV to JSON conversion completed.');
