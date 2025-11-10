import os
from PIL import Image

# Configuration (change as needed)
MAX_SIZE = 1024  # Max width or height in pixels (reduced from 1280)
IMAGE_EXTENSIONS = {'.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG', '.WEBP'}

# Directories to process
TARGET_DIRS = [
    os.path.join('public', 'events'),
    os.path.join('public', 'images'),
]

def is_image_file(filename):
    ext = os.path.splitext(filename)[1]
    return ext.lower() in IMAGE_EXTENSIONS

def process_image(filepath):
    try:
        with Image.open(filepath) as img:
            # Convert to RGB (for PNGs or WEBPs with alpha, flatten to white background)
            if img.mode in ('RGBA', 'LA'):
                background = Image.new('RGB', img.size, (255, 255, 255))
                background.paste(img, mask=img.split()[-1])
                img = background
            else:
                img = img.convert('RGB')

            # (Removed: Rotate portrait images to landscape)

            # Resize if needed
            img.thumbnail((MAX_SIZE, MAX_SIZE), Image.LANCZOS)

            # Always save as .webp (overwrite original, even if already .webp)
            new_filepath = os.path.splitext(filepath)[0] + '.webp'
            img.save(new_filepath, 'webp', quality=85, method=6)

        # Remove the original file if not already .webp or if the new file is a different path
        if os.path.abspath(filepath) != os.path.abspath(new_filepath):
            os.remove(filepath)
            print(f"Optimized and replaced: {filepath} -> {new_filepath}")
        else:
            print(f"Optimized in-place: {filepath}")
    except Exception as e:
        print(f"Failed to process {filepath}: {e}")

def process_directory(root_dir):
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            filepath = os.path.join(dirpath, filename)
            if is_image_file(filename):
                process_image(filepath)

if __name__ == '__main__':
    for target in TARGET_DIRS:
        if os.path.exists(target):
            process_directory(target)
        else:
            print(f"Directory not found: {target}")
