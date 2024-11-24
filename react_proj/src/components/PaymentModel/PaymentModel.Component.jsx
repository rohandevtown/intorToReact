import React from 'react'
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

const PaymentModel = ({setIsOpen, isOpen, price}) => {
 function close() {
    setIsOpen(false)
  }

  const launchRazorPay= () => {
    let options = {
        key: "rzp_test_Peqp8LAjpok1Ek",
        amount: price*100,
        currency: "INR",
        name: "Rohan's Book My Show Clone",
        decrition: "Movie purchase or rental",
        image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler: () => {
            setIsOpen(false);
            alert("Payment Sucessfull")
        },
        theme: {color: "#c4242d"}
    };

    let razorPay = window.Razorpay(options)
    razorPay.open()
  }

  return <>
     <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-red/5 p-6 bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-black">
               Please make a payment
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-black/50">
                Hello please click on the below button to make a payment
              </p>
              <div className="mt-4">
                <Button
                  className=" mr-5 inline-flex items-center gap-2 rounded-md bg-red-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-red-700"
                  onClick={launchRazorPay}
                >
                  Pay ${price}
                </Button>

                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-red-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-red-700"
                  onClick={close}
                >
                 Cancel Payment
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
  </>
}

export default PaymentModel