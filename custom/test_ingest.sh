#!/bin/bash
# usage: ./ingest.sh

source .env

docker run --rm \
	-v ${PWD}/venv:/venv \
	-v ${PWD}/pipeline.yml:/tmp/pipeline.yml \
	acryldata/datahub-actions:${ACTIONS_VERSION} \
	/venv/bin/python -m datahub --debug ingest -c /tmp/pipeline.yml
