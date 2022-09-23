// Buatlah script untuk mencetak dengan rentang angka tertentu.

const loopWithRange = (a, b) => {
    console.log("Input pertama: "+ a);
    console.log("Input kedua: "+ b);

    let output = "";
    for (let i = a; i <= b; i++) {
        output += i === b ? i : i + ", ";
    }

    console.log("Output di browser: "+ output);
}

loopWithRange(1, 10);