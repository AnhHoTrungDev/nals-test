#build reactjs with production mode
npm run build

#Move to build folder
cd build

#Clone  index.html into 200.html
cp index.html 200.html

#start deploying via Surge
surge . nals-test.surge.sh

# sh ./deploy-surge.sh