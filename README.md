# docs

## dev

```bash
npm run dev
```

```bash
npm run build
```

## deploy

```bash
docker restart docs
```


```bash
docker run --name docs -d -p 3000:80 -v /root/work/ec-docs/docs/.vuepress/dist:/usr/share/nginx/html:ro -d nginx:latest
```