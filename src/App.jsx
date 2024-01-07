import React from 'react';

// Modal component
const Modal = ({ closeModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md w-full md:w-96 max-w-md md:max-w-full">
        <button onClick={closeModal} className="mb-3 ml-auto items-end text-black px-4 rounded-md">
          x
        </button>
        <p className="text-2xl">Doğru cevappp ben de seni çok SEVİYORUM</p>
        <img src="https://i.pinimg.com/originals/42/87/0a/42870a087538cd624d7cd7b81993bead.jpg" className="w-full md:w-64 mx-auto mt-3" alt="" />
      </div>
    </div>
  );
};

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="relative w-full h-screen bg-no-repeat bg-cover wrapper" style={{ backgroundImage: 'url(https://wallpapersmug.com/download/1920x1080/cfca13/hearts-shapes-glow-minima-pattern.jpg)' }}>
        <h1 className="text-white text-4xl bg-opacity-50 w-auto h-16 text-center"></h1>
        <div className="w-auto h-16 mx-auto mt-32 item-center">
          <h1 className="mint text-5xl md:text-7xl">BENİ SEVİYOR MUSUN</h1>
          <div className="item-center mt-16 space-x-8 md:space-x-28">
            <button onClick={openModal} className="mx-auto text-4xl md:text-8xl purples">
              EVET
            </button>
            <button
              className="mx-auto items-center text-4xl md:text-7xl grays no-btn hover:opacity-0 duration-300 hover:cursor-default duration-300"
            >
              HAYIR
            </button>
          </div>
        </div>
      </div>

      {/* Render the modal if isModalOpen is true */}
      {isModalOpen && <Modal closeModal={closeModal} />}
    </>
  );
}

export default App;
