import "dotenv/config";
import Mailgen from "mailgen";

export const mailGenerator = new Mailgen({
  theme: "cerberus",

  product: {
    // logo: "",
    name: "MotorShop",
    link: process.env.BASE_URL,
  },
});
