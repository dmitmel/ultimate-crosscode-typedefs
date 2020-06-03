# Generating module declaration files

## 1. Get a list of all modules along with their dependencies

Execute in the console in a **clean game instance without mods or CCLoader**:

```javascript
require('fs').writeFileSync(
  'modules.json',
  JSON.stringify(
    Object.entries(ig.modules)
      .map(([name, { requires }]) => [name, requires])
      .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {}),
  ),
);
```

## 2. Create missing declaration files

This will take some time, `nl` is used as a counter. As of 1.2.0-5 game has 568 modules.

```bash
jq --raw-output 'keys[]' path/to/modules.json | while IFS= read -r module; do
  echo "$module"
  jq --raw-output --arg id "$module" '.[$id][] | "// requires \(.)"' \
    path/to/modules.json > "$module.d.ts"
done | nl
```

### 3. Generate the index file

```bash
jq --raw-output 'keys[] | "/// <reference path=\"./\(.).d.ts\" />"' path/to/modules.json > __all__.d.ts
```
