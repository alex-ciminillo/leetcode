var imageSmoother = function (M) {
    return M.map((arr, i) =>
      arr.map((_, j) => {
        var sum = 0;
        var count = 0;
        for (let l = i - 1; l <= i + 1; l++) {
          for (let m = j - 1; m <= j + 1; m++) {
            if (M[l] && M[l][m] > -1){
                sum += M[l][m]; 
                count++;
            } 
          }
        }
        return Math.floor(sum / count);
      })
    );
  };