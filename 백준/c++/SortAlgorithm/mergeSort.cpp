#include <iostream>
using namespace std;

void merge(int *index, int left, int mid, int right)
{
  int *sorted = new int[right - left + 1];
  int i, j, k;
  i = left;
  j = mid + 1;
  k = 0;

  while (i <= mid && j <= right)
  {
    if (index[i] <= index[j])
      sorted[k++] = index[i++];
    else
      sorted[k++] = index[j++];
  }

  if (i > mid)
  {
    while (j <= right)
      sorted[k++] = index[j++];
  }
  else
  {
    while (i <= mid)
      sorted[k++] = index[i++];
  }

  for (i = left, k = 0; i <= right; i++, k++)
  {
    index[i] = sorted[k];
    cout << sorted[k] << " ";
  }
  cout << endl;

  delete[] sorted;
};
void mergeSort(int *index, int left, int right)
{
  if (left < right)
  {
    int mid = (left + right) / 2;
    mergeSort(index, left, mid);
    mergeSort(index, mid + 1, right);
    merge(index, left, mid, right);
  }
}

int main()
{
  int size;
  int *input;
  cin >> size;
  input = new int[size];
  for (int idx = 0; idx < size; idx++)
  {
    cin >> input[idx];
  }

  mergeSort(input, 0, size - 1);
  for (int idx = 0; idx < size; idx++)
  {
    cout << input[idx] << " ";
  }
  cout << endl;

  delete[] input;
  return 0;
}
