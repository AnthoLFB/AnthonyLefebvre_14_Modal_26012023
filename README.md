# Modal Component  
React library to display a modal. This library was created as part of the project "Faites passer une librairie jQuery vers React" of OpenClassrooms  

## Installation  

### NPM - Link  
https://www.npmjs.com/package/anthony_lfb_modal_p14  

### NPM - Command  
To install the modal via NPM run the following command:   
`npm i anthony_lfb_modal_p14`  

## How it works  

### Importation  
The import of the component in your project is done via this line of code:  
`import {Modal} from 'anthony_lfb_modal_p14';`  

### Explanation of the functioning  
The component takes several props:  

#### isOpen  
__Type__ : Boolean  
__Description__ : Boolean allowing to define the display state of the modal.   
`True` the modal is displayed.   
`False` the modal is not displayed .  

#### setIsOpen  
__Description__ : is the useState() function of React to change the state of the modal  

#### isScrollable  
__Type__ : Boolean   
__Description__ : Boolean allowing to define if the content in the background of the modal is scrollable or not.   
`True` The content is scrollable.   
`False` The content is not scrollable.  

#### type  
__Type__ : Text   
__Description__ : This props allows you to define the type of modal to display.   
By default the modal has 4 predefined types: "warning", "error", "success" and "informative".   
Each type has a predefined style. If the user does not want to use one of these types, he puts "custom" instead.   
`warning` : Allows to display a warning modal with a yellow style.   
`error` : Allows to display an error modal with a red style.  
`success` : Allows to display a success modal with a green style.   
`informative` : Allows you to display a modal of information with a blue style.  
`custom (or whatever you want)` : No style.  

#### iconToDisplay  
__Type__ : Text   
__Description__ : Allows you to customize the icon to be displayed.   
If a predefined style is chosen, it has a predefined icon as well. (This one is still modifiable).   
If you want to use the predefined icons via the style, leave the props in null.  
If you want to use them on another type of modal put "typeLogo" in the props :  
`warningLogo` : warning sign.   
`errorLogo` : error sign.  
`successLogo` : success sign.   
`informativeLogo` : information sign.  
`YourLogo` : Your custom logo. (You can name it whatever you want)   

#### title  
__Type__ : Text   
__Description__ : Title of the modal.   

#### message  
__Type__ : Text   
__Description__ : Message of the modal.  

### Example

We use useState() to define the state. By default the modal is not displayed.  
``const [modalStatus, setmodalStatus] = useState(false);``

We use the component like this :    
``<Modal isOpen={modalStatus} setIsOpen={setmodalStatus} isScrollable={true} type={"informative"} iconToDisplay={null} title={"Hello world"} message={"If you open the modal, you will see me appear !"}/>``  
