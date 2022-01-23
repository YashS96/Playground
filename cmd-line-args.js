// $ node process-args.js one two=three four
// Would generate the output:

// 0: /usr/local/bin/node
// 1: /Users/mjr/work/node/process-args.js
// 2: one
// 3: two=three
// 4: four

let args=process.argv;

args.splice(0,2);
args.forEach((value,index) => {
    console.log(`${index} : ${value}`);
});
