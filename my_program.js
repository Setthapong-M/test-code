const fs = require("fs");

const countVisibleTrees = (woods) => {
    let grid = woods.map(val => (
        val.trim().split('').map(Number)
    ));

    let n = grid.length;
    let m = grid[0].length;

    let answer = 0;

    for(let i = 0; i < n; i++){
        for(let j=0; j < m; j++){
            let h = grid[i][j];

            if(j === 0 || i === 0 || j === m - 1 || i === n - 1) answer++;
            else if (Math.max(...grid[i].slice(0, j)) < h) answer++;
            else if (Math.max(...grid[i].slice(j + 1)) < h) answer++;
            else if (Math.max(...grid.slice(0, i).map(val => val[j])) < h) answer++;
            else if (Math.max(...grid.slice(i + 1).map(val => val[j])) < h) answer++;
        }
    }
    console.log(answer)
    return answer
}

const main = () => {
    let textFile = process.argv[2];
    let woods = fs.readFileSync(textFile, "utf-8").trim().split("\n");
    countVisibleTrees(woods);
}

main();