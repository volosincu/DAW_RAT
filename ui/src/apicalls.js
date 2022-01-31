import axios from 'axios';

export async function callNLP (term) {
    console.log(term)
    // return

    return new Promise((resolve, reject)=>{
        axios
            .post('http://localhost:34567/parse', {"text":term})
            .then(res => {
                console.log(`statusCode: ${res.status}`)
                // debugger
                if (res.data){
                    resolve(res.data);
                }

            })
            .catch(error => {
                console.error(error)
                reject({message: "no data"});
            })

    })
    
}