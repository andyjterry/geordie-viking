#!/bin/bash

# Directories to search for .vue files
directories=("components" "pages")

# Iterate over directories
for dir in "${directories[@]}"; do
    # Find .vue files and populate them
    find "$dir" -type f -name '*.vue' -exec bash -c '
        file="$1"
        file_name=$(basename "$file" .vue)

        # Check if the file is empty
        if [ ! -s "$file" ]; then
            echo "<template>
  <div></div>
</template>

<script>
export default {
  name: '\''$file_name'\'',
  // component options here
};
</script>" > "$file"
        fi
    ' bash {} \;
done
