T = int(input())
for i in range(T):
    (N, B) = input().split()
    a = input().split()
    ai = []
    for j in range(int(N)):
        ai.append(int(a[j]))

    ai.sort()
    sum = 0
    numberOFHouses = 0
    for j in range(int(N)):
        sum += ai[j]
        if (sum <= int(B)): numberOFHouses += 1 
        if (sum > int(B)): break 
    print("Case #{}: {}".format(i+1, numberOFHouses))