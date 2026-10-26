import os
import sys
import json
import requests
import base64

# API Configuration
BASE_URL = "https://apihub.agnes-ai.com/v1"
API_KEY = os.getenv("AGNES_API_KEY")
MODEL = "agnes-image-2.1-flash"

# Lesson Data
lessons = [
    {"id": 1, "title": "小蝌蚪找妈妈", "prompt": "cute tadpoles swimming in a clear pond looking for their mother frog, Chinese children book illustration style, warm colors, lily pads, underwater scene, friendly cartoon characters"},
    {"id": 2, "title": "植物妈妈有办法", "prompt": "dandelion seeds flying in the wind like parachutes, burdock seeds clinging to animal fur, pea pods bursting open, nature illustration for children, colorful botanical scene"},
    {"id": 3, "title": "我是什么", "prompt": "water cycle illustration for children, rain clouds, snowflakes, hailstones, water droplets, sun shining, river flowing into ocean, educational cartoon style"},
    {"id": 4, "title": "曹冲称象", "prompt": "ancient Chinese boy Cao Chong weighing an elephant using a boat and stones, traditional Chinese painting style, elephant on a ship, water displacement concept"},
    {"id": 5, "title": "寒号鸟", "prompt": "lazy bird shivering in cold winter cliff, hardworking magpie in warm nest on a tree, snowy mountain scene, Chinese fable illustration"},
    {"id": 6, "title": "坐井观天", "prompt": "frog sitting at the bottom of a deep well looking up at small circle of sky, bird sitting on well edge looking down, Chinese idiom illustration, perspective contrast"},
    {"id": 7, "title": "大禹治水", "prompt": "ancient Chinese hero Da Yu leading people to dig rivers and channels to control flood, traditional Chinese landscape, water flowing to sea, heroic scene"},
    {"id": 8, "title": "纸船和风筝", "prompt": "cute squirrel on mountain top sending paper boat down stream to bear at mountain bottom, colorful kite flying between them, friendship story illustration"},
    {"id": 9, "title": "风娃娃", "prompt": "wind spirit child blowing windmill to irrigate rice field, helping sailboat move fast, children kite flying scene, playful wind character illustration"},
    {"id": 10, "title": "静夜思", "prompt": "ancient Chinese poet Li Bai sitting by window looking at bright moonlight, moonlight on floor like frost, nostalgic atmosphere, traditional Chinese bedroom scene"},
    {"id": 11, "title": "春晓", "prompt": "spring morning scene, person waking up in bed hearing birds singing, fallen flowers from night rain outside window, cherry blossoms, peaceful spring landscape"},
    {"id": 12, "title": "登鹳雀楼", "prompt": "ancient Chinese tower Stork Tower overlooking Yellow River, sunset behind mountains, poet climbing stairs, magnificent landscape panorama, traditional Chinese architecture"},
    {"id": 13, "title": "望庐山瀑布", "prompt": "magnificent Lushan waterfall cascading down purple misty mountains, sunlight creating rainbow, Li Bai poet gazing at waterfall, dramatic Chinese landscape painting"},
    {"id": 14, "title": "狐假虎威", "prompt": "clever fox walking proudly in front of scared tiger in forest, other animals running away in fear, Chinese fable illustration, jungle scene with deer rabbit boar"},
    {"id": 15, "title": "画鸡", "prompt": "majestic white rooster with red crown standing proudly, traditional Chinese ink painting style, rooster crowing at dawn, village houses opening doors in background"}
]

def generate_image(prompt, output_path):
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {API_KEY}"
    }
    
    data = {
        "model": MODEL,
        "prompt": prompt,
        "n": 1,
        "size": "1280x720"  # 16:9 aspect ratio
    }
    
    try:
        print(f"  Sending request to API...")
        response = requests.post(f"{BASE_URL}/images/generations", headers=headers, json=data, timeout=60)
        
        if response.status_code == 200:
            result = response.json()
            print(f"  Response received")
            
            if "data" in result and len(result["data"]) > 0:
                img_data = result["data"][0]
                
                # Check if response contains URL
                if "url" in img_data and img_data["url"]:
                    # Download image from URL
                    img_url = img_data["url"]
                    print(f"  Downloading from URL...")
                    img_response = requests.get(img_url, timeout=60)
                    if img_response.status_code == 200:
                        with open(output_path, "wb") as f:
                            f.write(img_response.content)
                        return True
                    else:
                        print(f"  Error downloading: HTTP {img_response.status_code}")
                        return False
                elif "b64_json" in img_data and img_data["b64_json"]:
                    # Decode base64
                    with open(output_path, "wb") as f:
                        f.write(base64.b64decode(img_data["b64_json"]))
                    return True
                else:
                    print(f"  Error: No URL or base64 data in response")
                    return False
            else:
                print(f"  Error: No image data in response")
                return False
        else:
            print(f"  Error: HTTP {response.status_code}")
            print(f"  Response: {response.text}")
            return False
    except Exception as e:
        print(f"  Exception: {e}")
        return False

def main():
    if not API_KEY:
        print("Error: AGNES_API_KEY environment variable not set")
        sys.exit(1)
    
    base_dir = r"c:\Users\dicke\Documents\语文小霸王\renderer\images\grade2"
    
    print(f"Generating {len(lessons)} images for Grade 2 lessons...")
    print(f"Using model: {MODEL}")
    print(f"Output directory: {base_dir}")
    print()
    
    success_count = 0
    for lesson in lessons:
        lesson_id = lesson["id"]
        title = lesson["title"]
        prompt = lesson["prompt"]
        
        output_path = os.path.join(base_dir, f"lesson{lesson_id:02d}.jpg")
        
        print(f"[{lesson_id}/{len(lessons)}] Generating image for lesson {lesson_id}: {title}")
        
        if generate_image(prompt, output_path):
            print(f"  ✓ Saved to: {output_path}")
            success_count += 1
        else:
            print(f"  ✗ Failed to generate image")
        
        print()
    
    print(f"Generation complete: {success_count}/{len(lessons)} images generated successfully")

if __name__ == "__main__":
    main()
