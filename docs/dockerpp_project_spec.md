# DockerPP (Working Title)

> A macro-based Dockerfile preprocessor for chaotic good devs

---

## 💡 Concept

DockerPP allows you to write `Dockerfile.pp` files with **macro-style directives** like in C:

```dockerfile
#define SERVER_CONF_PATH ./server.conf
COPY {{SERVER_CONF_PATH}} /etc/openvpn/server.conf
```

Then run:

```bash
dockerpp build -t my-image .
```

DockerPP will:
- Parse the directives
- Replace `{{MACRO}}` tokens
- Generate a clean, temporary Dockerfile
- Pipe that into `docker build`

---

## 📁 File Layout

```
project/
├── Dockerfile.pp         # Dockerfile with macros
├── dockerpp              # preprocessor script (bash)
├── build.sh              # optional wrapper
└── README.md
```

---

## 🛠️ How It Works

1. **Parses `#define` statements**
   ```dockerfile
   #define SERVER ./server.conf
   ```

2. **Replaces all `{{MACRO}}` tokens**
   ```dockerfile
   COPY {{SERVER}} /etc/openvpn/server.conf
   ```

3. **Strips `#define` lines before build**

4. **Calls**:
   ```bash
   docker build -f Dockerfile.pp.expanded .
   ```

---

## 🐍 dockerpp (v0.1: Bash Edition)

```bash
#!/usr/bin/env bash
set -e

INPUT_FILE="Dockerfile.pp"
TMP_FILE="Dockerfile.pp.expanded"

# Parse macros
declare -A macros
while IFS= read -r line; do
    if [[ "$line" =~ ^#define[[:space:]]+([A-Z0-9_]+)[[:space:]]+(.+)$ ]]; then
        macros["${BASH_REMATCH[1]}"]="${BASH_REMATCH[2]}"
    fi
done < "$INPUT_FILE"

cp "$INPUT_FILE" "$TMP_FILE"

# Replace all {{MACRO}} patterns
for key in "${!macros[@]}"; do
    val="${macros[$key]}"
    sed -i "s|{{${key}}}|${val}|g" "$TMP_FILE"
done

# Strip #define lines
sed -i '/^#define/d' "$TMP_FILE"

# Pipe to docker build
exec docker "$@" -f "$TMP_FILE"
```

---

## ✨ Future Ideas

- `#include "macros.env"` to reuse macro blocks
- `#ifdef` / `#endif` for conditional builds
- Support for `$ENV_VAR` fallbacks if not defined
- Inline environment variable interpolation (`{{VAR:-default}}`)
- `--dry-run` mode to just output the expanded Dockerfile
- Plugin system or Perl rewrite 😈

---

## 🚨 Warning

This is not officially supported by Docker.
It’s a wrapper. A heresy. A build-time beast.

And it is beautiful.

---

## 🐣 Name Ideas (better than "Docker Pee Pee")

- `dockermacros`
- `prebuild`
- `dockervars`
- `buildcraft`
- `DOCPP`
- `mdock` (macro-docker)
- `dockergenie`
- `makecontainers.sh`

---

## License

MIT or “please don’t sue me for replacing your CI logic with a Bash script.”
