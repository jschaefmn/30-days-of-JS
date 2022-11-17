function main() {
  const N = parseInt(readLine().trim(), 10);
  
  if (N % 2 !== 0) {
      console.log('Weird');
  } else if (N % 2 == 0) {
      if (N > 1 && N < 6){
          console.log('Not Weird');
      } else if (N > 5 && N < 21) {
          console.log('Weird');
      } else if (N > 20){
          console.log('Not Weird');
      }
  }
}