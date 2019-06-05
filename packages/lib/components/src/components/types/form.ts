import { FormEvent } from "react";

export enum Fields {
  TYPE_OF_DELIVERY = 'typeOfDelivery',
  INVOICING_FORNAME = 'invoicingForname',
  INVOICING_SURNAME = 'invoicingSurname',
  INVOICING_COMPANY = 'invoicingCompany',
  INVOICING_VAT = 'invoicingVat',
  INVOICING_STREET = 'invoicingStreet',
  INVOICING_STREET_NO = 'invoicingStreetNo',
  INVOICING_POSTCODE = 'invoicingPostcode',
  INVOICING_CITY = 'invoicingCity',
  INVOICING_COUNTRY = 'invoicingCoutry',
  DELIVERY_FORNAME = 'deliveryForname',
  DELIVERY_SURNAME = 'deliverySurname',
  DELIVERY_STREET = 'deliveryStreet',
  DELIVERY_STREET_NO = 'deliveryStreetNo',
  DELIVERY_POSTCODE = 'deliveryPostcode',
  DELIVERY_CITY = 'deliveryCity',
  DELIVERY_COUNTRY = 'deliveryCountry',
  TERMS = 'terms',
  PERSONAL_DATA = 'personalData'
}

export type OnChange = (event: FormEvent<HTMLInputElement>, value?: any, selectedKey?: string) => void;
export type OnFieldChange = (id: any) => OnChange;