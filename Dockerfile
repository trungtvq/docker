#docker run --rm -iv${PWD}:/exports trungtvq/cert:latest
FROM ubuntu:18.04
ENV exports /exports
RUN mkdir ${exports} \
&& apt-get update \
&& apt-get install -y git
ENV imports /imports
WORKDIR ${imports}
COPY . ${imports}
RUN git clone https://github.com/certbot/certbot.git \
&& ./certbot/letsencrypt-auto certonly --manual --preferred-challenges=dns --email trungtvq.co@gmail.com --server https://acme-v02.api.letsencrypt.org/directory --agree-tos -d *.phim.monster -d phim.monster -n || true
ENTRYPOINT ./certbot/letsencrypt-auto certonly --manual --preferred-challenges=dns --email trungtvq.co@gmail.com --server https://acme-v02.api.letsencrypt.org/directory --agree-tos && chown $(id -u):$(id -g) /etc/letsencrypt -R && cp -rf /etc/letsencrypt/archive ${exports}
