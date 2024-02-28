var csvFileData;
var 2d = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
document.getElementById('csvFileInput').addEventListener('change', (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
        complete: function (results) {
            console.log(results.data);
        },
        header = true,
        dynamicTyping = true,
    });
    reader.readAsText(file);
});