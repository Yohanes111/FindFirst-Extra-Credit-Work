/**
 * FindFirst is my version of combining linux grep and head commands
 * Usage: node FindFirst.js <PATTERN> <FILENAME> <NUMBEROFLINES>
 */

const fs = require('fs');
const path = require('path');

if (process.argv.length !== 5) {
    console.log('Missing Argument');
    console.log(`Usage: node ${path.basename(process.argv[1])} <PATTERN> <FILENAME> <NUMBEROFLINES>`);
    return;
}

let filename = process.argv[3];
let pattern = process.argv[2];
let numberOfLines = process.argv[4];

let content = fs.readFileSync(filename, 'utf-8');
let lines = content.split('\n');

let found = 0;
for (let i = 0; i < lines.length; i++) {
    if (found >= numberOfLines) break;
    if (lines[i].includes(pattern)) {
        console.log(lines[i]);
        found = found + 1;
    }
}