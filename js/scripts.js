const APIAmenEndpoint = "";
const APIListingEndpoint = "";
                

function getAmenitiesFetch(){
    
    let ERRORHANDLER;  
    let APIRequest = {};  
                
    
    return fetch(APIAmenEndpoint,{ method:'POST', 
                                          body:JSON.stringify(APIRequest) 
                                        })
    .then(handleErrors)
    .then((response) => response.json())
    .then((Reply) => Reply.Amenities)
    .catch(ERRORHANDLER => {
        console.error("Catch --> "); console.error(ERRORHANDLER);
        /*

            This Parses the JSON into Javascript Objects
            Then Console logs it.

        */
        let jsonParse = JSON.parse(PROMISEHANDLER);

        console.log(jsonParse);
        }
    );
}

function handleErrors(response) {
    if (!response.ok) throw Error(response.statusText);
    return response;
}

function getListingsFetch(){
    
    let ERRORHANDLER;  
    let APIRequest= {};  
                
    
    return fetch(APIListingEndpoint,{ method:'POST', 
                                          body:JSON.stringify(APIRequest) 
                                        })
    .then(handleErrors)
    .then((response) => response.json())
    .then((Reply) => Reply.Listings)
    .then(response => {
                            response.forEach(listing => {
                        
                                let splitList = listing.Amenities.split(', ');    
                                 
                            
                                  AmenSplitListHOLD =  splitList.map(list => {
                                        
                                            AmenitiesObject.forEach(Amen => {
                                    
                                                if(list == Amen.AmenityId.toString() ){
                                            
                                                    list = Amen.AmenityName;
                                        
                                                }
                                                
                                            })
                                        return list;
                                    })
                                listing.Amenities = AmenSplitListHOLD
                            
                                return listing;
                                
                            })
                        
                            return response;
                        }
                       )
    .catch(ERRORHANDLER => {
        console.error("Catch --> "); console.error(ERRORHANDLER);
        /*

            This Parses the JSON into Javascript Objects
            Then Console logs it.

        */
        let jsonParse = JSON.parse(PROMISEHANDLER);

        console.log(jsonParse);
        }
    );
}




