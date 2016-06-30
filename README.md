# as-json

Returns the stdin in a formatted JSON

## Install
```npm install -g as-json```

## Usage example
Imagine you're running a command line and it returns an unformatted json.

Example:
```
wget -O - -o /dev/null https://raw.githubusercontent.com/Falci/as-json/master/not-formatted-example.json
```

Returns:
```
{"simple": "json", "formatted":false}
```

Now, simply add the `| as-json` in the flow:

```
wget -O - -o /dev/null https://raw.githubusercontent.com/Falci/as-json/master/not-formatted-example.json | as-json
```
```
{
    "simple": "json",
    "formatted": false
}```
