import { GusInfoDao } from '../dao';
import { CorporateInfo } from '../types';
import { AbstractStore, LibstorefrontInnerState } from '@grupakmk/libstorefront';
export declare class GusInfoService {
    private gusInfoDao;
    private store;
    /**
     * Returns corporate info by taxvat nunber
     * @param taxvat
     */
    getCorporateInfo(taxvat: string): Promise<CorporateInfo>;
    constructor(gusInfoDao: GusInfoDao, store: AbstractStore<LibstorefrontInnerState>);
}
