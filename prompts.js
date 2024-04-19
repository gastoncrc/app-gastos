import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";

inquirer.registerPrompt("date", DatePrompt);

export const promptNewBill = async () => {
  return await inquirer.prompt(promptsArray);
};

const promptsArray = [
  {
    type: "input",
    name: "bill_name",
    message: "Ingrese el nombre de su gasto",
  },
  {
    type: "number",
    name: "bill_value",
    message: "Ingrese el monto de su gasto",
  },
  {
    type: "date",
    name: "bill_date",
    message: "Ingrese la fecha de su gasto",
    locale: "es-ES",
    format: { month: "short" },
  },
];
