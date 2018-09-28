import os
def execute(cmd):
    os.system(cmd)
    to_return =dict()
    for filename in files:
        with open(filename, 'r') as f:
            data = f.read()
            to_return[filename] = data
    return to_return

output = execute('./classify_korean')
print (output)