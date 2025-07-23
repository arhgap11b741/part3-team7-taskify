import { useState } from 'react';
import Modal from '../Modal';
import { EditColumn, deleteColumn } from '@/api/dashboard/apis';
interface Props {
  columnId: number;
  onClose: (didSucceed: boolean) => void;
}

const ColumnEditModal = ({ columnId, onClose }: Props) => {
  const [columnName, setColumnName] = useState<string>('');
  //const [isDuplicate, setIsDuplicate] = useState(false);

  const inputChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setColumnName(value);
  };

  const putColumnTitle = async () => {
    console.log(typeof columnId, 'dd');
    try {
      const updatedColumn = await EditColumn({ columnId: columnId, title: columnName });
      console.log('수정된 컬럼:', updatedColumn);
      onClose(true); // 성공했으므로 true 전달
    } catch (err) {
      console.error('생성 실패:', err);
      onClose(false);
    }
  };

  const DeleteColumnhandler = async () => {
    try {
      await deleteColumn({ columnId: columnId });
      onClose(true);
    } catch (err) {
      console.error('삭제 실패:', err);
      onClose(false);
    }
  };

  return (
    <Modal onClose={() => onClose(false)}>
      <h2 className='text-xl font-bold mb-4'>컬럼 관리</h2>
      <label className='block mb-2 text-sm font-medium text-gray-700'>이름</label>
      <input
        type='text'
        value={columnName}
        onChange={(e) => inputChangeValue(e)}
        placeholder='대시보드 이름'
        className={`w-full px-3 py-2 border border-[#D9D9D9] rounded-md `}
      />
      <div className='flex justify-center gap-[8px] mt-[24px]'>
        <button
          className='px-4 py-2 w-1/2 bg-white border border-[#D9D9D9] rounded hover:bg-[#e4e4e4]'
          onClick={() => {
            DeleteColumnhandler();
          }}
        >
          삭제
        </button>
        <button
          className='px-4 py-2 w-1/2 bg-[#5534DA] hover:bg-[#3a3063] text-white rounded'
          onClick={putColumnTitle}
        >
          변경
        </button>
      </div>
    </Modal>
  );
};
export default ColumnEditModal;
