#!/bin/bash  

#  only need to run this script with the command (do not type the #)
#  bash backup-www-zip.sh
# best in cloud 9 to just right click this file and select run
# change the /www below to any folder you wish to specifically backup



zip -r my-www.zip ~/workspace/www


echo "Right-click my-www.zip  --> select download to backup your workspace to windows"
