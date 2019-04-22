const APIAmenEndpoint = "";
const APIListingEndpoint = "";
                

function getKyleFetch(){
    
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
