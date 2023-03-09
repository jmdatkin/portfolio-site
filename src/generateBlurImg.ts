const pd = require("plaiceholder");
const fs = require("fs");

const regex = /^data:.+\/(.+);base64,(.*)$/;

pd.getPlaiceholder(process.argv[2]).then((res) => {
    const dataURL = res.base64;
    const matches = dataURL.match(regex);
    const ext = matches[1];
    const data = matches[2];
    const buffer = Buffer.from(data, 'base64');
    fs.writeFileSync('data.' + ext, buffer);
})