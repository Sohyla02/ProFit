import { cloneElement, createContext, useContext, useState } from "react"
import { HiXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";
import useOutSideClick from "../hooks/useOutSideClick";

const ModalContext = createContext()

function Modal({ children }) {
  const [openName, setOpenName] = useState("")
  const close = () => setOpenName("");
  const open = setOpenName
  return (
    <ModalContext.Provider value={{ open, close, openName }}>
      {children}
    </ModalContext.Provider>
  )
}

function Open({ opens: openWindow, children }) {
  const { open } = useContext(ModalContext)
  return (
    cloneElement(children, {
      onClick: (e) => {
        e.preventDefault()
        open(openWindow)
      }
    })
  )
}

function Window({ opens: openWindow, children }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutSideClick(close)
  if (openName !== openWindow) return null
  return (
    createPortal(
      <div className="fixed h-dvh w-full backdrop-blur-sm inset-0 bg-gray-500 bg-opacity-50 z-50 overflow-y-auto" id="my-modal">
        <div ref={ref} className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-1000 px-4 pb-4 border shadow-lg rounded-md bg-white divide-y">
          <div className="flex justify-between items-center">
            <h3 className="text-lg leading-6 font-bold text-blue-900 py-4 capitalize">{openWindow.split("-").join(" ")}</h3>
            <button onClick={close} className="text-xl font-semibold text-gray-400"><HiXMark /></button>
          </div>
          {cloneElement(children, { onCloseModal: close })}
        </div>
      </div>,
      document.body
    )
  )
}

Modal.Open = Open
Modal.Window = Window

export default Modal
