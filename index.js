import { getBills, saveNewBill } from "./fileMethods.js";
import { promptNewBill } from "./prompts.js";
import inquirer from "inquirer";

const menuSelector = async () => {
  let start = true;
  while (start) {
    const optionSelected = await inquirer.prompt([
      {
        type: "list",
        name: "main_menu",
        message: "Elija una opción:",
        choices: [
          { value: 1, name: "Crear un nuevo gasto" },
          { value: 2, name: "Ver todos los gastos" },
          { value: 3, name: "Salir" },
        ],
      },
    ]);
    switch (optionSelected.main_menu) {
      case 1:
        console.log(optionSelected);
        await newBill();
        break;
      case 2:
        await allBills();
        break;
      case 3:
        start = false;
        break;
      default:
        start = false;
        break;
    }
  }
};

const newBill = async () => {
  const bill = await promptNewBill();
  const allMyBills = await getBills("bills");
  allMyBills.push(bill);
  await saveNewBill("bills", allMyBills);
};

const allBills = async () => {
  console.log(await getBills("bills"));
};
menuSelector();
