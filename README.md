# search_items

## Установка пакетов

```
yarn install
```

### Локальный запуск проекта

```
yarn dev
```

### Собрать билд проекта

```
yarn build
```

## Docker

### Собрать образ

```
docker build -t search_items .
```

### Запустить образ

```
docker run -p 8000:80 -it --name search_items search_items
```
