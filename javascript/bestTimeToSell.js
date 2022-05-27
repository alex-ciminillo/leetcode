maxProfit = function(prices) {
    // loop through array
    // keep track of lowest number
    // on each higher number past that, keep track of the max profit. 
    // at the end of loop, output max profit
    let minPrice = prices[0];
    let maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        let todaysStock = prices[i];
        let todaysProfit = todaysStock - minPrice;
        if (todaysProfit > maxProfit) {
            maxProfit = todaysProfit;
        }
        if (todaysStock < minPrice) {
            minPrice = todaysStock;
        }
    }
    return maxProfit;
    
    
};