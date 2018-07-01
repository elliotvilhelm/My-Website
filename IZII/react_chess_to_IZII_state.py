from utils import RF_sq64, sq64_to_sq120, print_board


def react_chess_board_to_IZII_board(board):
    if board is None:
        exit()
    print("board in react_chess_board  |", board, "|  ")
    izii_board = ["x"] * 120
    pieces = board.split(',')

    for p in pieces:
        # print("pp", p)
        piece_with_RF = p.split('@')
        # print("look: ", piece_with_RF)
        piece = piece_with_RF[0]
        RF = piece_with_RF[1]
        sq64 = RF_sq64(RF[0], RF[1])
        sq120 = sq64_to_sq120(sq64)
        izii_board[sq120] = piece
    return str(izii_board)







