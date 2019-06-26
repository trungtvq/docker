.SILENT: ;  

# Go commands
ifeq (, go)
    echo "Go not found!"
endif

# Paths
PROJECTNAME=$(shell basename "$(PWD)")
GOBIN=$(shell pwd)/bin
PROTO_PATH=$(HOME)/go/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis
args = `arg="$(filter-out $@,$(MAKECMDGOALS))" && echo $${arg:-${1}}`

help: Makefile
	echo
	echo "Choose a command run in "$(PROJECTNAME)":\n"
	sed -n 's/^##//p' $< | column -t -s ':' |  sed -e 's/^/ /'
	echo

all: deps build init run

clean:
	echo "Cleaning..."
	GOPATH=$(GOPATH) GOBIN=$(GOBIN) go clean 
	printf "Clean done!"

##run-kafka: run
	docker run -d \
		--name kafka \
		-p 7203:7203 \
		-p 9092:9092 \
		-e KAFKA_ADVERTISED_HOST_NAME=10.199.229.20 \
		-e ZOOKEEPER_IP=10.199.229.20 \
		ches/kafka

##run-zoo: run
	docker run -d \
		--name zookeeper \
		-p 2181:2181 \
		jplock/zookeeper


##create-topic: Create new topic
create-topic:
	echo "Installing dependencies..."
	docker run --rm ches/kafka kafka-topics.sh --create --topic $(topic) --replication-factor 1 --partitions 1 --zookeeper 10.199.229.20
	echo "Done dependencies..."

##list-topic: List all of topic
list-topic:
	docker run --rm ches/kafka kafka-topics.sh --list --zookeeper 10.199.229.20:2181

##run-kafka: Start kafka if it not running
run-kafka:
	docker run -d --name kafka -p 7203:7203 -p 9092:9092 -e KAFKA_ADVERTISED_HOST_NAME=10.199.229.20 -e ZOOKEEPER_IP=10.199.229.20 ches/kafka

##create-consumer: Create consumer
create-consumer:
	docker run --rm ches/kafka kafka-console-consumer.sh --topic $(topic) --from-beginning --zookeeper 10.199.229.20:2181

##create-publisher: Create publisher
create-publisher:
	docker run --rm --interactive ches/kafka kafka-console-producer.sh --topic $(topic) --broker-list 10.199.229.20:9092

# go test ./... -coverprofile=cover.out && go tool cover -html=cover.out

