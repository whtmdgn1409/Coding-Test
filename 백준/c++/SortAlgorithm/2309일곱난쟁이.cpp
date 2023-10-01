#include <iostream>
#include <algorithm>
using namespace std;

int main(void)
{
  int A[10];
  int sum = 0;
  for (int i = 0; i < 9; i++)
  {
    cin >> A[i];
    sum += A[i];
  }
  sort(A, A + 9);
  for (int i = 0; i < 8; i++)
  {
    for (int j = i + 1; j < 9; j++)
    {
      if (sum - (A[i] + A[j]) == 100)
      {
        for (int z = 0; z < 9; z++)
        {
          if (z != i && z != j)
          {
            cout << A[z] << '\n';
          }
        }
        return 0;
      }
    }
  }
  return 0;
}