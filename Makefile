rebuild:
	make clean && make build

build:
	./node_modules/.bin/webpack

clean:
	rm -rf ./build