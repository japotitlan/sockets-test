import socket

def move_left():
    print("Moving left")

def move_right():
    print("Moving right")

def move_forward():
    print("Moving forward")

def move_reverse():
    print("Moving reverse")

def handle_command(command):
    if command == "left":
        move_left()
    elif command == "right":
        move_right()
    elif command == "forward":
        move_forward()
    elif command == "reverse":
        move_reverse()

# Create a socket and listen for incoming connections
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('localhost', 3000))
server_socket.listen(1)

print("Waiting for connection from Node.js application")

# Accept incoming connections and handle commands
while True:
    client_socket, _ = server_socket.accept()
    print("Connected to Node.js application")
    while True:
        command = client_socket.recv(1024)
        if not command:
            break
        handle_command(command.decode())
    client_socket.close()
    print("Connection closed by client")
    break