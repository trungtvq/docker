wget https://releases.hashicorp.com/consul/1.6.1/consul_1.6.1_linux_amd64.zip
unzip consul_1.6.1_linux_amd64.zip 
mv consul bin/
docker-compose up -d
