import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt({
    name: "URL",
    message: "Enter the url",
    type: String,
  })
  .then((answers) => {
    if (!answers) {
      return Promise.reject("not viable");
    } else {
      var link = answers.URL;
      var qr_svg = qr.image(link, { type: "png" });
      qr_svg.pipe(fs.createWriteStream("qrthis.png"));
      //   var svg_string = qr.imageSync(link, { type: "png" });
    }
  })
  .catch((err) => {
    console.log(err);
  });
