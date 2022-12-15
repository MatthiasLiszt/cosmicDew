echo 'const increment = `' > ./data/increment.js
cat ./data/increment.thue >> ./data/increment.js
echo '`;' >> ./data/increment.js
echo 'const incrementDebug = `' > ./data/incrementDebug.js
cat ./data/increment.debug >> ./data/incrementDebug.js
echo '`;' >> data/incrementDebug.js
echo 'const solarsys2 = `' > ./data/solarsys2.js
cat ./data/solarsys2.thue >> ./data/solarsys2.js
echo '`;' >> ./data/solarsys2.js
echo "you can now open autogen.html in your browser to see the a sample of the message"
