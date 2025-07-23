import { createContext, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from '../../../public/icon/X.svg';
import MeatballIcon from '../../../public/icon/meatballIcon.svg';
import MeatballDropdown from '../dropdown/MeatballDropdown';
import { Button } from '../button/Button';

type ModalPropsType = {
  title?: string;
  meatballMenu?: boolean;
  children: React.ReactNode | null;
  modalButtonType: 'none' | 'one' | 'two';
  modalOpenSetState: (state: boolean) => void;
};

export const ModalPropsContext = createContext<ModalPropsType>({
  title: undefined,
  meatballMenu: undefined,
  children: null,
  modalButtonType: 'none',
  modalOpenSetState: () => {},
});

export const ModalRoot = ({
  modalOpenState,
  modalOpenSetState,
  children,
  title,
  meatballMenu,
  modalButtonType,
}: {
  modalOpenState: boolean;
  modalOpenSetState: (state: boolean) => void;
  children: React.ReactNode;
  title?: string;
  meatballMenu: boolean;
  modalButtonType: 'none' | 'one' | 'two';
}) => {
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById('portal'));
  }, [modalOpenState]);

  return (
    <>
      <ModalPropsContext.Provider
        value={{ title, meatballMenu, children, modalOpenSetState, modalButtonType }}
      >
        {modalOpenState && portalElement ? createPortal(<ModalWrapper />, portalElement) : null}
      </ModalPropsContext.Provider>
    </>
  );
};

const ModalWrapper = () => {
  return (
    <>
      <ModalBackdrop />
      <ModalWindow />
    </>
  );
};

const ModalBackdrop = () => {
  const { modalOpenSetState } = useContext(ModalPropsContext);
  return (
    <div
      className='absolute top-0 left-0 w-screen h-screen bg-black/30 backdrop-blur-xs z-[1]'
      onClick={() => modalOpenSetState(false)}
    />
  );
};

const ModalWindow = () => {
  const { title, meatballMenu, children, modalOpenSetState, modalButtonType } =
    useContext(ModalPropsContext);

  return (
    <div className='w-screen h-screen grid place-content-center'>
      <div className={`w-fit h-fit p-6 bg-white rounded-lg z-[2]`}>
        <div className='flex items-center gap-6'>
          <h1 className='text-xl font-bold'>{title}</h1>
          {meatballMenu && (
            <MeatballDropdown.Root>
              <MeatballDropdown.Trigger>
                <MeatballIcon />
              </MeatballDropdown.Trigger>
              <MeatballDropdown.Content>
                <MeatballDropdown.Item onClick={() => console.log('수정하기')}>
                  수정하기
                </MeatballDropdown.Item>
                <MeatballDropdown.Item onClick={() => console.log('삭제하기')}>
                  삭제하기
                </MeatballDropdown.Item>
              </MeatballDropdown.Content>
            </MeatballDropdown.Root>
          )}
          <button className='cursor-pointer' onClick={() => modalOpenSetState(false)}>
            <CloseIcon />
          </button>
        </div>
        {children}
        <div>
          <ModalButtons modalButtonType={modalButtonType} />
        </div>
      </div>
    </div>
  );
};

const ModalButtons = ({ modalButtonType }: { modalButtonType: 'none' | 'one' | 'two' }) => {
  switch (modalButtonType) {
    case 'none':
      return null;
    case 'one':
      return (
        <Button type='primary' className='w-full'>
          확인
        </Button>
      );
    case 'two':
      return (
        <>
          <Button type='outline'>취소</Button>
          <Button type='primary' className='ml-2'>
            확인
          </Button>
        </>
      );
  }
};
