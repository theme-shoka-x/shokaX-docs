# Glossary

This section provides the TypeScript API for ShokaX for reference. Below is the corresponding legend (glossary):

|                           Badge                           |    Content     |                            Meaning                            |
| :--------------------------------------------------------: | :------------: | :------------------------------------------------------------: |
|   <Badge type="tip" text="Experimental" vertical="middle" />   | Experimental API |       This API is currently experimental and might be removed or changed in the future        |
|   <Badge type="tip" text="In Development" vertical="middle" />   | In Development API |     This API will be available in a planned release but is not currently accessible at the time of this document update      |
| <Badge type="warning" text="Non-Standard" vertical="middle" /> | Non-Standard API | This API is not a standard interface in the ShokaX plan; it's supported by a third party |
| <Badge type="danger" text="Deprecated" vertical="middle" />  |  Deprecated API  |            This API is deprecated and will be removed in a future version             |

Available partitions of ShokaX API:

|     Name      |          Meaning           | Available Partitions                  |
| :-----------: | :-----------------------: | :----------------------------------- |
| `hexo script` |  Hexo-generated script APIs | scripts directory and plugins         |
|   `page ts`   | Frontend TypeScript API    | JS/TS after app.js injection           |
|  `head api`   |   Basic Frontend API        | Any code running on the frontend      |
|   `plugin`    | Plugin and ShokaX Utils API | Within plugin scripts                  |
