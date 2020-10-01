cd react-version || exit
sudo npm run build
cd .. || exit
sudo netlify deploy --prod
