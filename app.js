const fs = require("fs")
const yargs = require("yargs")
const data = require("./data")
const { type } = require("os")

yargs.command({
    command: "add",
    describe: " to add an item",
    builder: {
        fname: {
            describe: "this is the first name ",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        //  console.log("you have already added an item")
        // console.log(x.fname , x.lname)
        data.addPerson(x.id, x.fname, x.lname, x.city, x.age)
    }
})
yargs.command({
    command: "delete",
    describe: "to delete an item",
    builder: {
        id: {
            describe: "this is id to delet ",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        // console.log("you have already deleted an item")
        data.deleteData(x.id)
    }
})
yargs.command({
    command: "read",
    describe: "to read an item",
    builder: {
        id: {
            describe: "this is id to read  ",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data.readData(x.id)
    }
})
yargs.command({
    command: "list",
    describe: "to list data",
    handler: () => {
        data.listData()
    }
})

yargs.parse()