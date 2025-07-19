'use client';
import { useEffect, useState } from 'react';

interface Dashboard {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  userId: number;
}

interface ApiResponse {
  cursorId: string;
  totalCount: number;
  dashboards: Dashboard[];
}

export default function Home() {
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    async function fetchColors() {
      try {
        const response = await fetch(
          'https://sp-taskify-api.vercel.app/16-7/dashboards?navigationMethod=infiniteScroll&page=1&size=10',
        );
        const data: ApiResponse = await response.json();

        if (data.dashboards) {
          const colorList = data.dashboards.map((dashboard) => dashboard.color);
          setColors(colorList);
        }
      } catch (error) {
        console.error('api error:', error);
      }
    }
    fetchColors();
  }, []);

  return (
    <div>
      {colors.map((color, index) => (
        <div key={index} className={`text-[${color}]`}>
          이게 아이콘 색깔
        </div>
      ))}
    </div>
  );
}
