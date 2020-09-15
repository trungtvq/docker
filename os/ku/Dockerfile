FROM ubuntu:20.04
ENV DEBIAN_FRONTEND=noninteractive
RUN apt update -y
RUN apt install -y  apt-utils build-essential sudo git net-tools iputils-ping telnet
RUN apt install -y nano curl openssh-server software-properties-common

#ssh
RUN mkdir /var/run/sshd
RUN echo 'root:root' | chpasswd
RUN sed -i 's/#*PermitRootLogin prohibit-password/PermitRootLogin yes/g' /etc/ssh/sshd_config

# SSH login fix. Otherwise user is kicked off after login
RUN sed -i 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' /etc/pam.d/sshd

ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile

RUN apt-add-repository ppa:ansible/ansible -y 
RUN apt install ansible -y
RUN echo "#!/bin/bash" > /ping
RUN echo "ping localhost -i 10" >> /ping
RUN chmod +x /ping 
CMD ["/ping"]
