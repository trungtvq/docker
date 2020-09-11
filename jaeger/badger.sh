docker run \
  -e SPAN_STORAGE_TYPE=badger \
  -e BADGER_EPHEMERAL=false \
  -e BADGER_DIRECTORY_VALUE=/badger \
  -e BADGER_DIRECTORY_KEY=/badger \
  -e BADGER_CONSISTENCY=true \
  -v /data/badger:/badger \
  -p6831:6831/udp \
  -p6832:6832/udp \
  -p5775:5775/udp \
  -p5778:5778/tcp \
  -p14271:14271/tcp \
  -p14250:14250/tcp \
  -p14268:14268/tcp \
  -p14269:14269/tcp \
  -p16686:16686/tcp \
  -p16687:16687/tcp \
  -p14270:14270/tcp \
  jaegertracing/all-in-one
