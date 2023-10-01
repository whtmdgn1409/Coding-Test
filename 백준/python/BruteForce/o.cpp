#include <iostream>
#include <vector>
#include <map>
#include <algorithm>

void frequency(int size, int N, int *input)
{
  map<int, int> frequency;

  for (int idx = 0; idx < size; idx++)
  {
    frequency[input[idx]]++;
  }

  vector<pair<int, int>> sorted_frequency;
  for (const auto &entry : frequency)
  {
    sorted_frequency.push_back(entry);
  }

  sort(sorted_frequency.begin(), sorted_frequency.end(), [](const pair<int, int> &a, const pair<int, int> &b)
       {
              if (a.second == b.second) {
                  return a.first > b.first; 
              }
              return a.second > b.second; });
});

for (int i = 0; i < N; i++)
{
  cout << sorted_frequency[i].first << " ";
}
}
;