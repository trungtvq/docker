FROM envoyproxy/envoy:latest
RUN apt-get update
COPY envoy.yaml /etc/envoy.yaml
COPY ./overlead.co/envoy-front-ssl.crt /etc/
COPY ./overlead.co/envoy-front-ssl.key /etc/
CMD /usr/local/bin/envoy -c /etc/envoy.yaml
