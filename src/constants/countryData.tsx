// countryData.ts
export interface Country {
  code: string;
  name: string;
  dial_code: string;
}

export const countryData: Country[] = [
  { code: 'US', name: 'United States', dial_code: '+1' },
  { code: 'IN', name: 'India', dial_code: '+91' },
  { code: 'GB', name: 'United Kingdom', dial_code: '+44' },
  { code: 'AU', name: 'Australia', dial_code: '+61' },
  { code: 'CA', name: 'Canada', dial_code: '+1' },
  // Add more countries as needed
];

export const FormatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(price);
};
