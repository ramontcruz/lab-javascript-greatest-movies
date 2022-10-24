// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let allDirectors = moviesArray.map(
       directors => {directors.director;}
    );
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let allDirectors = moviesArray.map(
        directors => {directors.director;}
     );
     let contador = 0;
     for(i=0;i<moviesArray.length;i++){
        if(moviesArray[i].director=='Steven Spielberg'&& moviesArray[i].genre.includes('Drama') ){
            contador++;
        }
     }
     return contador;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let score = 0;
    let numerodeFilmesSemScore = 0;
    if(moviesArray.length==0){
        return 0;
    }
    for(i=0;i<moviesArray.length;i++){
       if(moviesArray[i].score==0 ||moviesArray[i].score==null){
        continue;
       }else
        score += moviesArray[i].score;
    }    
    let saida = +Number.parseFloat(score/moviesArray.length).toFixed(2);
    if(typeof(saida)!=undefined){
        return +Number.parseFloat(score/(moviesArray.length)).toFixed(2);
    }
    return 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let contador = 0;
    let array = [];
    let media = 0;
    for(let i=0;i<moviesArray.length;i++){
        for(j=0;j<moviesArray[i].genre.length;j++){
            if(moviesArray[i].genre[j]=='Drama'){
                contador +=1;
                array.push(moviesArray[i]);
                media += moviesArray[i].score;
            }
        }   
    }
    if(contador==0){
        return 0
    }else
    return +Number.parseFloat(media/contador).toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    //return moviesArray.year.sort
    moviesArray.sort((a, b) => {
        if (a.year > b.year) return 1;
        if (a.year < b.year) return -1;
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
    });

    return [...moviesArray];
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.map((movie) => movie.title).sort().slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let hora = "";
    let minuto = "";
    let j = 0;
    let n = 0;
    console.log("length "+moviesArray.length);
    for(let i=0;i<moviesArray.length;i++){
        j = 0;
        console.log("i "+i);

        while (moviesArray[i].duration.charAt(j)!="h"){
            
            console.log("j "+j);
            hora +=moviesArray[i].duration.charAt(j);
            j++;
        };
        console.log("hora "+hora);
        hora = "";

        n = j;
        while (moviesArray[i].duration.charAt(n)!="m"){
            console.log("n "+n);
            minuto +=moviesArray[i].duration.charAt(n);
            n++; 
        };
        console.log("minuto "+minuto);
        minuto = "";

    }
    /*
        
       
    }
    */
    
    return hora;


}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
