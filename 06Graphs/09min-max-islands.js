// find min or max islands in grid
/*
    write a function, minimumIsland, that takees in a grid
    containing Ws and Ls. W repesents water and L represents
    land. The function should return the  size of the snallest
    island. An island is a vertically or horizonatlly connected 
    region of land.
 */

function maxIslandSize(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = new Set();
    let largestSize = 0; // Changed from Infinity to 0
    function exploreSize(r, c) {
        const pos = r + "," + c;
        if (
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols ||
            grid[r][c] === "W" ||
            visited.has(pos)
        ) {
            return 0;
        }
        visited.add(pos);
        let size = 1;
        size += exploreSize(r + 1, c);
        size += exploreSize(r - 1, c);
        size += exploreSize(r, c + 1);
        size += exploreSize(r, c - 1);
        return size;
    }
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "L" && !visited.has(r + "," + c)) {
                const size = exploreSize(r, c);
                if (size > largestSize) {
                    largestSize = size;
                }
            }
        }
    }
    return largestSize;
}

function minIslandSize(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = new Set();
    let smallestSize = Infinity;
    function exploreSize(r, c) {
        const pos = r + "," + c;
        if (
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols ||
            grid[r][c] === "W" ||
            visited.has(pos)
        ) {
            return 0;
        }
        visited.add(pos);
        let size = 1;
        size += exploreSize(r + 1, c);
        size += exploreSize(r - 1, c);
        size += exploreSize(r, c + 1);
        size += exploreSize(r, c - 1);
        return size;
    }
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "L" && !visited.has(r + "," + c)) {
                const size = exploreSize(r, c);
                if (size < smallestSize) {
                    smallestSize = size;
                }
            }
        }
    }
    return smallestSize;
}

const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W']
];

console.log("Max Island Size:", maxIslandSize(grid)); 
console.log("Min Island Size:", minIslandSize(grid)); 
