const fs = require("fs");
fs.readFile("city.list.json", "utf8", function(err, data){
    let codes = JSON.parse(data);
    let extractedCodes = []
    codes.forEach(element => {
        extractedCodes.push(element.id)
    });
    let str = JSON.stringify(extractedCodes)
    console.log(extractedCodes.length)
    fs.writeFile('city_codes.txt', str, function(err){
        if (err) return err;
        console.log('Готово');
    })
});

