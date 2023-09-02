# file
- File
- Blob
- ArrayBuffer
- FileReader
- DataView

```js
let file = new File([], "");
let blob = new Blob([]);

file.arrayBuffer(); // arrayBuffer
blob.arrayBuffer(); // arrayBuffer

const fs = new FileReader();
fs.onload = e => {
    console.log(fs.result); // arrayBuffer
    console.log(e.target.result); // arrayBuffer
}
fs.readAsArrayBuffer(file);

const dv = new DataView(await blob.arrayBuffer());
console.log(dv) // DataView
console.log(dv.getUint8(1))
dv.setUint8(1, 0x01);

```

