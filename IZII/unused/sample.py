rows = int(input())
cols = int(input())

lst = []

for i in range (rows):
    temp = [int(x) for x in input().split()]
    lst.append(temp)
    
def traverse(x, y, count):
    if (x < 0 or x >= len(lst)):
        return
    if (y < 0 or y >= len(lst[0])):
        return
    if (x,y) not in known and lst[x][y] == 1:
        known.add((x,y))
        count += 1
        traverse(x + 1, y, count)
        traverse(x, y + 1, count)
        traverse(x - 1, y, count)
        traverse(x, y - 1, count)
        print (count)
        return count

known = set()
maxIsland = 0
for i in range (len(lst)):
    for j in range (len(lst[0])):
        if (lst[i][j] == 1 and (i,j) not in known):
            print ("{} {}".format(i,j))
            count = traverse(i,j, 0)
            maxIsland = count if count > maxIsland else maxIsland
            
        
        

print (maxIsland)
