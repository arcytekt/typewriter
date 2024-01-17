const sentence = "hello there from lighthouse labs";
const characters = sentence.split("");

characters.forEach((char, index) => {
  setTimeout(() => {
    process.stdout.write(char);
    }, index * 50);
});

setTimeout(() => {
  process.stdout.write("\n");
}, characters.length * 50);