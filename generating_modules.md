# Generating module declaration files

## 1. Get a list of all modules along with their dependencies

Execute in the console in a **clean game instance without mods or CCLoader**:

```javascript
(() => {
  const fs = require('fs');
  let modules = {};
  for (let name of Object.keys(ig.modules)) {
    modules[name] = Array.from(new Set(ig.modules[name].requires));
  }
  fs.writeFileSync('modules.json', JSON.stringify(modules, null, 2) + '\n');
})();
```

## 2. Create missing declaration files

This will take some time, `nl` is used as a counter. As of 1.3.0-1 the game has 570 modules.

```bash
jq --raw-output 'keys[]' path/to/modules.json | while IFS= read -r module; do
  echo "$module"
  jq --raw-output --arg id "$module" ".[\$id][] | \"import './\\(.)';\"" \
    path/to/modules.json > "$module.d.ts"
done | nl
```

### 3. Generate the index file

```bash
jq --raw-output "keys[] | \"import './\\(.)';\"" path/to/modules.json > __all__.d.ts
```
