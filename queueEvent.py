length_people = int(input())

queue = input().split(" ")

number_of_events = int(input())

for _ in range(number_of_events):
    event = input().split(" ")
    type = event[0]

    if(type == "A"):
        queue.pop(0)
        continue

    if(type == "B"):
        X = event[1]
        Y = event[2]
        for (i, e) in enumerate(queue):
            if(e == Y):
                queue.insert(i+1, X)
                break
        continue

    if(type == "C"):
        X = event[1]
        queue.insert(0, X)
        continue

print(" ".join(queue))