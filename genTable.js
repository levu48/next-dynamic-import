import path from 'path';
import fs from 'fs';

let genScript = (str) => `import dynamic from 'next/dynamic';
export default { 
${str}}
`;

fs.readdir(__dirname + '/components', (error, items) => {
    let str = "";
    items.forEach(item => {
        item = item.slice(0, item.length-3);
        str += `'components/${item}': () => dynamic(import('./components/${item}')),\n`;
    });
    fs.writeFileSync(__dirname + '/componentTable.js', genScript(str), (err) => {
        console.log(err);
    });
});

