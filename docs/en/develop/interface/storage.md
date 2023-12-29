## ShokaX Storage API

Available Partition: `page ts` (Accessible on the frontend)

## $storage Series

### $storage.set

Sets key-value pair data in local storage.

#### Parameters

- `key: string`: Key name to set
- `value: string`: Value to set for the key

#### Return Type

- `void`

### $storage.get

Retrieves key-value pair data from local storage.

#### Parameters

- `key: string`: Key name to retrieve

#### Return Type

- `string`

### $storage.del

Deletes key-value pair data from local storage.

#### Parameters

- `key: string`: Key name to delete

#### Return Type

- `void`
