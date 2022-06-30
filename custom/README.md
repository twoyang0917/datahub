
> Freeze to specified version defined in env file.

source .env

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
```bash
# get your cookies & headers via chrome browser. save to credential.py
# https://curlconverter.com/

# change endpoint url and recipe.json

python ingestions.py
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
