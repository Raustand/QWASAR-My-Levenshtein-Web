function my_levenshtein(param_1, param_2) {
    if (param_1.length !== param_2.length) {
        return -1;

    }
    let difference =0;
    for (let i =0; i < param_1.length; i++) {
        if (param_1[i] !== param_2[i]) {
            difference ++;
        }
    }
    
    return difference;
}