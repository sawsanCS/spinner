const str = "|/-\-|/-\-|/-\-|/-\-|";
let t = 0;
for (const s of str) {
  setTimeout(() => {
    process.stdout.write(`\r${s}   `);
  }, t += 200);
}
