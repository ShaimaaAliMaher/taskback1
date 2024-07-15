const fs = require("fs")

// ///////////         add data             ////////////////////////////
const addPerson = (id, fname, lname, city,age) =>{
   const allData =loadData()
   const dublicatedData=allData.filter((obj)=>{
    return obj.id===id
   }) 
   if(dublicatedData.length==0){
     allData.push({
    id: id,
    fname: fname,
    lname: lname,
    city: city,
    age: age
   })
   savealldata(allData)
   }else{
    console.log("error dublicated")
   }
}
// /////////////////         load data        //////////////////////////////////////
const loadData = () => {
    try {
        const dataJson = fs.readFileSync("data.json").toString()
        return JSON.parse(dataJson)
    }
    catch {
        return []
    }
 }
//  /////////////  save ata    //////////////////////////////////
const savealldata = (allData) => {
    const saveallDataJson = JSON.stringify(allData)
    fs.writeFileSync("data.json", saveallDataJson)
}
// //////////////   delete data   //////////////////////////
const deleteData = (id) => {
    const allData = loadData()
    const dataTokeep = allData.filter((obj) => {
        return obj.id !== id
    })
    //  console.log(dataTokeep)
    //  console.log("you have successfully deleted an item")
    savealldata(dataTokeep)
}
/////////////////   read data //////////
const readData =(id)=>{
    const allData=loadData()
    const neededData =allData.find((obj)=>{
        return obj.id== id
    })
    if(neededData){
          console.log(neededData)
    }else{
        console.log("not found")
    }
}
// ?////////////// list //////////////////
const listData =()=>{
    const allData=loadData()
    allData.forEach(obj => {
        console.log(obj.id ,obj.fname ,obj.lname)
    });
}
// //////////////////////////////////////////
module.exports={
addPerson,
deleteData,
readData,
listData
}
