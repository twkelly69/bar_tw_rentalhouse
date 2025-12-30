import { Runtime, Inspector } from "./runtime.js";
import define from "./0b07c3790ae4af2c@369.js";

const runtime = new Runtime();
const main = runtime.module(define, name => {
  if (name === "chart") return new Inspector(document.querySelector("#chart-container") || document.body);
});

// 強制將圖表內的 data 變數替換成您的 2025.json
main.redefine("data", async () => {
  const response = await fetch("2025.json");
  return response.json();
});
