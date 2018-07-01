class node:
	def __init__(self, val):
		self.val = val
		self.children = []
		self.state = 0
	def print_children(self):
		# print(self.children)
		if self.children is None:
			print("no children")
			return
		for i in range(len(self.children)):
			# pass
			print('chiild at:  :  ', i, " :  ", self.children[i].val)




# takes in a node(state)

def get_all_moves(state):
	if state.val == 0:
		return [node(2), node(5), node(6)]
	if state.val == 2 or state.val == 100:
		return [node(3), node(10)]
	if state.val == 5:
		return [node(1), node(100)]
def gen_tree(root, depth):
	if depth is 0:
		return
	else:
		root.children = get_all_moves(root)
		if root.children is None:
			return
		for child in root.children:
			gen_tree(child, depth-1)

s0 = node(0)

gen_tree(s0, 3)

# s0.print_children()
# print("cunt")
# s0.children[0].print_children()
# s0.children[1].print_children()
# s0.children[1].children[0]


def print_tree(root):
	if root is None:
		return
	else:
		print("root: ", root.val)
		if root.children == None:
			return
		for i in range(len(root.children)):
			# pass
			print('chiild at:  :  ', i, " :  ", root.children[i].val)
		print("****")
		for i in root.children:
			print_tree(i)
		print("----------")

print_tree(s0)













