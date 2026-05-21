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

export interface BlogsApiResponse {
  status: number;
  message: string;
  data: Blog[];
}
