FROM openjdk:8u212-jre-alpine
RUN mkdir -p -m 777 /data 
WORKDIR /data
RUN apk add --no-cache bash curl
RUN wget http://mirrors.viethosting.com/apache/kafka/2.6.0/kafka_2.13-2.6.0.tgz
RUN tar -xzf kafka_2.13-2.6.0.tgz
WORKDIR /data/kafka_2.13-2.6.0
ENV PATH /data/kafka_2.13-2.6.0:$PATH
ENV PATH /data/kafka_2.13-2.6.0/bin:$PATH

