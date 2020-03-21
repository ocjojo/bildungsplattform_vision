FROM debian:10-slim

WORKDIR /opt/project

RUN apt-get -qq update && apt-get install -qqy --no-install-recommends \
  ca-certificates curl unzip nano git

RUN apt-get install -y gnupg \
  && curl -sL https://deb.nodesource.com/setup_13.x | bash && apt-get install -y nodejs

# clean up
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \
  && usermod --uid 1000 www-data \
  && mkdir -p /var/www && chown 1000:1000 -R /var/www && chown 1000:1000 -R /opt/project

CMD tail -f /dev/null
