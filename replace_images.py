import pandas as pd
import json
import os

# this script is used to replace images in the app with new images and citations

csv_file_path = 'replace_images.csv'
df = pd.read_csv(csv_file_path)

json_directory_path = 'src/data/raw-cases'
output_directory_path = 'src/data/cases'

os.makedirs(output_directory_path, exist_ok=True)

modifications_by_case = df.groupby('Case').apply(lambda x: x[['Page', 'New Image', 'Citation']].to_dict('records')).to_dict()

def apply_modifications(case, modifications):
    json_file_path = os.path.join(json_directory_path, f"{case}.json")
    output_file_path = os.path.join(output_directory_path, f"{case}_modified.json")  # Change to ensure original is not overwritten

    if not os.path.exists(json_file_path):
        print(f"JSON file for {case} not found.")
        return

    with open(json_file_path, 'r') as file:
        data = json.load(file)

    for modification in modifications:
        for item in data:
            if item["id"] == str(modification["Page"]):
                item["images"] = [{"src": modification["New Image"], "caption": modification["Citation"]}]
                break

    with open(output_file_path, 'w') as file:
        json.dump(data, file, indent=4)

for case, modifications in modifications_by_case.items():
    apply_modifications(case, modifications)
