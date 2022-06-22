let nombres = ["Daniel", "Pablo", "Andres", "Camilo", "Jose", "Marcela", "Antonia", "Ana", "Tatiana", "Tola", "Maruja", "Juan"]

for(let i = 0; i<=nombres.length;i++){
    document.write(`- ${nombres[i]} <br/>`)
}

document.write(`Nombres con 5 a 7 letras <br/>`)

for(let i = 0; i<=nombres.length-1;i++){
    if (nombres[i].length>=5 && nombres[i].length<=7){
        document.write(`- ${nombres[i]}  tiene ${nombres[i].length} letras <br/>`)
    } 
}


document.write(`Nombres con A o con T <br/>`)
for(let i = 0; i<=nombres.length-1;i++){
    if (nombres[i][0]=== 'A' || nombres[i][0] ==='T'){
        document.write(`- ${nombres[i]} <br/>`)
    } 
}

let parr= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, pariatur quibusdam non laboriosam repudiandae officiis aliquid quaerat asperiores dolor, dicta sapiente delectus beatae ipsum earum aut molestiae. Architecto, possimus eum.'


document.write(`${parr} <br/>`)
 
for (let i=0;i<=parr.length-1;i++ ){
    if (parr[i]=== 'a' || parr[i]=== 'e' || parr[i]=== 'i' || parr[i]=== 'o' ||parr[i]=== 'u'){
        document.write(parr[i].replace('a','A').replace('e','E').replace('i','I').replace('o','O').replace('u','U'))
    }else{
        document.write(parr[i])
    }
}

