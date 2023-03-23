# Merge Sort Ödevi

[16,21,11,8,12,22] -> Merge Sort

Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
Big-O gösterimini yazınız.

## Çözüm

### Aşamalar

1. [16,21,11] [8,12,22] -> 2. aşama
2.  [16,21] [11] [8,12] [22] -> 3. aşama
3.   [16] [21] [8] [12] [11] [22] -> 4. aşama
4.    [16,21] [8,12] [11,22] -> 5. aşama
5.     [8,12,16,21] [11,22] -> 6. aşama
6.      [8,11,12,16,21,22]

Big-O gösterimi: O(n log n)