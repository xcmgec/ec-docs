# docs


## docker

```bash
docker run --name docs -d -p 3000:80 -v /root/work/ec-docs/docs/.vuepress/dist:/usr/share/nginx/html:ro -d nginx:latest
```