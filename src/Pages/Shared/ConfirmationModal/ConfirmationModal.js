import React from 'react';

const ConfirmationModal = ({ title, message, successButtonName, closeModal, modalData, successAction }) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-white shadow-xl">
                    <h3 className="font-bold text-xl text-gray-900 mb-4">{title}</h3>
                    <p className="text-gray-700 mb-6">{message}</p>
                    <div className="modal-action">
                        <label 
                            onClick={() => successAction(modalData)} 
                            htmlFor="confirmation-modal" 
                            className="btn btn-primary bg-primary hover:bg-primary-dark text-white font-medium">
                            {successButtonName}
                        </label>
                        <button 
                            onClick={closeModal} 
                            className="btn btn-outline border-2 border-gray-300 text-gray-700 hover:bg-gray-100 font-medium">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;