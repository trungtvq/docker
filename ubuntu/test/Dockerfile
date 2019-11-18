FROM ubuntu:18.04
RUN mkdir /mymount
ENV HOME /etc/letsencrypt
RUN mkdir /etc/letsencrypt \
&& chown $(id -u):$(id -g) /etc/letsencrypt -R \
&& touch ahihi \
&& mkdir lala \
&& touch /etc/letsencrypt/useenvworkinginruncmdout \
&& cp ahihi /etc/letsencrypt 
ENTRYPOINT ls $HOME && cp -rf $HOME /mymount/ 
