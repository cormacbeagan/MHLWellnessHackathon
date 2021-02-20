# MHLWellnessHackathon
Chrome extension

## Development
Clone repo 

```
npm install
```

Start webpack
```
npm start
```

Load extension in `chrome://extensions/` by selecting Load unpacked and pointing to the `dist/` folder.

## Using Vader
```js
const input = 'VADER is very smart, handsome, and funny';
const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(input);
console.log('Short sample', intensity);
```
