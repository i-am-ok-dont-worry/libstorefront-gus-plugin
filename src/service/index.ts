import { inject, injectable } from 'inversify';
import { GusInfoDao } from '../dao';
import { CorporateInfo } from '../types';
import {
    AbstractStore,
    CheckoutService,
    HttpStatus,
    IOCContainer,
    LibstorefrontInnerState, PaymentDetails
} from '@grupakmk/libstorefront';
import { transformCorporateInfoToShippingData } from '../utils/transform-corporate-info';

@injectable()
export class GusInfoService {

    /**
     * Returns corporate info by taxvat nunber
     * @param taxvat
     */
    public async getCorporateInfo (taxvat: string): Promise<CorporateInfo & PaymentDetails> {
        try {
            const response = await this.gusInfoDao.getCorporateInfo(taxvat);
            if (response && response.result && response.resultCode === HttpStatus.OK) {
                if (response.result instanceof Array && response.result.length > 0) {
                    const [data] = response.result;
                    const mapped = await transformCorporateInfoToShippingData(data);
                    await IOCContainer.get(CheckoutService).setPaymentDetails(mapped);

                    return { ...response.result[0], ...mapped };
                }
                else {
                    return response.result.length === 0 ? null : response.result;
                }
            }
        } catch (e) {
            return null;
        }
    }

    public constructor(
        @inject(GusInfoDao) private gusInfoDao: GusInfoDao,
        @inject(AbstractStore) private store: AbstractStore<LibstorefrontInnerState>
    ) {}
}
