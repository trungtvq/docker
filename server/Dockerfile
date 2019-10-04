ARG CODE_VERSION=latest
FROM alpine:${CODE_VERSION}
#RUN  \
#    apk add --update \
#        bash \
#	git \
#    && rm -rf /var/cache/apk/*
ENV data /data
ENV mydata /home/trung/data

WORKDIR ${data}
COPY . ${data}
#COPY consul /usr/local/bin/
#COPY script.sh /usr/local/bin/
#RUN ["chmod", "+x", "/usr/local/bin/script.sh"]
RUN ["chmod","+x","./bin/consul.sh"]

EXPOSE 8500
#CMD ["/usr/local/bin/script.sh"]
#ENTRYPOINT ["/bin/sh"]
CMD ["./bin/consul.sh"]
