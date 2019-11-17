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

clean:
	echo "Cleaning..."
	GOPATH=$(GOPATH) GOBIN=$(GOBIN) go clean 
	printf "Clean done!"

##run-kafka: run
run-kafka:
	docker run --rm -d \
		--name kafka \
		-p 7203:7203 \
		-p 9092:9092 \
		-e KAFKA_ADVERTISED_HOST_NAME=trungtvq.ddns.net \
		-e ZOOKEEPER_IP=trungtvq.ddns.net \
		ches/kafka
#run-zoo: run
run-zoo:
	docker run -d --restart always --name zookeeper -p 2181:2181 jplock/zookeeper


##create-topic: Create new topic
create-topic:
	echo "Installing dependencies..."
	docker run --rm trungtvq/kafka kafka-topics.sh --create --topic aaa --replication-factor 1 --partitions 1 --bootstrap-server trungtvq.ddns.net
	echo "Done dependencies..."

##list-topic: List all of topic
list-topic:
	docker run --rm trungtvq/kafka kafka-topics.sh --list --bootstrap-server trungtvq.ddns.net:


##create-consumer: Create consumer
create-consumer:
	docker run --rm trungtvq/kafka kafka-console-consumer.sh --topic tTopic --from-beginning --bootstrap-server trungtvq.ddns.net:9092

##create-publisher: Create publisher
create-publisher:
	docker run --rm --interactive trungtvq/kafka kafka-console-producer.sh --topic tTest --broker-list trungtvq.ddns.net:9092

# go test ./... -coverprofile=cover.out && go tool cover -html=cover.out

