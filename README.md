# newman-reporter-json-light
Newman reporter which mimics the built-in JSON reporter but only includes a few key items in the report.

This was created to get around the issue mentioned here:
https://github.com/postmanlabs/newman/issues/935

The report object contains the following items:  

**run***  

Schema followed by the reporter:  
```json
{
    "run": {
    ...
    }        
}
```
