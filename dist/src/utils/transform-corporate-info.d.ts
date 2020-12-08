import { CorporateInfo } from '../types';
import { PaymentDetails } from '@grupakmk/libstorefront';
export declare const transformCorporateInfoToShippingData: (data: CorporateInfo) => Promise<PaymentDetails>;
