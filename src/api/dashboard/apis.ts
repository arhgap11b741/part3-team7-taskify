import { apiClient } from '../auth/apiClient';

export interface Column {
  id: number;
  title: string;
  teamId: string;
  createdAt: string;
  updatedAt: string;
  dashboardId: number;
}

export interface NewColumnRequest {
  title: string;
  dashboardId: number;
}
const baseUrl = 'https://sp-taskify-api.vercel.app/16-7';

export const postColumn = async (data: NewColumnRequest): Promise<Column> => {
  try {
    const res = await apiClient.post<Column>(`${baseUrl}/columns`, data);
    return res.data;
  } catch (error: unknown) {
    console.error('🚨 대시보드 생성 실패:', error);
    throw error;
  }
};
