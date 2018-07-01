import sys
from move import run_move_at_state
from react_chess_to_IZII_state import react_chess_board_to_IZII_board
from search import best_move

# State = {board, turn, en pass, half move, full move, castle perms, wk sq, bk sq]}
# init_state = [init_board, 0, -1, 0, 1, [0, 0, 0, 0], init_board.index('K'), init_board.index('k')]
print("\n\nrunning test.py!\n\n")
print("")
print("")
print("")
print(sys.argv)
if sys.argv[1] == 'undefined':
    exit()

state = [0,0,0,0,0,0, 0, 0, 0]

state[0] = react_chess_board_to_IZII_board(sys.argv[1])
print("state[1]", sys.argv[1])
state[1] = int(sys.argv[2])
state[2] = int(sys.argv[3])
state[5] = [0,0,0,0] # for now
state[6] = state[0].index('K')
state[7] = state[0].index('k')
state.append(0)
state.append(0)

move = best_move(state, 2)
output = run_move_at_state(state, move)

print("--------------")
print("--------------")
print("OUTPUT:  ", output)

print("--------------")
print("--------------")

# print("state:", state)
print("--------------")
