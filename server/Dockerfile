ARG CODE_VERSION=latest
FROM alpine:${CODE_VERSION}
ENV data /data
ENV mydata /home/trung/data
WORKDIR ${data}
ADD . $data
RUN apk add --update \
        bash \
        curl \
    && rm -rf /var/cache/apk/*

