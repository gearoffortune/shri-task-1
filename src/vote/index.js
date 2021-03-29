import { header } from "../components/header";
import { person } from "../components/person";
import { button } from "../components/button";
import "./styles.css";
import { html } from "../html-IoC";

const column = (elems) => html`<div class="vote__column">${elems}</div>`;
const getVerticalColumns = (users, selectedUserId, offset) => {
  const people = users.map((user) =>
    person(
      "vote",
      { ...user, valueText: "" },
      user.id === selectedUserId,
      "👍",
      user.id === selectedUserId,
      { alias: "leaders", data: { selectedUserId: user.id } }
    )
  );
  return html`<div class="vote__users--vertical">
    ${[
      column([people[0], people[3], people[6]]),
      column([
        button("vote", "up", offset !== 0, {
          alias: "vote",
          data: { offset: offset - 8 },
        }),
        people[1],
        people[4],
        button("vote", "down", offset !== users.length - 1, {
          alias: "vote",
          data: { offset: offset + 8 },
        }),
      ]),
      column([people[2], people[5], people[7]]),
    ]}
  </div>`;
};

export const screenTemplate = (data) => {
  data.offset = data.offset && data.offset > 0 ? data.offset : 0;
  return html`${[
    header(data.title, data.subtitle),
    html`<div class="vote__users--horizontal">
      ${[
        ...data.users.map(
          (user) =>
            html`<div class="vote__person__wrapper">
              ${person(
                "vote",
                { ...user, valueText: "" },
                user.id === data.selectedUserId,
                "👍",
                user.id === data.selectedUserId,
                { alias: "leaders", data: { selectedUserId: user.id } }
              )}
            </div>`
        ),
        button("vote", "up", data.offset === 0, {
          alias: "vote",
          data: { offset: data.offset - 8 },
        }),
        button("vote", "down", data.offset === data.users.length - 1, {
          alias: "vote",
          data: { offset: data.offset + 8 },
        }),
        html`<div class="vote__buttonwrapper vote__buttonwrapper--horizontal">
          ${[
            button("vote__buttonwrapper", "up", data.offset === 0, {
              alias: "vote",
              data: { offset: data.offset - 6 },
            }),
            button(
              "vote__buttonwrapper",
              "down",
              data.offset === data.users.length - 1,
              { alias: "vote", data: { offset: data.offset + 6 } }
            ),
          ]}
        </div>`,
      ]}
    </div>`,
    getVerticalColumns(data.users, data.selectedUserId, data.offset),
  ]}`;
};
