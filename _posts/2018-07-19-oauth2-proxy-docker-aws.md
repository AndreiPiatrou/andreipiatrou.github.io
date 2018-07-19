---
title:  "Protect your service with oauth2 proxy in docker container on AWS"
date: 2018-07-19
categories: Practices
tags: best-practices
---

## In case you need to protect your app with some oauth2 provider (facebook, github, Google) you have a couple of common options:
- implement your own oauth2 middleware (expressJS) / filter (ASP.NET MVC)
- integrate any suitable library that provides such functionality
- use reverse proxy utility that will stage behind your service and protect it from unauthorized requests

From the title of this article you may guess that we will stick with the 3rd option since this is a most efficient and safe approach:
- no development time
- provides almost all identity provides such as (google, facebook, github)
- flexible enough to add your own providers if need
- easy to replace/remove

I was suggested to use [oauth2_proxy](https://github.com/bitly/oauth2_proxy). This is a simple reverse proxy that provides all the required functionality and also it has a pretty straightforward configuration. Here is an example:
```cfg
# oauth_config.cfg

http_address = "0.0.0.0:8080"
redirect_url = "https://your-ste.com/oauth2/callback"
upstreams = [
    "http://127.0.0.1:8081/"
]
email_domains = [
    "gmail.com"
]
client_id = "some-id"
client_secret = "some-secret"
cookie_name = "_oauth2_proxy"
cookie_secret = "XXXXXXXXXX"
```
## Inside docker
Since docker does not support running multiple services inside one container out of the box (I know this is not a best practice on docker world) to do this you need to run in `CMD` a `.sh` file that does this trick for you.
```bash
# run-multiple-services.sh

oauth2_proxy -config "./oauth_config.cfg" &
npm start # for example we are trying to start a nodejs app on 8081 port
``` 
and `Dockerfile`

```dockerfile
FROM golang

RUN curl -sL https://deb.nodesource.com/setup_9.x | bash -
RUN apt-get install -y nodejs
RUN go get -d -v github.com/bitly/oauth2_proxy
RUN go install -v github.com/bitly/oauth2_proxy

COPY . /src/
WORKDIR /src/

RUN npm install && npm rebuild

EXPOSE 8080

CMD ["bash", "./run-multiple-services.sh"]
```
That is it. Now you can deploy your app to any container-based cloud and enjoy your oauth2 authentication.
