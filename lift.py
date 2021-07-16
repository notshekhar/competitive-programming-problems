directions = input()

FLOOR = len(directions)

counter = 0


def countSteps(i, j):
    cd = directions[i]
    if((i < j and cd == "U") or (i > j and cd == "D")):
        return 1

    if((i > j and cd == "U")):
        for k in range(i+1, FLOOR):
            if(directions[k] == "D"):
                return 2
        return 0

    if((i < j and cd == "D")):
        for k in range(0, i):
            if(directions[k] == "U"):
                return 2
        return 0


for (i, e) in enumerate(directions):
    for j in range(FLOOR):
        if(j == i):
            continue
        n = countSteps(i, j)
        counter += n

print(counter)
