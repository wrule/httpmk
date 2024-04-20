import fs from 'fs';

fs.writeFileSync('1.csv', 'id,name\n', 'utf8');
for (let i = 1; i <= 500000; ++i) {
  fs.appendFileSync('1.csv', `${i},名称${i}\n`, 'utf8');
}
