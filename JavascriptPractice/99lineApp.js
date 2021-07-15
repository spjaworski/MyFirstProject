const friends = ["Sarah", "Alice", "Ben", "Dylan", "Amanda"]




for (let i = 0; i < friends.length; i++) {  
    

    for(let line = 99; line >= 1; line--) {
    
        console.log(line + " lines of code in the file, " + line + " lines of code, " + friends[i] + " strikes one out, clears it all out, " + (line - 1) + " lines of code in the file")
        
        if (line == 1) {
            console.log(line + " line of code in the file, " + line + " line of code, " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file")
        
        }
    }
};

