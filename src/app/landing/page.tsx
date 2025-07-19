import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Header Navigation */}
      <header className='bg-black'>
        <nav className='py-4'>
          <div className='flex justify-between items-center px-[100px]'>
            {/* Logo */}
            <div className='flex items-center'>
              <a href='/landing' className='flex items-center hover:opacity-80 transition-opacity'>
                <Image
                  src='/images/landing_logo.svg'
                  alt='Taskify 로고'
                  width={120}
                  height={40}
                  className='h-auto'
                />
              </a>
            </div>

            {/* Navigation Links */}
            <div className='hidden md:flex items-center space-x-8'>
              <a href='#' className='text-gray-300 hover:text-white'>
                로그인
              </a>
              <a href='#' className='text-gray-300 hover:text-white'>
                회원가입
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className='bg-black py-20'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          {/* Main Image */}
          <div className='flex justify-center mb-12'>
            <div className='bg-primary rounded-2xl p-8 max-w-2xl'>
              <Image
                src='/images/desktop.png'
                alt='Taskify 팀 협업 일러스트'
                width={722}
                height={423}
                className='w-full h-auto'
                priority
              />
            </div>
          </div>

          {/* Title */}
          <h1 className='mb-8'>
            <span
              className='font-bold text-[76px] text-white'
              style={{ fontFamily: 'Pretendard', fontWeight: 700 }}
            >
              새로운 일정 관리{' '}
            </span>
            <span
              className='font-bold text-[90px] text-[#5534DA] leading-[65px]'
              style={{ fontFamily: 'Montserrat', fontWeight: 700 }}
            >
              Taskify
            </span>
          </h1>

          {/* CTA Button */}
          <button className='bg-[#5534DA] hover:bg-[#4427b8] text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors'>
            로그인하기
          </button>
        </div>
      </section>

      {/* Point 1 Section */}
      <section className='bg-black py-20'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='w-[1200px] h-[600px] bg-[#171717] rounded-lg mx-auto relative overflow-hidden'>
            <div className='flex items-center h-full px-12'>
              {/* Text Content - Left */}
              <div className='flex flex-col justify-center w-1/2'>
                <div className='text-[#5534DA] text-lg font-medium mb-4'>Point 1</div>
                <h2 className='text-4xl font-bold mb-6 text-white'>
                  일의 <span className='text-[#5534DA]'>우선순위</span>를<br />
                  관리하세요
                </h2>
              </div>
            </div>

            {/* Dashboard Image - Absolute positioned to bottom right */}
            <div className='absolute bottom-0 right-0'>
              <Image
                src='/images/landing1.svg'
                alt='칸반 보드 대시보드'
                width={594}
                height={448}
                className='rounded-tl-lg'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Point 2 Section */}
      <section className='bg-black py-20'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='w-[1200px] h-[600px] bg-[#171717] rounded-lg mx-auto relative overflow-hidden'>
            <div className='flex items-center h-full px-12'>
              {/* Text Content - Right */}
              <div className='flex flex-col justify-center w-1/2 ml-auto'>
                <div className='text-[#5534DA] text-lg font-medium mb-4'>Point 2</div>
                <h2 className='text-4xl font-bold mb-6 text-white'>
                  해야 할 일을
                  <br />
                  <span className='text-[#5534DA]'>등록</span>하세요
                </h2>
              </div>
            </div>

            {/* Task Form Image - Absolute positioned to bottom left with left margin */}
            <div className='absolute bottom-0 left-27'>
              <Image
                src='/images/landing2.svg'
                alt='할일 생성 폼'
                width={436}
                height={502}
                className='rounded-tr-lg'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Settings Section */}
      <section className='bg-black py-20'>
        <div className='max-w-7xl mx-auto px-4'>
          {/* Section Title */}
          <div className='text-left mb-16'>
            <h2 className='text-4xl font-bold text-white'>
              생산성을 높이는 다양한 설정 <span className='text-[#5534DA]'>⚡</span>
            </h2>
          </div>

          {/* Settings Grid - 3개의 개별 박스 */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Dashboard Setting */}
            <div className='w-[378px] h-[384px] bg-[#5C5C5C] rounded-lg overflow-hidden flex flex-col'>
              <div className='flex-1 p-6'>
                <div className='rounded-lg p-4 h-full flex items-center justify-center'>
                  <Image
                    src='/images/landing3.svg'
                    alt='대시보드 설정 UI'
                    width={300}
                    height={124}
                    className='w-full h-auto'
                  />
                </div>
              </div>
              <div className='bg-[#171717] p-6'>
                <h3 className='text-xl font-bold mb-3 text-white'>대시보드 설정</h3>
                <p className='text-gray-400 text-sm'>대시보드 사진과 이름을 변경할 수 있어요.</p>
              </div>
            </div>

            {/* Invitation */}
            <div className='w-[378px] h-[384px] bg-[#5C5C5C] rounded-lg overflow-hidden flex flex-col'>
              <div className='flex-1 p-1'>
                <div className='rounded-lg p-4 h-full flex items-center justify-center'>
                  <Image
                    src='/images/landing4.svg'
                    alt='초대 관리 UI'
                    width={300}
                    height={220}
                    className=''
                  />
                </div>
              </div>
              <div className='bg-[#171717] p-6'>
                <h3 className='text-xl font-bold mb-3 text-white'>초대</h3>
                <p className='text-gray-400 text-sm'>새로운 팀원을 초대할 수 있어요.</p>
              </div>
            </div>

            {/* Members */}
            <div className='w-[378px] h-[384px] bg-[#5C5C5C] rounded-lg overflow-hidden flex flex-col'>
              <div className='flex-1 p-6'>
                <div className='bg-white rounded-lg p-4 h-full flex items-center justify-center'>
                  <Image
                    src='/images/landing5.svg'
                    alt='구성원 관리 UI'
                    width={320}
                    height={220}
                    className='w-full h-auto'
                  />
                </div>
              </div>
              <div className='bg-[#171717] p-6'>
                <h3 className='text-xl font-bold mb-3 text-white'>구성원</h3>
                <p className='text-gray-400 text-sm'>구성원을 초대하고 내보낼 수 있어요.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-black py-8'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex justify-between items-center'>
            {/* Left - Copyright */}
            <div className='text-gray-400 text-sm'>©codeit - 2023</div>

            {/* Center - Links */}
            <div className='flex space-x-6'>
              <a href='#' className='text-gray-400 hover:text-white text-sm'>
                Privacy Policy
              </a>
              <a href='#' className='text-gray-400 hover:text-white text-sm'>
                FAQ
              </a>
            </div>

            {/* Right - Social Icons */}
            <div className='flex space-x-4'>
              <a href='#' className='text-gray-400 hover:text-white'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
                </svg>
              </a>
              <a href='#' className='text-gray-400 hover:text-white'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                </svg>
              </a>
              <a href='#' className='text-gray-400 hover:text-white'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
