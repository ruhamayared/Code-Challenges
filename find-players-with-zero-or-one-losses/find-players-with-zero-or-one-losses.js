/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let winners = new Set();
    let losers = new Set();
    let lostCounts = new Map();

    for (const [winner, loser] of matches) {
        winners.add(winner);
        losers.add(loser);
        lostCounts.set(loser, (lostCounts.get(loser) || 0) + 1);
    }

    const noLosses = [...winners].filter(player => !lostCounts.has(player));
    const oneLoss = [...lostCounts].filter(([player, count]) => count === 1).map(([player, count]) => player);
    
    noLosses.sort((a, b) => a - b);
    oneLoss.sort((a, b) => a - b);

    return [noLosses, oneLoss];
};