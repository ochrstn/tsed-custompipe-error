# tsed-custompipe-error

All changes are within `HelloWorldController.ts`

Reproduce error with:

```
curl http://localhost:8083/rest/hello-world
```

```
{
  "name": "TypeError",
  "message": "Cannot read property 'toUpperCase' of undefined",
  "status": 500,
  "errors": [],
  "stack": "TypeError: Cannot read property 'toUpperCase' of undefined\n at ParseExpressionPipe.getKey (/private/tmp/tsed-custompipe-error/node_modules/@tsed/platform-params/src/pipes/ParseExpressionPipe.ts:25:55)\n at ParseExpressionPipe.transform (/private/tmp/tsed-custompipe-error/node_modules/@tsed/platform-params/src/pipes/ParseExpressionPipe.ts:14:40)\n at /private/tmp/tsed-custompipe-error/node_modules/@tsed/platform-params/src/builder/PlatformParams.ts:65:27\n at processTicksAndRejections (internal/process/task_queues.js:95:5)\n at /private/tmp/tsed-custompipe-error/node_modules/@tsed/platform-params/src/builder/PlatformParams.ts:62:15"
}
```
