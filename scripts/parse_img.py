import csv
from bs4 import BeautifulSoup
import glob

# this script is used to extract all the images currently used by the app

def find_image_sources(directory):
    """
    Search for all HTML files in the specified directory and its subdirectories,
    extracting src attributes of img tags.
    """
    image_sources = []

    # Search for HTML files in directory and subdirectories
    for html_file in glob.glob(f'{directory}/**/*.html', recursive=True):
        with open(html_file, 'r', encoding='utf-8') as file:
            soup = BeautifulSoup(file, 'html.parser')
            # Find all img tags and their src attributes
            for img_tag in soup.find_all('img'):
                src = img_tag.get('src')
                if src:
                    image_sources.append([html_file, src])

    return image_sources


def save_to_csv(data, output_file):
    """
    Save the list of image sources to a CSV file.
    """
    with open(output_file, 'w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow(['HTML File', 'Image Source'])
        writer.writerows(data)


def main():
    # Prompt user for directory and output file name
    directory = input("Enter the directory to search for HTML files: ")
    output_csv = input("Enter the output CSV file name: ")

    # Find image sources and save to CSV
    image_sources = find_image_sources(directory)
    save_to_csv(image_sources, output_csv)

if __name__ == "__main__":
    main()
