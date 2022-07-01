import json
import requests

from credential import cookies, headers


def create_ingestion(url: str, ingestion: dict):
    response = requests.post(
        url='{}/api/v2/graphql'.format(url),
        cookies=cookies,
        headers=headers,
        json=ingestion,
        verify=False
    )
    print(response.json())


if __name__ == '__main__':
    with open('recipe.json') as f:
        data = json.load(f)

    url = data["sink"]["config"]["server"][:-5]
    databases = data["source"]["config"]["database"]
    assert isinstance(databases, list)
    for database in databases:
        recipe = data.copy()
        recipe["source"]["config"]["database"] = database
        recipe = json.dumps(recipe)
        ingestion = {
            'operationName': 'createIngestionSource',
            'variables': {
                'input': {
                    'type': 'hive',
                    'name': database,
                    'config': {
                        'recipe': recipe,
                        'executorId': 'default',
                    },
                    'schedule': {
                        'interval': '0 18 * * *',
                        'timezone': 'Asia/Shanghai',
                    },
                },
            },
            'query': 'mutation createIngestionSource($input: UpdateIngestionSourceInput!) {\n  createIngestionSource(input: $input)\n}\n',
        }
        create_ingestion(url, ingestion)
