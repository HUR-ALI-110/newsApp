// NewsDetail.js
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import React from "react";

const NewsDetail = ({ isOpen, closeModal, news }) => {
  return (
    <Transition appear show={isOpen}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-35" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-out duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative md:w-[500px] w-[40  0px] h-auto max-w-lg max-h-[90vh] overflow-y-hidden transform rounded-2xl bg-white p-4 text-left shadow-xl transition-all flex flex-col gap-5">
                <button
                  type="button"
                  className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  onClick={closeModal}
                >
                  <Image
                    src="/close.svg"
                    alt="close"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>
                <div className="relative flex mt-10 justify-center items-center w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                  <img
                    src={news && news.urlToImage}
                    alt="news image"
                    width={350}
                    height={25}
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <h2 className="font-semibold mt-8 px-4 text-center  text-xl capitalize">
                    {news && news.title}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-4">
                    <div className="flex justify-start gap-5 w-full text-left">
                      <p className="text-black-100 font-normal">
                        {news && news.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default NewsDetail;
