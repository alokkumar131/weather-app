
const yargs=require("yargs");
const geocode=require('./geocode/geocode.js');
const argv=yargs.options({
    a:{
        demand:true,
        alias:"address",
        description:"Address for fetching data",
        string:true
    }
})
.help()
.alias("help","h")
.argv
console.log(argv.address)

geocode.getCodeAddress(argv.address,(haserror,result)=>{
    if(haserror){
        console.log(haserror);
    }else{
        console.log(JSON.stringify(result,undefined,2));
    }
    
})
