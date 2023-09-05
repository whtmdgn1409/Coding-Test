#include <iostream>
#include <algorithm>
using namespace std;
int rope[100001];
int main(void)
{
  int N;
  int current;
  int max;
  cin >> N;

  for (int i = 0; i < N; i++)
  {
    cin >> rope[i];
  }
  sort(rope, rope + N);
  max = rope[N - 1];
  for (int i = N - 1; i >= 0; i--)
  {
    current = rope[i] * (N - i);
    if (current > max)
    {
      max = current;
    }
  }
  cout << max;
}