## Зависосмости проекта
Для установки всех зависимостей используется команда npm i

## Зависимости контракта
Сначала нам нужно подтянуть все зависимости контракта из OpenZeppelin или других источников.
Если зависимости не получится нормальным образом импортировтаь в проект (как это получилось с интерфейсами Uniswap), то нужно будет просто скопировать все в папку с контрактами и импортировать уже локально.

Интерфейсы всегда хранятся в выделенной папке interfaces.

## Конфигурация
Для конфигурации проекта используется файл hardhat.config.js
Для хранения мнемонической фразы и API ключа BSC используется файл env.json

## Развертывание
Для запуска скрипта развертывания следует выполнить следующую команду:  
`npx hardhat run --network mainner ./scripts/deploy.js`

После чего вы увидите:
```
Deploying...
DADDYFEG deployed to: 0x6F9acDC17aeD5240a8f8Cf5c940247287e1828ff
```

## Верификация
Для запуска скрипта развертывания следует выполнить следующую команду:

`npx hardhat verify --network mainner {contract address} {contract parameters}`  
Так как в данном случае параметров у контракта нет, нужно будет вставить только адерс контракта