import { HookType, LibStorefront } from '@grupakmk/libstorefront';
import { GusInfoPlugin } from '../../src';
import { GusInfoService } from '../../src/service';

console.warn('Test suite initialized');

const LSF = new LibStorefront({
    plugins: [GusInfoPlugin]
}, 'https://api.meringer.staging.grupakmk.pl');

const service = LSF.get(GusInfoService);
service.getCorporateInfo('6570387909')
    .then(corporateInfo => {
        console.warn(`Corporate info from taxvat 6570387909: `, corporateInfo);
        console.warn('State: ', LSF.getStore().getState());
    })
    .catch(() => console.error(`Error while fetching corporate info from 6570387909`));
