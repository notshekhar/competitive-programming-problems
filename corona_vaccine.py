

def main():
    N = int(input())
    for n in range(N):
        solve()

main()

def solve():
    d = int(input())
    k = int(input()) #trials
    pi = int(input())

    counter = 0
    for i in range(k):
        if(d==0):
            return counter
        counter+=1
        if(d<pi):
            d=0
        else:
            d-=pi
        pi /= 2
    
    if(d!=0): return -1
    if(d==0): return counter
    
