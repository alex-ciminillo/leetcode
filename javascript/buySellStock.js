







var maxProfit = function(prices) {
    

    let buy = 0;
    let sell = 1;

    let best_sale = 0;

    while (sell < prices.length) {

        if (prices[buy] < prices[sell]) {
            let sale = prices[sell] - prices[buy]
            best_sale = Math.max(best_sale, sale);
        } else {
            buy = sell;
        }

        sell++

    }

    return best_sale

};
















