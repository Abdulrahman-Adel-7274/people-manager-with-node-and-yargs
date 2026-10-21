const fs = require("fs")

// add person 

const addPerson = (id, fname, lname, age, city) => {
  const allData = loadInfo()

  const duplicatedData = allData.filter((obj) => {
    return obj.id === id
  })

  if (duplicatedData.length != 0) {
    console.log("error duplicated data")
  } else if (allData.length >= 10) {
    console.log("you can not add more than 10 people")
  } else {
    allData.push({
      id: id,
      fname: fname,
      lname: lname,
      age: age,
      city: city,
    })
    saveAllData(allData)
    console.log("you have successfully added an item")
  }
}

const loadInfo = () => {
  try {
    const dataJson = fs.readFileSync("data10.json").toString()
    return JSON.parse(dataJson)
  } catch {
    return []
  }
}

const saveAllData = (allData) => {
  const saveAllDataJson = JSON.stringify(allData)
  fs.writeFileSync("data10.json", saveAllDataJson)
}

// delete one person 

const deleteData = (id) => {
  const allData = loadInfo()

  const dataToKeep = allData.filter((obj) => {
    return obj.id !== id
  })

  if (dataToKeep.length == allData.length) {
    console.log("id needed not found")
  } else {
    saveAllData(dataToKeep)
    console.log("you have successfully deleted an item")
  }
}

// delete all people 

const deleteAll = () => {
  saveAllData([])
  console.log("you have successfully deleted all people")
}

// view one of person 

const readData = (id) => {
  const allData = loadInfo()

  const itemNeeded = allData.find((obj) => {
    return obj.id == id
  })

  if (itemNeeded) {
    console.log(itemNeeded)
  } else {
    console.log("id needed not found")
  }
}

// view all people 

const listData = () => {
  const allData = loadInfo()

  if (allData.length == 0) {
    console.log("no data available")
  }

  allData.forEach((obj) => {
    console.log("id : " + obj.id)
    console.log("fname : " + obj.fname)
    console.log("lname : " + obj.lname)
    console.log("age : " + obj.age)
    console.log("city : " + obj.city)
    console.log("-------------------")
  })
}

// full name and city of each person 

const fullNameData = () => {
  const allData = loadInfo()

  if (allData.length == 0) {
    console.log("NO DATA")
  }

  allData.forEach((obj) => {
    console.log(obj.fname + " " + obj.lname, obj.city)
  })
}

module.exports = {
  addPerson,
  deleteData,
  deleteAll,
  readData,
  listData,
  fullNameData,
}