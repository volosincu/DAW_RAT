
function searchAll(object, searchTerm, acc) {
    Object.keys(object).forEach(key => {
        searchItem(object[key], searchTerm.toLowerCase(), acc)
    })
};

function searchSeaction(object, searchTerm, acc) {
    Object.keys(object).forEach(key => {
        getSection(object[key], searchTerm.toLowerCase(), acc)
    })
};

function getOntologyLinks(ontology, terms){
    const res = [];
    terms.forEach(term=>{
        Object.keys(ontology).forEach(link => {
            if(link.includes(term)){
                res.push(link );
            }
        })
    })
    return res;
}

function getModels(api, searchTerm,metadata) {

    const schemas = api.components.schemas;
    Object.keys(api.components.schemas).forEach(modelName => {

       
        Object.keys(schemas[modelName]).forEach(key1 => {
            if(key1 == 'properties'){
                if ( !metadata[modelName]){
                    metadata[modelName] = {};
                }
                metadata[modelName].props = [];
                Object.keys(schemas[modelName][key1]).forEach(prop => {
                    metadata[modelName].props.push(prop)
                })  
            }
        })   
    })

}

function getPaths(api, searchTerm,metadata) {


    Object.keys(api.paths).forEach(key => {

        metadata[key] = {};
        Object.keys(api.paths[key]).forEach(key1 => {
            if(key1 == 'get'){
                metadata[key]['description'] = api.paths[key][key1].description;
                metadata[key]['params'] = [];
                api.paths[key][key1].parameters.map((i)=>{
                    metadata[key]['params'].push(i.name);
                })
            }
        })   
    })

}

function getSection(item, searchTerm, acc) {
    Object.keys(item).forEach(key => {
        if (typeof item[key] === "object") {
            getSection(item[key], searchTerm, acc)
        }
        if (typeof key === "string") {
            if (key.includes(searchTerm)) {
                acc.push({key: key, header: item[key]})
            }
            if (item[key].toLowerCase){ 
                if(item[key].toLowerCase().includes(searchTerm)) {
                    acc.push({key: key, content: item[key]});
                }
            }
        }
    })
}
      
      
function searchItem(item, searchTerm, acc) {
    Object.keys(item).forEach(key => {
        if (typeof item[key] === "object") {
        searchItem(item[key], searchTerm, acc)
        }
        if (typeof item[key] === "string") {
            if (item[key].toLowerCase().includes(searchTerm)) {
                acc.push({key: key, content: item[key]})
            }
            if (key.includes(searchTerm)) {
                acc.push({key: key, header: item[key]})
            }
        }
    })
}
  
module.exports = {searchAll, searchSeaction, getPaths, getModels, getOntologyLinks}