//React
import React from 'react';

//Images
import closeBtn from '../../assets/closeBtn.svg';
import warningLogo from '../../assets/warningLogo.svg';
import informativeLogo from '../../assets/informativeLogo.svg';
import errorLogo from '../../assets/errorLogo.svg';
import successLogo from '../../assets/successLogo.svg';

//Style
import './style.css';
import './responsive.css';

export function Modal({isOpen, setIsOpen, isScrollable, type, iconToDisplay, title, message})
{
    //Display of a default icon if the modal belongs to a predefined type and no icon is specified.
    const icon =  iconToDisplay ?? getDefaultIcons(type)

    //Allows to close the modal when clicking on the button and restores the possibility to scroll if it was blocked.
    const closeModal = () => {
        setIsOpen(false)
        if(isScrollable == false){enableScroll();}
    }

    //If the modal is open then the content of the modal is returned.
    if(isOpen)
    {
        //Disable the scroll if the user wants it.
        if(isScrollable == false){disableScroll();}

        return (
            <section className='modal-container'>
                <div className={"modal modal--" + type}>

                    <div className={"modal__header modal__header--" + type}>
                        <h2 className="modal__header__title">{type}</h2>
                        <button className="modal__header__closeBtn" onClick={() => closeModal()} ><img className="modal__header__closeBtn__img" src={closeBtn} alt="Fermer"/></button>
                    </div>

                    <div className="modal__main-content">
                        <img className='modal__main-content__icon' src={icon} alt={"Icone"}/>
                        <h1 className='modal__main-content__title'>{title}</h1>
                    </div>
                    
                    <div className='modal__main-content'>
                        <p className='modal__main-content__message'>{message}</p>
                    </div>

                    <button className={'modal__closeBtn modal__closeBtn--' + type}  onClick={() =>closeModal()}>Fermer</button>
                </div>
            </section>
        )
    }
}

//Allows to set the default icons to be displayed for the predefined types.
function getDefaultIcons(type)
{
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
            defaultIcon = errorLogo
            break;
    
        default:
            console.log("An error has occurred. The default icons are not available.")
            break;
    }

    return defaultIcon
}

function enableScroll()
{
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("no-scroll-modal");
}

function disableScroll()
{
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("no-scroll-modal");
}