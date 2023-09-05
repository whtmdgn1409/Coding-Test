#include <iostream>
#include <algorithm>
using namespace std;
int main(void)
{
  int N;
  cin >> N;

  int A[50];
  int B[50];
  int chk[50] = {
      0,
  };

  for (int i = 0; i < N; i++)
  {
    cin >> A[i];
  }
  for (int i = 0; i < N; i++)
  {
    cin >> B[i];
  }

  chk[N] = {
      0,
  };
  sort(a, a + N);
  int sum = 0;
  for (int i = 0; i < N; i++)
  {
    int tmp = 0;
    int idx = 0;
    for (int j = 0; j < N; j++)
    {
      if (tmp < B[j] && chk[j] == 0)
      {
        tmp = B[j];
        idx = j;
      }
    }
    chk[idx] = 1;
    sum += A[i] * tmp;
  }
  cout << sum;
}