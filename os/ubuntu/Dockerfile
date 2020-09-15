FROM ubuntu:18.04 as u18
RUN apt update && apt -y upgrade &&\
        apt install -y --no-install-recommends apt-utils build-essential sudo git net-tools iputils-ping telnet
RUN apt install -y nano curl
RUN echo "#!/bin/bash" > /ping
RUN echo "ping localhost -i 10" >> /ping
RUN chmod +x /ping 
CMD ["/ping"]
