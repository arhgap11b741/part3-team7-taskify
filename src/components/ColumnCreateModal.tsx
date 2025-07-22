'use client';

import { useState } from 'react';
import Modal from '@/components/Modal'; // 위의 범용 모달
import { postColumn } from '@/api/dashboard/apis';

interface Props {
  onClose: (didSucceed: boolean) => void;
}

const ColumnCreateModal = ({ onClose }: Props) => {
  const [columnName, setColumnName] = useState<string>('');
const handleCreate = async () => {
    if(!columnName) {
        alert('컬럼 제목을 입력해주세요!');
        return;
    }
    try{
        const newColumn = await postColumn({title: columnName});
        console.log('생성 성공:', newColumn);
        onClose(true);
    }
}

  return (
    <Modal onClose={() => onClose(false)}>
      <div>test</div>
    </Modal>
  );
};
export default ColumnCreateModal;
