const yargs = require("yargs")

const data10 = require("./data10")

// add a person 

yargs.command({
  command: "add",
  describe: "to add a person",
  builder: {
    id: {
      describe: "this is the id desc in add command",
      demandOption: true,
      type: "string",
    },
    fname: {
      describe: "this is the first name desc in add command",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "this is the last name desc in add command",
      demandOption: true,
      type: "string",
    },
    age: {
      describe: "this is the age desc in add command",
      demandOption: true,
      type: "number",
    },
    city: {
      describe: "this is the city desc in add command",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data10.addPerson(x.id, x.fname, x.lname, x.age, x.city)
  },
})

// view all people 

yargs.command({
  command: "list",
  describe: "to view all people",
  handler: () => {
    data10.listData()
  },
})

// view one of person 

yargs.command({
  command: "read",
  describe: "to view a specific person",
  builder: {
    id: {
      describe: "this is the id desc in read command",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data10.readData(x.id)
  },
})

// delete all people 

yargs.command({
  command: "deleteAll",
  describe: "to delete all people",
  handler: () => {
    data10.deleteAll()
  },
})

// delete one of person 

yargs.command({
  command: "delete",
  describe: "to delete a specific person",
  builder: {
    id: {
      describe: "this is the id desc in delete command",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data10.deleteData(x.id)
  },
})

// view full name and city of each person 

yargs.command({
  command: "fullname",
  describe: "to view the full name and the city of each person",
  handler: () => {
    data10.fullNameData()
  },
})

yargs.parse()