export interface IAnnouncementRequest {
  brand: string;
  model: string;
  manufacture_year: string;
  fuel: string;
  mileage: number;
  color: string;
  price_fipe: string;
  price: string;
  description: string;
}

export interface ICommentRequest {
  comment: string;
}

export interface IAnnouncementUpdateRequest {
  brand?: string;
  model?: string;
  manufacture_year?: string;
  fuel?: string;
  mileage?: number;
  color?: string;
  price_fipe?: string;
  price?: string;
  description?: string;
  is_active?: boolean;
}

export interface IQuery {
  page?: string;
  brand?: string;
  model?: string;
  manufacture_year?: string;
  fuel?: string;
  color?: string;
  priceMin?: string;
  priceMax?: string;
  mileageMin?: string;
  mileageMax?: string;
}
