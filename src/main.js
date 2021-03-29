import { screenTemplate as leaders } from "./leaders/";
import { screenTemplate as activity } from "./activity";
import { screenTemplate as chart } from "./chart";
import { screenTemplate as diagram } from "./diagram";
import { screenTemplate as vote } from "./vote";
import { donut } from "./components/my-donut";
import "./fonts.css";
import data from "../data.json";
import "./body_dark.css";
import "./reset.css";

const templates = { leaders, activity, chart, diagram, vote };

window.data = data;
window.renderI = (i) =>
  (document.body.innerHTML = renderTemplate(data[i].alias, data[i].data));

const renderTemplate = (alias, data) => {
  return templates[alias](data);
};
window.renderTemplate = renderTemplate;
const parsedUrl = new URL(window.location.href);
const slide = parsedUrl.searchParams.get("slide");
const theme = parsedUrl.searchParams.get("theme");
document.body.classList.replace("theme_dark", `theme_${theme}`);
renderI(slide);
