const todoL = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  let today = new Date().toISOString().split("T")[0];

  const overdue = () => {
    return all.filter((todo) => {
      return todo.dueDate < today;
    });
  };

  const dueToday = () => {
    return all.filter((todo) => {
      return todo.dueDate === today;
    });
  };

  const dueLater = () => {
    return all.filter((todo) => {
      return todo.dueDate > today;
    });
  };

  const toDisplayableList = (list) => {
    return list
      .map((todo) => {
        display_status = todo.completed ? "[x]" : "[ ]";
        display_date = todo.dueDate == today ? "" : todo.dueDate;

        return `${display_status} ${todo.title} ${display_date}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};



const todos_ = todoL();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

todos_.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
todos_.add({ title: "Pay rent", dueDate: today, completed: true });
todos_.add({ title: "Service Vehicle", dueDate: today, completed: false });
todos_.add({ title: "File taxes", dueDate: tomorrow, completed: false });
todos_e.log("My Todo-list\n\n");

console.log("Overdue");
var overdues = todos_.overdue();
var formattedOverdues = todos_.toDisplayableList(overdues);
console.log(formattedOverdues);
console.log("\n\n");

console.log("Due Today");
let itemsDueToday = todos_.dueToday();
let formattedItemsDueToday = todos_.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log("\n\n");

console.log("Due Later");
let itemsDueLater = todos_.dueLater();
let formattedItemsDueLater = todos_.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log("\n\n");