import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Modal extends Component {

  render() {

   if(!this.props.show) {
     return null;
   }

   const backdropStyle = {
     position: 'fixed',
     top: 20,
     bottom: 0,
     left: 0,
     right: 0,
     backgroundColor: 'rgba(0,0,0,0.3)',
     padding: 50
   };

   const modalStyle = {
     backgroundColor: '#fff',
     borderRadius: 5,
     maxWidth: 500,
     minHeight: 100,
     margin: '0 auto',
     paddingTop: 25,

   };

   return (
     <div className="backdrop" style={backdropStyle}>
       <div className="modal-window" style={modalStyle}>
         <h2 className="formTitle">Tell us about your company</h2>
         {this.props.children}

         <div className="footer">
           <button onClick={this.props.onClose}>
             Close
           </button>
         </div>
       </div>
     </div>
   );
 }
}

Modal.propTypes = {
 onClose: PropTypes.func.isRequired,
 show: PropTypes.bool,
 children: PropTypes.node
};

export default Modal
