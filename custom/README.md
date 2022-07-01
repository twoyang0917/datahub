```bash
# Freeze to specified version defined in env file.
source .env
```

# Install
```bash
yum install -y cyrus-sasl-devel
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh

pip install --upgrade pip wheel setuptools
pip install acryl-datahub
pip install acryl-datahub[hive]==${DATAHUB_VERSION}
pip install acryl-datahub-actions==${ACTIONS_VERSION}

cd /data/datahub/custom; mkdir venv; chown 101:102 venv
docker run --rm -it \
    -v ${PWD}/venv:/venv \
    acryldata/datahub-actions:${ACTIONS_VERSION} sh
python -m venv --copies /venv
. /venv/bin/activate
export DATAHUB_VERSION=0.8.39
pip install acryl-datahub[hive]==${DATAHUB_VERSION}
```

# Start
```bash
docker-compose -p datahub up -d
datahub docker check
```

# Ingestion
+ test ingestion
```bash
docker run --rm \
    -v ${PWD}/venv:/venv \
    -v ${PWD}/pipeline.yml:/tmp/pipeline.yml \
    acryldata/datahub-actions:${ACTIONS_VERSION} \
    /venv/bin/python -m datahub --debug ingest -c /tmp/pipeline.yml
```

+ create ingestion on WebUI
```bash
# get your cookies & headers via chrome browser. save to credential.py
# https://curlconverter.com/

# change endpoint url and recipe.json

python ingestions.py
```

# Backup
```bash
docker run --rm \
    --network="datahub_network" \
    --user 0 \
    -e DB_DUMP_TARGET=/db \
    -e DB_DUMP_SAFECHARS=true \
    -e DB_USER=root \
    -e DB_PASS=datahub \
    -e DB_SERVER=mysql \
    -e DB_PORT=3306 \
    -e DB_DUMP_CRON="36 14 * * *" \
    -v ${HOME}/datahub/backup/mysql:/db \
    databack/mysql-backup
```

# RestoreIndices
https://datahubproject.io/docs/how/restore-indices

```bash
# https://datahubproject.io/docs/docker/datahub-upgrade
docker run --rm \
    --env-file .env \
    --network="datahub_network" \
    acryldata/datahub-upgrade:${DATAHUB_VERSION} \
    -u RestoreIndices
```

# Upgrade
```bash
datahub docker nuke --keep-data
```

# Destory
```bash
# https://datahubproject.io/docs/quickstart#resetting-datahub
datahub docker nuke
```
