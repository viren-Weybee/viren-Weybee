import React from 'react';

const ModalPopUp = (props) => {
  const {
    title,
    body,
    primaryText,
    secondaryText,
    show,
    primaryFunction,
    setShow,
    shoSecondaryText,
  } = props;
  return (
    <div
      className={`modal ${show ? 'd-block' : 'd-none'}`}
      tabIndex='-1'
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{title}</h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
              onClick={() => setShow(!show)}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>{body}</div>
          <div className='modal-footer'>
            {shoSecondaryText && (
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
                onClick={() => {
                  setShow(!show);
                }}
              >
                {secondaryText}
              </button>
            )}
            <button
              type='button'
              className='btn btn-warning'
              onClick={() => primaryFunction()}
            >
              {primaryText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPopUp;
