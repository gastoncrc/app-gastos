import fs from "fs";

export const getBills = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file + ".json", "utf8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};

export const saveNewBill = (file, bill) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file + ".json", JSON.stringify(bill), (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};
