### reval - evaluate javascript expressions via POST requests

the inspiration for this came 
from none other than the brilliant [Guillermo Rauch](https://twitter.com/rauchg/status/1085813324992806913)

just send a POST request with an object with
an expression key:

```js
{ expression: 2 + 1 }
```

and get back a result:

```js
{ result: 3 }
```

