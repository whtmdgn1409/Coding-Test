#include <iostream>

using namespace std;

#include <vector>
#include <queue>
#include <cmath>
#include <climits>

int find_maximum_cost(int **maze, int row, int col)
{
    vector<vector<bool>> visited(col, vector<bool>(row, false));
    vector<vector<int>> maxWeights(col, vector<int>(row, INT_MIN));
    queue<pair<int, int>> q;
    q.push({0, 0});
    visited[0][0] = true;
    maxWeights[0][0] = 0;

    vector<int> dx = {1, 0};
    vector<int> dy = {0, 1};

    while (!q.empty())
    {
        int currentRow = q.front().first;
        int currentCol = q.front().second;
        q.pop();

        for (int i = 0; i < 2; ++i)
        {
            int newRow = currentRow + dx[i];
            int newCol = currentCol + dy[i];

            if (!(0 <= newRow && newRow < col && 0 <= newCol && newCol < row))
            {
                continue;
            }

            if (!visited[newRow][newCol] || maxWeights[newRow][newCol] < maxWeights[currentRow][currentCol] + abs(maze[currentRow][currentCol] - maze[newRow][newCol]))
            {
                visited[newRow][newCol] = true;
                maxWeights[newRow][newCol] = maxWeights[currentRow][currentCol] + abs(maze[currentRow][currentCol] - maze[newRow][newCol]);
                q.push({newRow, newCol});
            }
        }
    }
    return maxWeights[col - 1][row - 1];
}

int main()
{
    int row, col;
    int **maze;
    cin >> row >> col;

    maze = new int *[col];

    for (int i = 0; i < col; i++)
    {
        maze[i] = new int[row];
    }

    for (int i = 0; i < col; i++)
    {
        for (int j = 0; j < row; j++)
        {
            cin >> maze[i][j];
        }
    }

    int k = find_maximum_cost(maze, row, col);

    cout << k << endl;

    for (int idx = 0; idx < col; idx++)
    {
        delete[] maze[idx];
    }

    delete[] maze;

    return 0;
}
