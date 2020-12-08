import { LibStorefront } from '@grupakmk/libstorefront';
import { LibstorefrontPlugin } from '@grupakmk/libstorefront/dist/config/types/libstorefront-plugin';
import { GusInfoService } from './service';
import { GusInfoDao } from './dao';

/**
 * Libstorefront GUS plugin
 * adds functionality for fetching corporate info from GUS API.
 */
export const GusInfoPlugin =  ((libstorefront: LibStorefront) => {
    libstorefront.getIOCContainer().bind<GusInfoDao>(GusInfoDao).to(GusInfoDao);
    libstorefront.getIOCContainer().bind<GusInfoService>(GusInfoService).to(GusInfoService);
}) as LibstorefrontPlugin;
