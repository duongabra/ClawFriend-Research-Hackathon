#!/usr/bin/env python3
"""
Generate 5 MP3 files from script-vi.txt using Edge TTS (Vietnamese).
Run: pip install edge-tts   then   python gen-audio.py
Output: audio/script_01.mp3 ... script_05.mp3
"""
import re
import os
import asyncio
import edge_tts

SCRIPT_FILE = os.path.join(os.path.dirname(__file__), "script-vi.txt")
OUT_DIR = os.path.join(os.path.dirname(__file__), "audio")
# Vietnamese voices (run: edge-tts --list-voices | grep vi-VN)
VOICE = "vi-VN-HoaiMyNeural"   # female, natural
# VOICE = "vi-VN-NamMinhNeural"  # male
# VOICE = "vi-VN-AnNeural"       # male, alternative


def extract_segments(path: str) -> list[str]:
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    # Split by --- SEGMENT ... --- and keep only content (no headers/comments)
    parts = re.split(r"---\s*SEGMENT\s+\d+[^\n]*---\s*\n", text)
    segments = []
    for p in parts:
        p = p.strip()
        if not p or p.startswith("#"):
            continue
        # Remove comment lines and stop at --- END OF SCRIPT ---
        lines = []
        for line in p.split("\n"):
            line = line.strip()
            if line.startswith("#"):
                continue
            if "--- END" in line or "END OF SCRIPT" in line:
                break
            lines.append(line)
        block = " ".join(lines)
        if len(block) > 20:  # skip tiny fragments
            segments.append(block)
    return segments


async def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    segments = extract_segments(SCRIPT_FILE)
    if len(segments) < 5:
        print(f"Expected 5 segments, got {len(segments)}. Check script-vi.txt.")
        return
    for i, text in enumerate(segments[:5], start=1):
        out_path = os.path.join(OUT_DIR, f"script_{i:02d}.mp3")
        print(f"Generating {out_path} ... ({len(text)} chars)")
        communicate = edge_tts.Communicate(text, VOICE)
        await communicate.save(out_path)
    print("Done. Files in:", OUT_DIR)


if __name__ == "__main__":
    asyncio.run(main())
