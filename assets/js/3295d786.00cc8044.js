"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9277],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||s;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3228:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(7462),r=n(3366),s=(n(7294),n(4137)),o=["components"],i={title:"Using transformers",sidebar_label:"Using transformers",slug:"/metadata-ingestion/transformers",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/transformers.md"},l="Using transformers",p={unversionedId:"metadata-ingestion/transformers",id:"metadata-ingestion/transformers",isDocsHomePage:!1,title:"Using transformers",description:"What\u2019s a transformer?",source:"@site/genDocs/metadata-ingestion/transformers.md",sourceDirName:"metadata-ingestion",slug:"/metadata-ingestion/transformers",permalink:"/docs/metadata-ingestion/transformers",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/transformers.md",tags:[],version:"current",frontMatter:{title:"Using transformers",sidebar_label:"Using transformers",slug:"/metadata-ingestion/transformers",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/transformers.md"},sidebar:"overviewSidebar",previous:{title:"S3",permalink:"/docs/metadata-ingestion/source_docs/s3"},next:{title:"JaaS Authentication",permalink:"/docs/how/auth/jaas"}},d=[{value:"What\u2019s a transformer?",id:"whats-a-transformer",children:[],level:2},{value:"Provided transformers",id:"provided-transformers",children:[{value:"Adding a set of tags",id:"adding-a-set-of-tags",children:[],level:3},{value:"Change owners",id:"change-owners",children:[],level:3},{value:"Setting ownership by dataset urn pattern",id:"setting-ownership-by-dataset-urn-pattern",children:[],level:3},{value:"Mark dataset status",id:"mark-dataset-status",children:[],level:3},{value:"Add dataset browse paths",id:"add-dataset-browse-paths",children:[],level:3}],level:2},{value:"Writing a custom transformer from scratch",id:"writing-a-custom-transformer-from-scratch",children:[{value:"Defining a config",id:"defining-a-config",children:[],level:3},{value:"Defining the transformer",id:"defining-the-transformer",children:[],level:3},{value:"More Sophistication: Making calls to DataHub during Transformation",id:"more-sophistication-making-calls-to-datahub-during-transformation",children:[{value:"Advanced Use-Case: Patching Owners",id:"advanced-use-case-patching-owners",children:[],level:4}],level:3},{value:"Installing the package",id:"installing-the-package",children:[],level:3},{value:"Running the transform",id:"running-the-transform",children:[],level:3}],level:2}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"using-transformers"},"Using transformers"),(0,s.kt)("h2",{id:"whats-a-transformer"},"What\u2019s a transformer?"),(0,s.kt)("p",null,"Oftentimes we want to modify metadata before it reaches the ingestion sink \u2013 for instance, we might want to add custom tags, ownership, or patch some fields. A transformer allows us to do exactly these things."),(0,s.kt)("p",null,"Moreover, a transformer allows one to have fine-grained control over the metadata that\u2019s ingested without having to modify the ingestion framework's code yourself. Instead, you can write your own module that can take MCEs however you like. To configure the recipe, all that's needed is a module name as well as any arguments."),(0,s.kt)("h2",{id:"provided-transformers"},"Provided transformers"),(0,s.kt)("p",null,"Aside from the option of writing your own transformer (see below), we provide two simple transformers for the use cases of adding dataset tags and ownership information."),(0,s.kt)("h3",{id:"adding-a-set-of-tags"},"Adding a set of tags"),(0,s.kt)("p",null,"Let\u2019s suppose we\u2019d like to add a set of dataset tags. To do so, we can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"simple_add_dataset_tags")," module that\u2019s included in the ingestion framework."),(0,s.kt)("p",null,"The config, which we\u2019d append to our ingestion recipe YAML, would look like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'transformers:\n  - type: "simple_add_dataset_tags"\n    config:\n      tag_urns:\n        - "urn:li:tag:NeedsDocumentation"\n        - "urn:li:tag:Legacy"\n')),(0,s.kt)("p",null,"If you'd like to add more complex logic for assigning tags, you can use the more generic add_dataset_tags transformer, which calls a user-provided function to determine the tags for each dataset."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'transformers:\n  - type: "add_dataset_tags"\n    config:\n      get_tags_to_add: "<your_module>.<your_function>"\n')),(0,s.kt)("p",null,"Then define your function to return a list of TagAssociationClass tags, for example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'import logging\n\nimport datahub.emitter.mce_builder as builder\nfrom datahub.metadata.schema_classes import (\n    DatasetSnapshotClass,\n    TagAssociationClass\n)\n\ndef custom_tags(current: DatasetSnapshotClass) -> List[TagAssociationClass]:\n    """ Returns tags to associate to a dataset depending on custom logic\n\n    This function receives a DatasetSnapshotClass, performs custom logic and returns\n    a list of TagAssociationClass-wrapped tags.\n\n    Args:\n        current (DatasetSnapshotClass): Single DatasetSnapshotClass object\n\n    Returns:\n        List of TagAssociationClass objects.\n    """\n\n    tag_strings = []\n\n    ### Add custom logic here\n    tag_strings.append(\'custom1\')\n    tag_strings.append(\'custom2\')\n    \n    tag_strings = [builder.make_tag_urn(tag=n) for n in tag_strings]\n    tags = [TagAssociationClass(tag=tag) for tag in tag_strings]\n    \n    logging.info(f"Tagging dataset {current.urn} with {tag_strings}.")\n    return tags\n')),(0,s.kt)("h3",{id:"change-owners"},"Change owners"),(0,s.kt)("p",null,"If we wanted to clear existing owners sent by ingestion source we can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"simple_remove_dataset_ownership")," module which removes all owners sent by the ingestion source."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'transformers:\n  - type: "simple_remove_dataset_ownership"\n    config: {}\n')),(0,s.kt)("p",null,"The main use case of ",(0,s.kt)("inlineCode",{parentName:"p"},"simple_remove_dataset_ownership")," is to remove incorrect owners present in the source. You can use it along with the next ",(0,s.kt)("inlineCode",{parentName:"p"},"simple_add_dataset_ownership")," to remove wrong owners and add the correct ones."),(0,s.kt)("p",null,"Let\u2019s suppose we\u2019d like to append a series of users who we know to own a dataset but aren't detected during normal ingestion. To do so, we can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"simple_add_dataset_ownership")," module that\u2019s included in the ingestion framework."),(0,s.kt)("p",null,"The config, which we\u2019d append to our ingestion recipe YAML, would look like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'transformers:\n  - type: "simple_add_dataset_ownership"\n    config:\n      owner_urns:\n        - "urn:li:corpuser:username1"\n        - "urn:li:corpuser:username2"\n        - "urn:li:corpGroup:groupname"\n      ownership_type: "PRODUCER"\n')),(0,s.kt)("p",null,"Note ",(0,s.kt)("inlineCode",{parentName:"p"},"ownership_type")," is an optional field with ",(0,s.kt)("inlineCode",{parentName:"p"},"DATAOWNER")," as default value."),(0,s.kt)("h3",{id:"setting-ownership-by-dataset-urn-pattern"},"Setting ownership by dataset urn pattern"),(0,s.kt)("p",null,"Let\u2019s suppose we\u2019d like to append a series of users who we know to own a different dataset from a data source but aren't detected during normal ingestion. To do so, we can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"pattern_add_dataset_ownership")," module that\u2019s included in the ingestion framework.  This will match the pattern to ",(0,s.kt)("inlineCode",{parentName:"p"},"urn")," of the dataset and assign the respective owners."),(0,s.kt)("p",null,"The config, which we\u2019d append to our ingestion recipe YAML, would look like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'transformers:\n  - type: "pattern_add_dataset_ownership"\n    config:\n      owner_pattern:\n        rules:\n          ".*example1.*": ["urn:li:corpuser:username1"]\n          ".*example2.*": ["urn:li:corpuser:username2"]\n      ownership_type: "DEVELOPER"\n')),(0,s.kt)("p",null,"Note ",(0,s.kt)("inlineCode",{parentName:"p"},"ownership_type")," is an optional field with ",(0,s.kt)("inlineCode",{parentName:"p"},"DATAOWNER")," as default value."),(0,s.kt)("p",null,"If you'd like to add more complex logic for assigning ownership, you can use the more generic ",(0,s.kt)("inlineCode",{parentName:"p"},"add_dataset_ownership")," transformer, which calls a user-provided function to determine the ownership of each dataset."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'transformers:\n  - type: "add_dataset_ownership"\n    config:\n      get_owners_to_add: "<your_module>.<your_function>"\n')),(0,s.kt)("p",null,"Note that whatever owners you send via this will overwrite the owners present in the UI."),(0,s.kt)("h3",{id:"mark-dataset-status"},"Mark dataset status"),(0,s.kt)("p",null,"If you would like to stop a dataset from appearing in the UI, then you need to mark the status of the dataset as removed. You can use this transformer after filtering for the specific datasets that you want to mark as removed."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'transformers:\n  - type: "mark_dataset_status"\n    config:\n      removed: true\n')),(0,s.kt)("h3",{id:"add-dataset-browse-paths"},"Add dataset browse paths"),(0,s.kt)("p",null,"If you would like to add to browse paths of dataset can use this transformer. There are 3 optional variables that you can use to get information from the dataset ",(0,s.kt)("inlineCode",{parentName:"p"},"urn"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"ENV: env passed (default: prod)"),(0,s.kt)("li",{parentName:"ul"},"PLATFORM: ",(0,s.kt)("inlineCode",{parentName:"li"},"mysql"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"postgres")," or different platform supported by datahub"),(0,s.kt)("li",{parentName:"ul"},"DATASET_PARTS: slash separated parts of dataset name. e.g. ",(0,s.kt)("inlineCode",{parentName:"li"},"database_name/schema_name/[table_name]")," for postgres")),(0,s.kt)("p",null,"e.g. this can be used to create browse paths like ",(0,s.kt)("inlineCode",{parentName:"p"},"/prod/postgres/superset/public/logs")," for table ",(0,s.kt)("inlineCode",{parentName:"p"},"superset.public.logs")," in a ",(0,s.kt)("inlineCode",{parentName:"p"},"postgres")," database"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'transformers:\n  - type: "set_dataset_browse_path"\n    config:\n      path_templates:\n        - /ENV/PLATFORM/DATASET_PARTS \n')),(0,s.kt)("p",null,"If you don't want the environment but wanted to add something static in the browse path like the database instance name you can use this."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'transformers:\n  - type: "set_dataset_browse_path"\n    config:\n      path_templates:\n        - /PLATFORM/marketing_db/DATASET_PARTS \n')),(0,s.kt)("p",null,"It will create browse path like ",(0,s.kt)("inlineCode",{parentName:"p"},"/mysql/marketing_db/sales/orders")," for a table ",(0,s.kt)("inlineCode",{parentName:"p"},"sales.orders")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"mysql")," database instance."),(0,s.kt)("p",null,"You can use this to add multiple browse paths. Different people might know the same data assets by different names."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'transformers:\n  - type: "set_dataset_browse_path"\n    config:\n      path_templates:\n        - /PLATFORM/marketing_db/DATASET_PARTS\n        - /data_warehouse/DATASET_PARTS\n')),(0,s.kt)("p",null,"This will add 2 browse paths like ",(0,s.kt)("inlineCode",{parentName:"p"},"/mysql/marketing_db/sales/orders")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"/data_warehouse/sales/orders")," for a table ",(0,s.kt)("inlineCode",{parentName:"p"},"sales.orders")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"mysql")," database instance."),(0,s.kt)("p",null,"Default behaviour of the transform is to add new browse paths, you can optionally set ",(0,s.kt)("inlineCode",{parentName:"p"},"replace_existing: True")," so\nthe transform becomes a ",(0,s.kt)("em",{parentName:"p"},"set")," operation instead of an ",(0,s.kt)("em",{parentName:"p"},"append"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'transformers:\n  - type: "set_dataset_browse_path"\n    config:\n      replace_existing: True\n      path_templates:\n        - /ENV/PLATFORM/DATASET_PARTS\n')),(0,s.kt)("p",null,"In this case, the resulting dataset will have only 1 browse path, the one from the transform."),(0,s.kt)("p",null,"Note that whatever browse paths you send via this will overwrite the browse paths present in the UI."),(0,s.kt)("h2",{id:"writing-a-custom-transformer-from-scratch"},"Writing a custom transformer from scratch"),(0,s.kt)("p",null,"In the above couple of examples, we use classes that have already been implemented in the ingestion framework. However, it\u2019s common for more advanced cases to pop up where custom code is required, for instance if you'd like to utilize conditional logic or rewrite properties. In such cases, we can add our own modules and define the arguments it takes as a custom transformer."),(0,s.kt)("p",null,"As an example, suppose we want to append a set of ownership fields to our metadata that are dependent upon an external source \u2013 for instance, an API endpoint or file \u2013 rather than a preset list like above. In this case, we can set a JSON file as an argument to our custom config, and our transformer will read this file and append the included ownership classes to all our MCEs (if you'd like, you could also include filtering logic for specific MCEs)."),(0,s.kt)("p",null,"Our JSON file might look like the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "urn:li:corpuser:athos",\n  "urn:li:corpuser:porthos",\n  "urn:li:corpuser:aramis",\n  "urn:li:corpGroup:the_three_musketeers"\n]\n')),(0,s.kt)("h3",{id:"defining-a-config"},"Defining a config"),(0,s.kt)("p",null,"To get started, we\u2019ll initiate an ",(0,s.kt)("inlineCode",{parentName:"p"},"AddCustomOwnershipConfig")," class that inherits from ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/configuration/common.py"},(0,s.kt)("inlineCode",{parentName:"a"},"datahub.configuration.common.ConfigModel")),". The sole parameter will be an ",(0,s.kt)("inlineCode",{parentName:"p"},"owners_json")," which expects a path to a JSON file containing a list of owner URNs. This will go in a file called ",(0,s.kt)("inlineCode",{parentName:"p"},"custom_transform_example.py"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"from datahub.configuration.common import ConfigModel\n\nclass AddCustomOwnershipConfig(ConfigModel):\n    owners_json: str\n")),(0,s.kt)("h3",{id:"defining-the-transformer"},"Defining the transformer"),(0,s.kt)("p",null,"Next, we\u2019ll define the transformer itself, which must inherit from ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/api/transform.py"},(0,s.kt)("inlineCode",{parentName:"a"},"datahub.ingestion.api.transform.Transformer")),". First, let's get all our imports in:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# append these to the start of custom_transform_example.py\n\nimport json\nfrom typing import Iterable\n\n# for constructing URNs\nimport datahub.emitter.mce_builder as builder\n# for typing the config model\nfrom datahub.configuration.common import ConfigModel\n# for typing context and records\nfrom datahub.ingestion.api.common import PipelineContext, RecordEnvelope\n# base transformer class\nfrom datahub.ingestion.api.transform import Transformer\n# MCE-related classes\nfrom datahub.metadata.schema_classes import (\n    DatasetSnapshotClass,\n    MetadataChangeEventClass,\n    OwnerClass,\n    OwnershipClass,\n    OwnershipTypeClass,\n)\n")),(0,s.kt)("p",null,"Next, let's define the base scaffolding for the class:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'# append this to the end of custom_transform_example.py\n\nclass AddCustomOwnership(Transformer):\n    """Transformer that adds owners to datasets according to a callback function."""\n\n    # context param to generate run metadata such as a run ID\n    ctx: PipelineContext\n    # as defined in the previous block\n    config: AddCustomOwnershipConfig\n\n    def __init__(self, config: AddCustomOwnershipConfig, ctx: PipelineContext):\n        self.ctx = ctx\n        self.config = config\n\n        self.owners = [\n            OwnerClass(owner=owner, type=OwnershipTypeClass.DATAOWNER)\n            for owner in json.loads(config.owner_file)\n        ]\n')),(0,s.kt)("p",null,"A transformer must have two functions: a ",(0,s.kt)("inlineCode",{parentName:"p"},"create()")," function for initialization and a ",(0,s.kt)("inlineCode",{parentName:"p"},"transform()")," function for executing the transformation."),(0,s.kt)("p",null,"Let's begin by adding a ",(0,s.kt)("inlineCode",{parentName:"p"},"create()")," method for parsing our configuration dictionary:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'# add this as a function of AddCustomOwnership\n\n@classmethod\ndef create(cls, config_dict: dict, ctx: PipelineContext) -> "AddCustomOwnership":\n    config = AddCustomOwnershipConfig.parse_obj(config_dict)\n    return cls(config, ctx)\n')),(0,s.kt)("p",null,"Now we need to add a ",(0,s.kt)("inlineCode",{parentName:"p"},"transform()")," method that does the work of adding our custom ownership classes. This method will take an MCE as input and output the transformed MCE. Let's offload the processing of each MCE to another ",(0,s.kt)("inlineCode",{parentName:"p"},"transform_one()")," class."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# add this as a function of AddCustomOwnership\n\ndef transform(\n    self, record_envelopes: Iterable[RecordEnvelope]\n) -> Iterable[RecordEnvelope]:\n\n    # loop over envelopes\n    for envelope in record_envelopes:\n\n        # if envelope is an MCE, add the ownership classes\n        if isinstance(envelope.record, MetadataChangeEventClass):\n            envelope.record = self.transform_one(envelope.record)\n        yield envelope\n")),(0,s.kt)("p",null,"With the main ",(0,s.kt)("inlineCode",{parentName:"p"},"transform()")," method set up, the ",(0,s.kt)("inlineCode",{parentName:"p"},"transform_one()")," method will take a single MCE and add the owners that we loaded from the JSON."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# add this as a function of AddCustomOwnership\n\ndef transform_one(self, mce: MetadataChangeEventClass) -> MetadataChangeEventClass:\n    if not isinstance(mce.proposedSnapshot, DatasetSnapshotClass):\n        return mce\n\n    owners_to_add = self.owners\n\n    if owners_to_add:\n        ownership = builder.get_or_add_aspect(\n            mce,\n            OwnershipClass(\n                owners=[],\n            ),\n        )\n        ownership.owners.extend(owners_to_add)\n\n    return mce\n")),(0,s.kt)("h3",{id:"more-sophistication-making-calls-to-datahub-during-transformation"},"More Sophistication: Making calls to DataHub during Transformation"),(0,s.kt)("p",null,"In some advanced cases, you might want to check with DataHub before performing a transformation. A good example for this might be retrieving the current set of owners of a dataset before providing the new set of owners during an ingestion process. To allow transformers to always be able to query the graph, the framework provides them access to the graph through the context object ",(0,s.kt)("inlineCode",{parentName:"p"},"ctx"),". Connectivity to the graph is automatically instantiated anytime the pipeline uses a REST sink. In case you are using the Kafka sink, you can additionally provide access to the graph by configuring it in your pipeline. "),(0,s.kt)("p",null,"Here is an example of a recipe that uses Kafka as the sink, but provides access to the graph by explicitly configuring the ",(0,s.kt)("inlineCode",{parentName:"p"},"datahub_api"),". "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: mysql\n  config: \n     # ..source configs\n     \nsink: \n  type: datahub-kafka\n  config:\n     connection:\n        bootstrap: localhost:9092\n    schema_registry_url: "http://localhost:8081"\n\ndatahub_api:\n  server: http://localhost:8080\n  # standard configs accepted by datahub rest client ... \n')),(0,s.kt)("h4",{id:"advanced-use-case-patching-owners"},"Advanced Use-Case: Patching Owners"),(0,s.kt)("p",null,"With the above capability, we can now build more powerful transformers that can check with the server-side state before issuing changes in metadata.\ne.g. Here is how the AddDatasetOwnership transformer can now support PATCH semantics by ensuring that it never deletes any owners that are stored on the server. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def transform_one(self, mce: MetadataChangeEventClass) -> MetadataChangeEventClass:\n        if not isinstance(mce.proposedSnapshot, DatasetSnapshotClass):\n            return mce\n        owners_to_add = self.config.get_owners_to_add(mce.proposedSnapshot)\n        if owners_to_add:\n            ownership = builder.get_or_add_aspect(\n                mce,\n                OwnershipClass(\n                    owners=[],\n                ),\n            )\n            ownership.owners.extend(owners_to_add)\n\n            if self.config.semantics == Semantics.PATCH:\n                assert self.ctx.graph\n                patch_ownership = AddDatasetOwnership.get_ownership_to_set(\n                    self.ctx.graph, mce.proposedSnapshot.urn, ownership\n                )\n                builder.set_aspect(\n                    mce, aspect=patch_ownership, aspect_type=OwnershipClass\n                )\n        return mce\n")),(0,s.kt)("h3",{id:"installing-the-package"},"Installing the package"),(0,s.kt)("p",null,"Now that we've defined the transformer, we need to make it visible to DataHub. The easiest way to do this is to just place it in the same directory as your recipe, in which case the module name is the same as the file \u2013 in this case, ",(0,s.kt)("inlineCode",{parentName:"p"},"custom_transform_example"),"."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Advanced: installing as a package"),"Alternatively, create a `setup.py` in the same directory as our transform script to make it visible globally. After installing this package (e.g. with `python setup.py` or `pip install -e .`), our module will be installed and importable as `custom_transform_example`.",(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from setuptools import find_packages, setup\n\nsetup(\n    name="custom_transform_example",\n    version="1.0",\n    packages=find_packages(),\n    # if you don\'t already have DataHub installed, add it under install_requires\n    # install_requires=["acryl-datahub"]\n)\n'))),(0,s.kt)("h3",{id:"running-the-transform"},"Running the transform"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'transformers:\n  - type: "custom_transform_example.AddCustomOwnership"\n    config:\n      owners_json: "<path_to_owners_json>" # the JSON file mentioned at the start\n')),(0,s.kt)("p",null,"After running ",(0,s.kt)("inlineCode",{parentName:"p"},"datahub ingest -c <path_to_recipe>"),", our MCEs will now have the following owners appended:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"owners": [\n    {\n        "owner": "urn:li:corpuser:athos",\n        "type": "DATAOWNER",\n        "source": null\n    },\n    {\n        "owner": "urn:li:corpuser:porthos",\n        "type": "DATAOWNER",\n        "source": null\n    },\n    {\n        "owner": "urn:li:corpuser:aramis",\n        "type": "DATAOWNER",\n        "source": null\n    },\n    {\n        "owner": "urn:li:corpGroup:the_three_musketeers",\n        "type": "DATAOWNER",\n        "source": null\n    },\n    // ...and any additional owners\n],\n')),(0,s.kt)("p",null,"All the files for this tutorial may be found ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/examples/transforms/"},"here"),"."))}c.isMDXComponent=!0}}]);