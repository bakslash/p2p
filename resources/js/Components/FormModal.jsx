// FormModal.jsx
import React from 'react';
import {
    TEModal,
    TEModalDialog,
    TEModalContent,
    TEModalHeader,
    TEModalBody,
    TEModalFooter,
    TERipple,
} from "tw-elements-react";

const FormModal = ({ showModal, setShowModal }) => {
    return (
        <div className={showModal ? 'modal-full-height border border-gray-500 h-auto' : ''}>
            <TEModal show={showModal} setShow={setShowModal}>
                {/* ... (rest of your modal content) */}
                <TEModal show={showModal} setShow={setShowModal} >
        <TEModalDialog size="fullscreen">
          <TEModalContent>
          
            <TEModalHeader>
              {/* <!--Modal title--> */}
              <h4>PR Details</h4>
              {/* <!--Close button--> */}
            

            </TEModalHeader>
            {/* <!--Modal body--> */}
            <div>
            <button
    type="button"
    className="text-gray-900 focus:outline-none hover:bg-gray-400
    focus:ring-4 focus:ring-gray-500 py-1 px-4 "
    onClick={() => setShowModal(false)}
>
<svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
</button>
            </div>
        
            <TEModalBody>
            
        <form className='w-4/5 '>
        <div className="flex flex-wrap w-full mb-3">
        <div className="w-full md:w-1/3 mb-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="sub-company">
            Sub Company
        </label>
        <select className="form-select" id="sub-company" name="sub-company" required>
            <option value="" disabled selected>Select sub company</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
        </select>
        </div>
        <div className="w-full md:w-1/3 mb-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="department">
                Department
            </label>
            <select className="form-select" id="department" name="department" required>
                <option value="" disabled selected>Select a department</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
            </select>
        </div>
        <div className="w-full md:w-1/3 mb-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="purpose-of-purchase">
                Purpose of Purchase
        </label>
        <input
            type="text"
            className="form-control"
            id="purpose-of-purchase"
            name="purpose-of-purchase"
            placeholder="Purpose of Purchase"
            required
        />
        </div>
        </div>

        <div className="flex flex-wrap w-full mb-3">
            <div className="w-full md:w-1/3 mb-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
            htmlFor="vat">
            Urgency
        </label>
        <select className="form-select" id="vat" name="vat" required>
            <option value="" disabled selected>Select Urgency</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
        </select>
    </div>
    <div className="w-full md:w-1/3 mb-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
        htmlFor="point-of-delivery">
            Point of delivery(Office)
        </label>
        <select className="form-select" id="point-of-delivery" name="point-of-delivery" required>
            <option value="" disabled selected>Select PoD</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
        </select>
        </div>
        <div className="w-full md:w-1/3 mb-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
         htmlFor="exact-location">
            Exact Location
        </label>
        <input
            type="text"
            className="form-control"
            id="exact-location"
            name="exact-location"
            placeholder="Exact Location"
            required
        />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="mb-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
         htmlFor="File-number">
            File Number
        </label>
        <input
            type="text"
            className="form-control"
            id="File-number"
            name="File-number"
            placeholder=""
            required
        />
    </div>
    <div className="mb-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="vessel">
            Vessel
        </label>
        <input
            type="text"
            className="form-control"
            id="vessel"
            name="vessel"
            placeholder=""
            required
        />
    </div>
    <div className="mb-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="voyage">
            Voyage
        </label>
        <input
            type="text"
            className="form-control"
            id="voyage"
            name="voyage"
            placeholder=""
            required
        />
    </div>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="mb-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dac0number">
            DAC Number
        </label>
        <input
            type="text"
            className="form-control"
            id="dac0number"
            name="dac0number"
            placeholder=""
            required
        />
    </div>
    <div className="mb-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="currency">
            Currency
        </label>
        <select
            className="form-select"
            id="currency"
            name="currency"
            required
        >
            <option value="" disabled selected>Select Currency</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
        </select>
    </div>
    <div className="mb-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="office">
            Office
        </label>
        <select
            className="form-select"
            id="vat"
            name="vat"
            required
        >
            <option value="" disabled selected>Select Office</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
        </select>
    </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="mb-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="purchase0catergory">
            Purchase category
        </label>
        <select
            className="form-select"
            id="purchase0catergory"
            name="purchase0catergory"
            required
        >
            <option value="" disabled selected>Select a category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
        </select>
    </div>
    <div className="mb-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="vat">
            VAT%
        </label>
        <select
            className="form-select"
            id="vat"
            name="vat"
            required
        >
            <option value="" disabled selected>Select VAT</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
        </select>
    </div>
</div>

        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
            <div className="mb-3">
                <label className="col-form-label" htmlFor="document-upload">Upload Documents</label>
                <input type="file" className="form-control" id="document-upload" name="document-upload" required />
            </div>
            <div className="mb-3">
                <label className="col-form-label" htmlFor="document-upload">Upload Documents</label>
                <input type="file" className="form-control" id="document-upload" name="document-upload" required />
            </div>
            <div className="mb-3">
                <label className="col-form-label" htmlFor="document-upload">Upload Documents</label>
                <input type="file" className="form-control" id="document-upload" name="document-upload" required />
            </div>
        </div>
       
        <div className="flex justify-end mt-3">
            <div className="mb-3">
                <button type="button" 
                className="text-gray-500 bg-green-400 border 
          border-gray-400 focus:outline-none hover:bg-gray-100
          focus:ring-4 focus:ring-gray-200 py-1 px-4"
                 onClick={() => validateForm()}>Proceed to req Items</button>
            </div>
        </div>
    </form>



                </TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded 
                  bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal 
                  text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 
                  focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200
                  close-button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </TERipple>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Save changes
                </button>
              </TERipple>
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
            </TEModal>
        </div>
    );
};

export default FormModal;
