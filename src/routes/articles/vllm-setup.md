---
title: vLLM Setup
date: '2026-04-09'
---

# vLLM Setup


### 1. Install System Dependencies
You need the Python 3.13 development headers so vLLM can compile its custom CUDA kernels on the fly without crashing.
```bash
sudo apt-get update
sudo apt-get install python3.13-dev
```

### 2. Create and Activate a Virtual Environment
It is always best practice to isolate your installation so it doesn't conflict with other system packages. This creates a fresh environment named `vllm-env` and activates it.
```bash
python3.13 -m venv vllm-env
source vllm-env/bin/activate
```

### 3. Install and Upgrade Required Packages
Install vLLM and make sure the Hugging Face `transformers` library is fully up to date so it knows how to handle the latest model architectures.
```bash
pip install --upgrade pip
pip install vllm
pip install --upgrade transformers
```

### 4. Launch the vLLM Server
Run your model with the tool-calling parser explicitly set for Gemma 4, and alias it so your agentic tools (like Claude Code and Openclaw) seamlessly connect.

You can also put this in a startVLLM.sh file, chmod +x startVLLM.sh, then just ./startVLLM.sh to fire it up

```bash
vllm serve cyankiwi/gemma-4-26B-A4B-it-AWQ-4bit \
 --dtype half \
 --max-model-len 131072 \
 --kv-cache-dtype fp8 \
 --gpu-memory-utilization 0.85 \
 --host 0.0.0.0 \
 --port 1234 \
 --enable-auto-tool-choice \
 --reasoning-parser gemma4 \
 --tool-call-parser gemma4 \
 --served-model-name gemma-4-26b
```

if you want to specify a config file, also add:
--chat-template ./gemma-4_think.jinja \

## To update it after the fact
Most find it easier to just make a new .env and install it fresh there, make sure it works, then blow away the old one.
If you want to try upgrading it in place:
```pip install --upgrade vllm```
