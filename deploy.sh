echo "Switching to branch main"
git checkout Saidbek

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* root@138.197.16.184:/var/www/bella/

echo "Done!"


