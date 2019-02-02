/*eslint-disable no-unused-vars*/
const findD = () => {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);
        if ((typeof(a) === "number") && (typeof(b) === "number") && (typeof(c) === "number")) {
            const d = b * b - 4 * a * c;

            if (d < 0) {
                    // eslint-disable-next-line no-console
                    console.log("no solution");  
                } else if (d === 0) {
                    const x = -b/(2 * a).toFixed(2);
                    // eslint-disable-next-line no-console
                    console.log(x); 
                } else {
                    const x1 = ((-b + Math.sqrt(d))/(2 * a)).toFixed(2);
                    const x2 = ((-b - Math.sqrt(d))/(2 * a)).toFixed(2);
                    // eslint-disable-next-line no-console
                    console.log(`x1 = ${x1}\nx2 = ${x2}`)
                }   
            } else {
            // eslint-disable-next-line no-console
            console.log("Invalid input data");
            }
}