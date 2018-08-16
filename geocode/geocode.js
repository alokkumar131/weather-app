const request=require("request");
getCodeAddress = (address,callback)=>{
    const encodedaddress=encodeURIComponent(address);
    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedaddress}`,
        json:true
    },(error,response,body)=>{
        if(error){
           callback("Something wrong with google server");
        }else if(body.status=="ZERO_RESULT"){
           callback("Address you have entered is a wrong address");
        }
        else if(body.status=="OVER_QUERY_LIMIT"){
            callback("Adress shoud be minimum length");
        }
        else if(body.status=="OK"){
            callback(undefined,{
                Address : body.results[0].formatted_address,
                Longitude:body.results[0].geometry.location.lng,
                Latitude:body.results[0].geometry.location.lat
            })
        }
    
    
    })
}

module.exports.getCodeAddress=getCodeAddress;
