export interface IPData {
  ip: string;

  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    timezone: string;
  };

  isp: string;
}