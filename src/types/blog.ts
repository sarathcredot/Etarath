export interface Blog {
  _id: string;
  title: string;
  content: string;
  imgUrl: string;
  tags: string[];
  category: string;
  date: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface BlogsPaginatedData {
  data: Blog[];
  total: number;
  page: number | null;
  limit: number | null;
  hasMore: boolean;
}

export interface BlogsApiResponse {
  status: number;
  message: string;
  data: Blog[] | BlogsPaginatedData;
}

export interface BlogCategoryRecord {
  categories: string[];
}

export interface BlogTagRecord {
  tags: string[];
}

export interface BlogCategoriesApiResponse {
  status: number;
  message: string;
  data: BlogCategoryRecord[] | string[];
}

export interface BlogTagsApiResponse {
  status: number;
  message: string;
  data: BlogTagRecord[] | string[];
}
