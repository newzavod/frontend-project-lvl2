import { readFileSync } from 'fs';
import _ from 'lodash';

const gendiff = (data1, data2) => {
    const keys1 = Object.keys(data1);
    const keys2 = Object.keys(data2);
    const keys = _.union(keys1, keys2);
    for (const key of keys) {

        console.log(`${key} : ${data1[key]}`);
        console.log(`${key} : ${data2[key]}`);
    }

    const result = {};
    return result;
};

export default (filepath1, filepath2) => {
    const data1 = readFileSync(filepath1, 'utf-8');
    const data2 = readFileSync(filepath2, 'utf-8');
    const obj1 = JSON.parse(data1);
    const obj2 = JSON.parse(data2);


    gendiff(obj1, obj2);

    // console.log(_.isEqual(obj1, obj2)); false
    // console.log(obj1);
    // console.log(obj2);

    //obj1↓
    //{
    //   host: 'hexlet.io',
    //   timeout: 50,
    //   proxy: '123.234.53.22',
    //   follow: false
    // }
    //obj2↓
    //{ timeout: 20, verbose: true, host: 'hexlet.io' }

};


// export default genDiff;
//!!!
// const genDiff = (data1, data2) => {
//     const keys1 = _.keys(data1);
//     const keys2 = _.keys(data2);
//     const keys = _.union(keys1, keys2);

//     const result = {};
//     for (const key of keys) {
//         if (!_.has(data1, key)) {
//             result[key] = 'added';
//         } else if (!_.has(data2, key)) {
//             result[key] = 'deleted';
//         } else if (data[key] !== data2[key]) {
//             result[key] = 'changed';
//         } else {
//             result[key] = 'unchanged';
//         }
//     }
//     return result;
// }
// export default genDiff;
