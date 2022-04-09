




var climbStairs = function(n) {
    
    let combins = new Array(n + 1)

    combins[1] = 1, combins[2] = 2

    for (i = 3; i <=n; i++) {
        combins[i] = combins[i -1] + combins[i - 2]
    }

    return combins[n]
    
};












