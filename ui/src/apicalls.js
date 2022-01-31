import axios from 'axios';

export async function callNLP () {

    return new Promise((resolve, reject)=>{
        axios
            .get('http://localhost:34567/parse')
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