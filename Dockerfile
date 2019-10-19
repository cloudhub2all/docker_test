o# use a node base image
FROM node:7-onbuild

# set maintainer
LABEL maintainer "echo2deep@gmail.com"

# set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:7800 || exit 1

# tell docker what port to expose
EXPOSE 7800
