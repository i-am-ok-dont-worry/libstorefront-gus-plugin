import { CorporateInfo } from '../types';
import { IOCContainer, PaymentDetails } from '@grupakmk/libstorefront';
import { CountriesService } from '@grupakmk/libstorefront';

export const transformCorporateInfoToShippingData = async (data: CorporateInfo): Promise<PaymentDetails> => {
    const country = await IOCContainer.get(CountriesService).getCountryById('PL');
    const [region] = country.available_regions.filter(r => r.name.toLowerCase() === data.province.toLowerCase());
    const shippingDetails: PaymentDetails = {
        city: data.city,
        apartmentNumber: data.apartmentNumber,
        taxId: data.nip,
        zipCode: data.zipCode,
        houseNo: data.propertyNumber,
        streetAddress: data.street,
        firstName: '',
        lastName: '',
        country: 'PL',
        ...(region && { region: region.name }),
        ...(region && { region_code: region.code }),
        ...(region && { region_id: region.id }),
    };

    return shippingDetails;
};
