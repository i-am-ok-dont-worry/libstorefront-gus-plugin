## GUS plugin
Plugin adds functionality for fetching corporate info from GUS API.

Plugin has access to all lsf functionality including IOC container. Dependencies
can be rebound according to plugin needs.

## Usage
Plugin exposes service `GUSInfoService` that is injected into IOC container.
Get a corporate info from service:
```js
const service = LSF.get<GusInfoService>(GusInfoService);
const info = await service.getCorporateInfo('131232332');
```

Plugin also sets `paymentDetails` part of checkout state when used.

## Test plugin
Plugin must be tested in isolation. Unit tests can be performed via jest framework
in `/tests/test.ts` file.
Template includes by default mocked LocalStorage object.

## Integration test
Run integration test to see plugin usage:
```shell script
npm run test-integration
```

this will run `webpack-dev-server` on port `9005`.
