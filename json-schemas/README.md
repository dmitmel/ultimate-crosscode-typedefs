## Usage in VSCode

These schemas can be used in VSCode to provide autocompletion and validation while editing
CrossCode-related files. For example, for PatchSteps files, you can the following snippet into
`settings.json`:

```json
    "json.schemas": [
        {
            "fileMatch": [
                "*.json.patch"
            ],
            "url": "https://raw.githubusercontent.com/dmitmel/ultimate-crosscode-typedefs/master/json-schemas/patch-steps.json"
        }
    ]
```

For PatchSteps it is also recommended to setup an association for the extension `.json.patch`:

```json
    "files.associations": {
        "*.json.patch": "json"
    },
```
