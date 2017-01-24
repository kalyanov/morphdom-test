test:
	echo 'Error: no test specified'

start:
	make build && node ./server.js

build:
	./node_modules/.bin/webpack

rebuild:
	make clean && make build

clean:
	rm -rf ./public