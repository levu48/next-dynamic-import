import path from 'path';
import fs from 'fs';

console.log('>>> DIR', __dirname);

let genScript = (str) => `import dynamic from 'next/dynamic';
export default { 
${str}}
`;

let jsStr = "";

fs.readdir(__dirname + '/components', (error, items) => {
    let str = "";
    console.log(items);
    items.forEach(item => {
        item = item.slice(0, item.length-3);
        str += `'components/${item}': () => dynamic(import('./components/${item}')),\n`;
    });
    jsStr = genScript(str);
    console.log('>>> JS STR', jsStr);
    fs.writeFileSync(__dirname + '/componentTable.js', jsStr, (err) => {
        console.log(err);
    });
});

