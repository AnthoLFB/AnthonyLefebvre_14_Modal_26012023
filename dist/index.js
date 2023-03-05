import React from 'react';

var closeBtn = "export default \"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2250%22%20height%3D%2250%22%20viewBox%3D%220%200%2050%2050%22%3E%20%20%20%20%3Cpath%20d%3D%22M%2025%202%20C%2012.309534%202%202%2012.309534%202%2025%20C%202%2037.690466%2012.309534%2048%2025%2048%20C%2037.690466%2048%2048%2037.690466%2048%2025%20C%2048%2012.309534%2037.690466%202%2025%202%20z%20M%2025%204%20C%2036.609534%204%2046%2013.390466%2046%2025%20C%2046%2036.609534%2036.609534%2046%2025%2046%20C%2013.390466%2046%204%2036.609534%204%2025%20C%204%2013.390466%2013.390466%204%2025%204%20z%20M%2032.990234%2015.986328%20A%201.0001%201.0001%200%200%200%2032.292969%2016.292969%20L%2025%2023.585938%20L%2017.707031%2016.292969%20A%201.0001%201.0001%200%200%200%2016.990234%2015.990234%20A%201.0001%201.0001%200%200%200%2016.292969%2017.707031%20L%2023.585938%2025%20L%2016.292969%2032.292969%20A%201.0001%201.0001%200%201%200%2017.707031%2033.707031%20L%2025%2026.414062%20L%2032.292969%2033.707031%20A%201.0001%201.0001%200%201%200%2033.707031%2032.292969%20L%2026.414062%2025%20L%2033.707031%2017.707031%20A%201.0001%201.0001%200%200%200%2032.990234%2015.986328%20z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E\"";

var warningLogo = "export default \"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20width%3D%22800px%22%20height%3D%22800px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2016.99V17M12%207V14M21%2012C21%2016.9706%2016.9706%2021%2012%2021C7.02944%2021%203%2016.9706%203%2012C3%207.02944%207.02944%203%2012%203C16.9706%203%2021%207.02944%2021%2012Z%22%20stroke%3D%22%23906200%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E\"";

var informativeLogo = "export default \"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%22800px%22%20height%3D%22800px%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Ctitle%3Einformation_line%3C%2Ftitle%3E%20%20%20%20%3Cg%20id%3D%22%E9%A1%B5%E9%9D%A2-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22System%22%20transform%3D%22translate%28-672.000000%2C%200.000000%29%22%20fill-rule%3D%22nonzero%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22information_line%22%20transform%3D%22translate%28672.000000%2C%200.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M24%2C0%20L24%2C24%20L0%2C24%20L0%2C0%20L24%2C0%20Z%20M12.5934901%2C23.257841%20L12.5819402%2C23.2595131%20L12.5108777%2C23.2950439%20L12.4918791%2C23.2987469%20L12.4918791%2C23.2987469%20L12.4767152%2C23.2950439%20L12.4056548%2C23.2595131%20C12.3958229%2C23.2563662%2012.3870493%2C23.2590235%2012.3821421%2C23.2649074%20L12.3780323%2C23.275831%20L12.360941%2C23.7031097%20L12.3658947%2C23.7234994%20L12.3769048%2C23.7357139%20L12.4804777%2C23.8096931%20L12.4953491%2C23.8136134%20L12.4953491%2C23.8136134%20L12.5071152%2C23.8096931%20L12.6106902%2C23.7357139%20L12.6232938%2C23.7196733%20L12.6232938%2C23.7196733%20L12.6266527%2C23.7031097%20L12.609561%2C23.275831%20C12.6075724%2C23.2657013%2012.6010112%2C23.2592993%2012.5934901%2C23.257841%20L12.5934901%2C23.257841%20Z%20M12.8583906%2C23.1452862%20L12.8445485%2C23.1473072%20L12.6598443%2C23.2396597%20L12.6498822%2C23.2499052%20L12.6498822%2C23.2499052%20L12.6471943%2C23.2611114%20L12.6650943%2C23.6906389%20L12.6699349%2C23.7034178%20L12.6699349%2C23.7034178%20L12.678386%2C23.7104931%20L12.8793402%2C23.8032389%20C12.8914285%2C23.8068999%2012.9022333%2C23.8029875%2012.9078286%2C23.7952264%20L12.9118235%2C23.7811639%20L12.8776777%2C23.1665331%20C12.8752882%2C23.1545897%2012.8674102%2C23.1470016%2012.8583906%2C23.1452862%20L12.8583906%2C23.1452862%20Z%20M12.1430473%2C23.1473072%20C12.1332178%2C23.1423925%2012.1221763%2C23.1452606%2012.1156365%2C23.1525954%20L12.1099173%2C23.1665331%20L12.0757714%2C23.7811639%20C12.0751323%2C23.7926639%2012.0828099%2C23.8018602%2012.0926481%2C23.8045676%20L12.108256%2C23.8032389%20L12.3092106%2C23.7104931%20L12.3186497%2C23.7024347%20L12.3186497%2C23.7024347%20L12.3225043%2C23.6906389%20L12.340401%2C23.2611114%20L12.337245%2C23.2485176%20L12.337245%2C23.2485176%20L12.3277531%2C23.2396597%20L12.1430473%2C23.1473072%20Z%22%20id%3D%22MingCute%22%20fill-rule%3D%22nonzero%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%2C2%20C17.5228%2C2%2022%2C6.47715%2022%2C12%20C22%2C17.5228%2017.5228%2C22%2012%2C22%20C6.47715%2C22%202%2C17.5228%202%2C12%20C2%2C6.47715%206.47715%2C2%2012%2C2%20Z%20M12%2C4%20C7.58172%2C4%204%2C7.58172%204%2C12%20C4%2C16.4183%207.58172%2C20%2012%2C20%20C16.4183%2C20%2020%2C16.4183%2020%2C12%20C20%2C7.58172%2016.4183%2C4%2012%2C4%20Z%20M11.99%2C10%20C12.5478%2C10%2013%2C10.4522%2013%2C11.01%20L13%2C16.1338%20C13.2989%2C16.3067%2013.5%2C16.6299%2013.5%2C17%20C13.5%2C17.5523%2013.0523%2C18%2012.5%2C18%20L12.01%2C18%20C11.4521%2C18%2011%2C17.5478%2011%2C16.99%20L11%2C12%20C10.4477%2C12%2010%2C11.5523%2010%2C11%20C10%2C10.4477%2010.4477%2C10%2011%2C10%20L11.99%2C10%20Z%20M12%2C7%20C12.5523%2C7%2013%2C7.44772%2013%2C8%20C13%2C8.55228%2012.5523%2C9%2012%2C9%20C11.4477%2C9%2011%2C8.55228%2011%2C8%20C11%2C7.44772%2011.4477%2C7%2012%2C7%20Z%22%20id%3D%22%E5%BD%A2%E7%8A%B6%22%20fill%3D%22%230b508f%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E\"";

var errorLogo = "export default \"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20fill%3D%22%23931a10%22%20width%3D%22800px%22%20height%3D%22800px%22%20viewBox%3D%220%200%2064%2064%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3Aserif%3D%22http%3A%2F%2Fwww.serif.com%2F%22%20style%3D%22fill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A2%3B%22%3E%3Crect%20id%3D%22Icons%22%20x%3D%22-704%22%20y%3D%22-64%22%20width%3D%221280%22%20height%3D%22800%22%20style%3D%22fill%3Anone%3B%22%2F%3E%3Cg%20id%3D%22Icons1%22%20serif%3Aid%3D%22Icons%22%3E%3Cg%20id%3D%22Strike%22%3E%3C%2Fg%3E%3Cg%20id%3D%22H1%22%3E%3C%2Fg%3E%3Cg%20id%3D%22H2%22%3E%3C%2Fg%3E%3Cg%20id%3D%22H3%22%3E%3C%2Fg%3E%3Cg%20id%3D%22list-ul%22%3E%3C%2Fg%3E%3Cg%20id%3D%22hamburger-1%22%3E%3C%2Fg%3E%3Cg%20id%3D%22hamburger-2%22%3E%3C%2Fg%3E%3Cg%20id%3D%22list-ol%22%3E%3C%2Fg%3E%3Cg%20id%3D%22list-task%22%3E%3C%2Fg%3E%3Cg%20id%3D%22trash%22%3E%3C%2Fg%3E%3Cg%20id%3D%22vertical-menu%22%3E%3C%2Fg%3E%3Cg%20id%3D%22horizontal-menu%22%3E%3C%2Fg%3E%3Cg%20id%3D%22sidebar-2%22%3E%3C%2Fg%3E%3Cg%20id%3D%22Pen%22%3E%3C%2Fg%3E%3Cg%20id%3D%22Pen1%22%20serif%3Aid%3D%22Pen%22%3E%3C%2Fg%3E%3Cg%20id%3D%22clock%22%3E%3C%2Fg%3E%3Cg%20id%3D%22external-link%22%3E%3C%2Fg%3E%3Cg%20id%3D%22hr%22%3E%3C%2Fg%3E%3Cg%20id%3D%22info%22%3E%3C%2Fg%3E%3Cg%20id%3D%22warning%22%3E%3C%2Fg%3E%3Cpath%20id%3D%22error-circle%22%20d%3D%22M32.085%2C56.058c6.165%2C-0.059%2012.268%2C-2.619%2016.657%2C-6.966c5.213%2C-5.164%207.897%2C-12.803%206.961%2C-20.096c-1.605%2C-12.499%20-11.855%2C-20.98%20-23.772%2C-20.98c-9.053%2C0%20-17.853%2C5.677%20-21.713%2C13.909c-2.955%2C6.302%20-2.96%2C13.911%200%2C20.225c3.832%2C8.174%2012.488%2C13.821%2021.559%2C13.908c0.103%2C0.001%200.205%2C0.001%200.308%2C0Zm-0.282%2C-4.003c-9.208%2C-0.089%20-17.799%2C-7.227%20-19.508%2C-16.378c-1.204%2C-6.452%201.07%2C-13.433%205.805%2C-18.015c5.53%2C-5.35%2014.22%2C-7.143%2021.445%2C-4.11c6.466%2C2.714%2011.304%2C9.014%2012.196%2C15.955c0.764%2C5.949%20-1.366%2C12.184%20-5.551%2C16.48c-3.672%2C3.767%20-8.82%2C6.016%20-14.131%2C6.068c-0.085%2C0%20-0.171%2C0%20-0.256%2C0Zm-12.382%2C-10.29l9.734%2C-9.734l-9.744%2C-9.744l2.804%2C-2.803l9.744%2C9.744l10.078%2C-10.078l2.808%2C2.807l-10.078%2C10.079l10.098%2C10.098l-2.803%2C2.804l-10.099%2C-10.099l-9.734%2C9.734l-2.808%2C-2.808Z%22%2F%3E%3Cg%20id%3D%22plus-circle%22%3E%3C%2Fg%3E%3Cg%20id%3D%22minus-circle%22%3E%3C%2Fg%3E%3Cg%20id%3D%22vue%22%3E%3C%2Fg%3E%3Cg%20id%3D%22cog%22%3E%3C%2Fg%3E%3Cg%20id%3D%22logo%22%3E%3C%2Fg%3E%3Cg%20id%3D%22radio-check%22%3E%3C%2Fg%3E%3Cg%20id%3D%22eye-slash%22%3E%3C%2Fg%3E%3Cg%20id%3D%22eye%22%3E%3C%2Fg%3E%3Cg%20id%3D%22toggle-off%22%3E%3C%2Fg%3E%3Cg%20id%3D%22shredder%22%3E%3C%2Fg%3E%3Cg%20id%3D%22spinner--loading--dots-%22%20serif%3Aid%3D%22spinner%20%5Bloading%2C%20dots%5D%22%3E%3C%2Fg%3E%3Cg%20id%3D%22react%22%3E%3C%2Fg%3E%3Cg%20id%3D%22check-selected%22%3E%3C%2Fg%3E%3Cg%20id%3D%22turn-off%22%3E%3C%2Fg%3E%3Cg%20id%3D%22code-block%22%3E%3C%2Fg%3E%3Cg%20id%3D%22user%22%3E%3C%2Fg%3E%3Cg%20id%3D%22coffee-bean%22%3E%3C%2Fg%3E%3Cg%20id%3D%22coffee-beans%22%3E%3Cg%20id%3D%22coffee-bean1%22%20serif%3Aid%3D%22coffee-bean%22%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20id%3D%22coffee-bean-filled%22%3E%3C%2Fg%3E%3Cg%20id%3D%22coffee-beans-filled%22%3E%3Cg%20id%3D%22coffee-bean2%22%20serif%3Aid%3D%22coffee-bean%22%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20id%3D%22clipboard%22%3E%3C%2Fg%3E%3Cg%20id%3D%22clipboard-paste%22%3E%3C%2Fg%3E%3Cg%20id%3D%22clipboard-copy%22%3E%3C%2Fg%3E%3Cg%20id%3D%22Layer1%22%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\"";

var successLogo = "export default \"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20width%3D%22800px%22%20height%3D%22800px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M17%209L9.99998%2016L6.99994%2013M21%2012C21%2016.9706%2016.9706%2021%2012%2021C7.02944%2021%203%2016.9706%203%2012C3%207.02944%207.02944%203%2012%203C16.9706%203%2021%207.02944%2021%2012Z%22%20stroke%3D%22%23405d2a%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E\"";

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".no-scroll-modal{overflow:hidden}.modal-container{background-color:rgba(39,39,39,.5);border:0;height:100vh;justify-content:center;left:0;margin:0;padding:0;position:absolute;top:0;width:100%;z-index:9999}.modal,.modal-container{align-items:center;display:flex}.modal{border-radius:15px;flex-direction:column;gap:25px;margin:0 25px;max-width:650px;overflow:hidden;width:calc(100% - 50px)}.modal>div{align-items:center;display:flex;flex-direction:row;justify-content:center}.modal>div:not(.modal__header){margin:0 2em;width:calc(100% - 4em)}.modal__header{border-top-left-radius:15px;border-top-right-radius:15px;justify-content:center;min-height:55px;padding:0 15px;position:relative;width:calc(100% - 30px)}.modal__header__closeBtn{background:transparent;border:0;cursor:pointer;margin:0;padding:0;position:absolute;right:15px}.modal__header__closeBtn,.modal__header__closeBtn__img{height:35px;width:35px}.modal__header__title{font-size:20px;letter-spacing:1px;text-transform:uppercase}.modal__main-content{gap:25px}.modal__main-content__icon{height:100px;margin:0;padding:0;width:100px}.modal__main-content__title{font-size:24px;text-align:center}.modal__main-content__message{font-size:16px;letter-spacing:.8px;text-align:justify}.modal__closeBtn{border:1px solid;border-radius:5px;margin:0 1em 25px;max-width:150px;padding:10px;width:calc(100% - 2em)}.modal__closeBtn:hover{color:#fff}.modal--warning{background-color:#fdf8e3;border:2px solid #ffd069}.modal--informative{background-color:#d9edf6;border:2px solid #8ec4f6}.modal--success{background-color:#def0d8;border:2px solid #a6ca8a}.modal--error{background-color:#f2dedf;border:2px solid #f5aca6}.modal__header--warning{background-color:#ffd069;color:#906200}.modal__header--informative{background-color:#8ec4f6;color:#0b508f}.modal__header--success{background-color:#a6ca8a;color:#405d2a}.modal__header--error{background-color:#f5aca6;color:#931a10}.modal__closeBtn--warning{background-color:#fdf8e3;border-color:#ffd069;color:#906200}.modal__closeBtn--informative{background-color:#d9edf6;border-color:#8ec4f6;color:#0b508f}.modal__closeBtn--success{background-color:#def0d8;border-color:#a6ca8a;color:#405d2a}.modal__closeBtn--error{background-color:#f2dedf;border-color:#f5aca6;color:#931a10}.modal__closeBtn--warning:hover{background-color:#ffd069}.modal__closeBtn--informative:hover{background-color:#8ec4f6}.modal__closeBtn--success:hover{background-color:#a6ca8a}.modal__closeBtn--error:hover{background-color:#f5aca6}";
styleInject(css_248z$1);

var css_248z = "@media (max-width:576px){.modal>div{flex-direction:column}.modal__main-content__title{border-bottom:3px solid #405d2a;padding-bottom:25px}}";
styleInject(css_248z);

//React
function Modal({
  isOpen,
  setIsOpen,
  isScrollable,
  type,
  iconToDisplay,
  title,
  message
}) {
  //Display of a default icon if the modal belongs to a predefined type and no icon is specified.
  const icon = iconToDisplay ?? getDefaultIcons(type);

  //Allows to close the modal when clicking on the button and restores the possibility to scroll if it was blocked.
  const closeModal = () => {
    setIsOpen(false);
    if (isScrollable == false) {
      enableScroll();
    }
  };

  //If the modal is open then the content of the modal is returned.
  if (isOpen) {
    //Disable the scroll if the user wants it.
    if (isScrollable == false) {
      disableScroll();
    }
    return /*#__PURE__*/React.createElement("section", {
      className: "modal-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal modal--" + type
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal__header modal__header--" + type
    }, /*#__PURE__*/React.createElement("h2", {
      className: "modal__header__title"
    }, type), /*#__PURE__*/React.createElement("button", {
      className: "modal__header__closeBtn",
      onClick: () => closeModal()
    }, /*#__PURE__*/React.createElement("img", {
      className: "modal__header__closeBtn__img",
      src: closeBtn,
      alt: "Fermer"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "modal__main-content"
    }, /*#__PURE__*/React.createElement("img", {
      className: "modal__main-content__icon",
      src: icon,
      alt: "Icone"
    }), /*#__PURE__*/React.createElement("h1", {
      className: "modal__main-content__title"
    }, title)), /*#__PURE__*/React.createElement("div", {
      className: "modal__main-content"
    }, /*#__PURE__*/React.createElement("p", {
      className: "modal__main-content__message"
    }, message)), /*#__PURE__*/React.createElement("button", {
      className: 'modal__closeBtn modal__closeBtn--' + type,
      onClick: () => closeModal()
    }, "Fermer")));
  }
}

//Allows to set the default icons to be displayed for the predefined types.
function getDefaultIcons(type) {
  let defaultIcon;
  switch (type) {
    case 'warning':
      defaultIcon = warningLogo;
      break;
    case 'informative':
      defaultIcon = informativeLogo;
      break;
    case 'success':
      defaultIcon = successLogo;
      break;
    case 'error':
      defaultIcon = errorLogo;
      break;
    default:
      console.log("An error has occurred. The default icons are not available.");
      break;
  }
  return defaultIcon;
}
function enableScroll() {
  var body = document.getElementsByTagName("body")[0];
  body.classList.remove("no-scroll-modal");
}
function disableScroll() {
  var body = document.getElementsByTagName("body")[0];
  body.classList.add("no-scroll-modal");
}

export { Modal };
