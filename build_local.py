from bs4 import BeautifulSoup
import os
from pathlib import Path
from shutil import copy2

# this script is used to convert all the links in the app to local links so that the app can be run locally by opening the index.html file

def append_index_to_directory_links(href, base_path, file_path):
    """
    Appends 'index.html' to href if it points to a directory or lacks a file extension.
    """
    # If the href already points to a file with an extension, no need to modify it.
    if os.path.splitext(href)[1]:
        return href

    # Calculate the absolute path and then check if it's a directory or lacks an extension
    absolute_path = (base_path / href.lstrip('/')).resolve()

    # If it's a directory or the path doesn't have an extension, append 'index.html'
    if absolute_path.is_dir() or not os.path.splitext(absolute_path)[1]:
        # Check if we're dealing with a root-relative path
        if href.startswith('/'):
            return os.path.join(href, 'index.html').replace(os.path.sep, '/')
        else:
            relative_path = os.path.relpath(absolute_path, start=file_path.parent)
            return os.path.join(relative_path, 'index.html').replace(os.path.sep, '/')

    return href

def make_href_and_src_relative(html_content, file_path, base_path):
    """
    Converts absolute hrefs in <a> and <link> tags, and src in <img> tags to relative paths.
    Also appends 'index.html' to directory links in <a> tags.
    """
    soup = BeautifulSoup(html_content, 'html.parser')
    # Process <img> tags for 'src' attribute
    for img_tag in soup.find_all('img', src=True):
        src = img_tag['src']
        if src.startswith(('http:', 'https:', '#')):
            continue
        absolute_path = base_path / src.lstrip('/')
        relative_path = os.path.relpath(absolute_path, start=file_path.parent)
        img_tag['src'] = relative_path

    # Process <a> and <link> tags for 'href' attribute
    for tag in soup.find_all(['a', 'link'], href=True):
        href = tag['href']
        if href.startswith(('http:', 'https:', '#')):
            continue
        href = append_index_to_directory_links(href, base_path, file_path)
        absolute_path = base_path / href.lstrip('/')
        relative_path = os.path.relpath(absolute_path, start=file_path.parent)
        tag['href'] = relative_path

    return str(soup)

def process_files(src_dir, dest_dir):
    """
    Processes the files in the source directory, makes hrefs and srcs relative,
    and copies them to the destination directory using BeautifulSoup.
    """
    base_path = Path(src_dir)
    for root, dirs, files in os.walk(src_dir):
        for name in files:
            src_file_path = Path(root) / name
            dest_file_path = Path(dest_dir) / src_file_path.relative_to(src_dir)

            dest_file_path.parent.mkdir(parents=True, exist_ok=True)

            if src_file_path.suffix == '.html':
                with open(src_file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                modified_content = make_href_and_src_relative(content, src_file_path, base_path)
                with open(dest_file_path, 'w', encoding='utf-8') as f:
                    f.write(modified_content)
            else:
                copy2(src_file_path, dest_file_path)

src_directory = 'dist'
dest_directory = 'local'

process_files(src_directory, dest_directory)
