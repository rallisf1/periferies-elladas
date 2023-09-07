const dimoi = [];
let dimos = {};
let pe = {};
let poleis = [];
document.querySelectorAll('table.wikitable tr').forEach((el, index) => {
    if(index === 0) return;
    if(index === 1) {
        let columns = el.querySelectorAll('th');
        pe = {
            code: columns[1].innerText.trim(),
            name: columns[0].innerText.split('\n')[0].trim(),
        }
        return;
    }
    let columns = el.querySelectorAll('td');
    if(!columns.length) columns = el.querySelectorAll('th');
    const kodikos = columns[1].innerText.trim();
    if(kodikos.length === 2) {
        pe = {
            code: kodikos,
            name: columns[0].innerText.split('\n')[0].trim(),
        }
        return;
    }
    if(kodikos.length === 4) {
        if(Object.keys(dimos).length > 0){
            dimoi.push({
                ...dimos,
                cities: poleis
            });
        }
        dimos = {
            code: kodikos,
            name: columns[0].getElementsByTagName('a')[0].innerText.trim(),
            base: columns[0].getElementsByTagName('a')[1].innerText.trim(),
            pe
        }
        poleis = [];
        return;
    }
    if(kodikos.length === 6 || kodikos.length === 8) {
        return;
    }
    poleis.push({
        code: kodikos,
        name: columns[0].innerText.split(/[\(,]+/)[0].trim()
    })
});
dimoi.push({
    ...dimos,
    cities: poleis
});
console.log(dimoi);
// Μετά αντιγράφουμε τα αποτελέσματα από την κονσόλα