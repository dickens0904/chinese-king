import urllib.request
import urllib.parse
import os

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

base_dir = r"c:\Users\dicke\Documents\语文小霸王\renderer\images\grade2"

for lesson in lessons:
    lesson_id = lesson["id"]
    title = lesson["title"]
    prompt = lesson["prompt"]
    
    encoded_prompt = urllib.parse.quote(prompt)
    url = f"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt={encoded_prompt}&image_size=square_hd"
    
    output_path = os.path.join(base_dir, f"lesson{lesson_id:02d}.jpg")
    
    print(f"Generating image for lesson {lesson_id}: {title}")
    
    try:
        urllib.request.urlretrieve(url, output_path)
        print(f"  Saved to: {output_path}")
    except Exception as e:
        print(f"  Error: {e}")

print("\nAll images generated!")
