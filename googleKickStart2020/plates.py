import math

T = int(input())

for t in range(T):
    l1 = input().split()
    (n, k, p) = (int(l1[0]), int(l1[1]), int(l1[2]))
    beautyStack = []
    for i in range(n):
        inp = input().split()
        inpu = list(map(lambda x: int(x), inp))
        beautyStack.append(inpu)

    maxBeauty = 0
    for i in range(p):
        max = -math.inf
        indexValueOfStackFromWichWeAreTakingOutPlate = 0
        for j in range(n):
            marker = 0
            if(len(beautyStack[j]) != 0):
                if(max < beautyStack[j][0]):
                    max = beautyStack[j][0]
                    indexValueOfStackFromWichWeAreTakingOutPlate = j
        
        
        popped = beautyStack[indexValueOfStackFromWichWeAreTakingOutPlate].pop(0) 
        print(popped)
        maxBeauty += popped
    print("Case #{}: {}".format(t+1, maxBeauty))

    
    
 