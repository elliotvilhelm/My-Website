import Engine

engine = Engine.IZII()
class Node:
	def __init__(self, state):
		self.state = state
		self.value = engine.evaluate_state(state)
		self.children = []


def gen_tree(root, depth):
	if depth is 0:
		return
	else:
		all_moves = engine.get_all_moves_at_state(root.state)
		nodes = []
		for move in all_moves:
			n = Node(engine.run_move_at_state(root.state, move))
			root.children.append(n)
		if root.children is None:
			return
		for child in root.children:
			gen_tree(child, depth-1)

def print_tree(root):
	if root is None:
		return
	else:
		print("root: ", root.value)
		if root.children is None:
			return
		for i in range(len(root.children)):
			# pass
			print('chiild at:  :  ', i, " :  ", root.children[i].value)
		print("****")
		for i in root.children:
			print_tree(i)
		print("----------")


init_board = "xxxxxxxxxx" \
			"xxxxxxxxxx" \
			"xrnbqkbnrx" \
			"xppppppppx" \
			"xoooooooox" \
			"xoooooooox" \
			"xoooooooox" \
			"xoooooooox" \
			"xPPPPPPPPx" \
			"xRNBQKBNRx" \
			"xxxxxxxxxx" \
			"xxxxxxxxxx"

x = list()
init_board = list(init_board)
init_state = [init_board, 0, -1, 0, 1, [0, 0, 0, 0], init_board.index('K'), init_board.index('k')]

head = Node(init_state)
gen_tree(head, 4)

print_tree(head)










