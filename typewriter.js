const sentence = "hello there from lighthouse labs";
let time = 0;
for (let index = 0; index < sentence.length; index++) { 
  setTimeout(() => {
    if (index !== sentence.length - 1) {
      process.stdout.write(sentence[index]);
    }
    if (index === sentence.length - 1) {
      process.stdout.write(sentence[index] + "\n");
    }
  }, time);
  time += 50;
}