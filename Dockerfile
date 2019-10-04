ARG CODE_VERSION=latest
FROM alpine:${CODE_VERSION}
#RUN  \
#    apk add --update \
#        bash \
#	git \
#    && rm -rf /var/cache/apk/*
ENV data /data

WORKDIR ${data}
COPY . ${data}
RUN ["mkdir","bin"]
ADD https://releases.hashicorp.com/consul/1.6.1/consul_1.6.1_linux_amd64.zip ./
RUN ["unzip","consul_1.6.1_linux_amd64.zip","-d","bin/"]
RUN ["rm","consul_1.6.1_linux_amd64.zip"]
RUN ["chmod","+x","./consul.sh"]

EXPOSE 8500
#ENTRYPOINT ["/bin/sh"]
CMD ["./consul.sh"]
